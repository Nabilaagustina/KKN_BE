<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\Category;

class CategoryController extends Controller
{
    /**
     * index
     *
     * @return void
     */
    public function index()
    {
        //get categories
        $categories = Category::latest()->paginate(12);

        //render inertia
        return inertia('Web/Categories/Index', [
            'categories' => $categories,
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
        $category = Category::where('slug', $slug)->with('products.productImages', 'products.productSizes', 'products.store')->firstOrFail();

        //render inertia
        return inertia('Web/Categories/Show', [
            'category' => $category,
        ]);
    }
}
