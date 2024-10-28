<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\Store;

class StoreController extends Controller
{
    /**
     * index
     *
     * @return void
     */
    public function index()
    {
        $stores = Store::latest()->paginate(12);

        //render inertia
        return inertia('Web/Stores/Index', [
            'stores' => $stores,
        ]);
    }

    /**
     * show
     *
     * @param  mixed $slug
     * @return void
     */
    public function show($slug)
    {

        //get category
        $store = Store::where('slug', $slug)->with('products.productImages', 'products.productSizes', 'products.store')->firstOrFail();

        //render inertia
        return inertia('Web/Stores/Show', [
            'store' => $store,
        ]);
    }
}
