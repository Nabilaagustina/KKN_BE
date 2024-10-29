<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\Cart;
use App\Models\Transaction;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CheckoutController extends Controller
{
    /**
     * index
     *
     * @return void
     */
    public function index()
    {
        //check if cart empty
        if (Cart::where('user_id', auth()->user()->id)->count() == 0) {
            return redirect()->route('web.carts.index');
        }

        //return
        return inertia('Web/Checkouts/Index');
    }

    /**
     * store
     *
     * @param  mixed $request
     * @return void
     */
    public function store(Request $request)
    {
        $duitkuConfig = new \Duitku\Config(config('duitku.merchant_key'), config('duitku.merchant_code'));
        // true for sandbox mode, false for production mode
        $duitkuConfig->setSandboxMode(config('duitku.sandbox_mode'));
        // set sanitizer (default : true)
        $duitkuConfig->setSanitizedMode(true);
        // set log parameter (default : true)
        $duitkuConfig->setDuitkuLogs(false);

        DB::transaction(function () use ($duitkuConfig, $request) {

            $paymentAmount = $request->grand_total;
            $email = $request->email;
            $merchantOrderId = 'INV-' . time();
            $productDetails = "Pembayaran untuk Invoice : " . $merchantOrderId;
            $customerVaName = $request->name;
            $callbackUrl = config('app.url') . '/callback'; // url for callback
            $returnUrl = config('app.url') . '/account/transactions/' . $merchantOrderId; // url for redirect
            $expiryPeriod = 1440; // set the expired time in minutes

            //create transaction
            $transaction = Transaction::create([
                'invoice' => $merchantOrderId,
                'user_id' => auth()->user()->id,
                'grand_total' => $request->grand_total,
                'status' => 'UNPAID',
            ]);

            //create transaction details & item details

            // Item Details
            $item_details = [];

            foreach (Cart::with('product')->where('user_id', auth()->user()->id)->get() as $cart) {

                //insert product ke table transaction_details
                $transaction->transactionDetails()->create([
                    'transaction_id' => $transaction->id,
                    'product_id' => $cart->product->id,
                    'product_image' => basename($cart->product_image),
                    'size' => $cart->size,
                    'qty' => $cart->qty,
                    'price' => $cart->price,
                ]);

                //assign item details
                $item_details[] = array(
                    'name' => $cart->product->title,
                    'price' => $cart->price,
                    'quantity' => $cart->qty,
                );
            }

            //remove data carts
            Cart::with('product')->where('user_id', auth()->user()->id)->delete();

            $customerDetail = array(
                'firstName' => $request->name,
                'email' => $request->email,
                'billingAddress' => array(
                    'firstName' => $request->name,
                ),
                'shippingAddress' => array(
                    'firstName' => $request->name,
                ),
            );

            $payload = array(
                'paymentAmount' => $paymentAmount,
                'merchantOrderId' => $merchantOrderId,
                'productDetails' => $productDetails,
                'customerVaName' => $customerVaName,
                'email' => $email,
                'itemDetails' => $item_details,
                'customerDetail' => $customerDetail,
                'callbackUrl' => $callbackUrl,
                'returnUrl' => $returnUrl,
                'expiryPeriod' => $expiryPeriod,
            );

            try {
                // createInvoice Request
                $responseDuitkuPop = \Duitku\Pop::createInvoice($payload, $duitkuConfig);

                //get reference
                $getReference = json_decode($responseDuitkuPop, true);

                //insert reference to table transactions
                $transaction->reference = $getReference['reference'];
                $transaction->save();

                //make response "invoice"
                $this->response['invoice'] = $transaction->invoice;

            } catch (Exception $e) {
                echo $e->getMessage();
            }
        });

        return redirect()->route('account.transactions.show', $this->response);
    }
}
