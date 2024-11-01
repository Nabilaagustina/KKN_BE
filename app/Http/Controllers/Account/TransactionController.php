<?php

namespace App\Http\Controllers\Account;

use App\Http\Controllers\Controller;
use App\Models\Store;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;

class TransactionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        /**
         * get role
         */
        $role = auth()->user()->getRoleNames();

        /**
         * get transactions
         */
        $stores = Store::all();

        if ($role[0] == 'admin') {
            //get transactions
            $transactions = Transaction::with('transactionDetails.product', 'transactionDetails.product.store', 'user')->when(request()->q, function ($categories) {
                $categories = $categories->where('invoice', 'like', '%' . request()->q . '%');
            })->latest()->paginate(5);

        } else {

            //get transactions
            $transactions = Transaction::with('transactionDetails.product', 'transactionDetails.product.store', 'user')->when(request()->q, function ($categories) {
                $categories = $categories->where('invoice', 'like', '%' . request()->q . '%');
            })->where('user_id', auth()->user()->id)->latest()->paginate(5);

        }

        //append query string to pagination links
        $transactions->appends(['q' => request()->q]);

        //return inertia
        return inertia('Account/Transactions/Index', [
            'transactions' => $transactions,
            'stores' => $stores,
        ]);
    }

    /**
     * show
     *
     * @param  mixed $invoice
     * @return void
     */
    public function show($invoice)
    {
        //get detail transaction by "reference"
        $transaction = Transaction::with('transactionDetails.product', 'transactionDetails.product.store', 'user')->where('invoice', $invoice)->first();

        //return inertia
        return inertia('Account/Transactions/Show', [
            'transaction' => $transaction,
        ]);
    }

    // Fungsi untuk menampilkan halaman ekspor
    public function exportPage()
    {
        $stores = Store::all();
        return inertia('Account/Transactions/TransactionExport', [
            'stores' => $stores,
            'csrf_token' => csrf_token(), // Pass CSRF token
        ]);
    }

    public function export(Request $request)
    {
        // Mendapatkan ID toko dari request
        $storeId = $request->input('store_id');
        if (is_null($storeId)) {
            return response()->json(['error' => 'Store ID is required.'], 400);
        }

        // Mengambil transaksi terkait dengan toko yang dipilih
        $transactions = Transaction::whereHas('transactionDetails', function ($query) use ($storeId) {
            $query->whereHas('product.store', function ($query) use ($storeId) {
                $query->where('id', $storeId);
            });
        })
            ->with(['transactionDetails' => function ($query) use ($storeId) {
                $query->whereHas('product.store', function ($query) use ($storeId) {
                    $query->where('id', $storeId);
                });
            }, 'transactionDetails.product.store', 'user'])
            ->get();

        if ($transactions->isEmpty()) {
            return response()->json(['info' => 'No transactions found for this store.'], 404);
        }

        // Menyiapkan response CSV
        $filename = "transactions_store_{$storeId}.csv";
        $headers = [
            'Content-Type' => 'text/csv',
            'Content-Disposition' => "attachment; filename={$filename}",
        ];

        $callback = function () use ($transactions) {
            $file = fopen('php://output', 'w');
            fputcsv($file, ['Transaction ID', 'Status', 'Nama Store', 'Invoice', 'Nama User', 'Harga', 'Size', 'Product', 'Quantity']);

            foreach ($transactions as $transaction) {
                foreach ($transaction->transactionDetails as $detail) {
                    // Memastikan hanya data dari toko yang diinginkan yang dieksport
                    if ($detail->product->store->id == $transaction->transactionDetails->first()->product->store->id) {
                        fputcsv($file, [
                            $transaction->id,
                            $transaction->status,
                            $detail->product->store->name,
                            $transaction->invoice,
                            $transaction->user->name,
                            $detail->price,
                            $detail->size,
                            $detail->product->title,
                            $detail->qty,
                        ]);
                    }
                }
            }
            fclose($file);
        };

        return response()->stream($callback, 200, $headers);
    }

}
