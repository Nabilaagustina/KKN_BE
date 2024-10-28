<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Product;
use App\Models\Store;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {

        //get categories 4 items
        $categories = Category::latest()->take(4)->get();

        //get products
        $products = Product::with('productImages', 'productSizes', 'store')->latest()->take(8)->get();

        $stores = Store::latest()->take(4)->get();

        return inertia('Web/Home/Index', [
            'categories' => $categories,
            'products' => $products,
            'stores' => $stores,
        ]);
    }
}
