<?php

namespace App\Http\Controllers\Account;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Product;
use App\Models\ProductImage;
use App\Models\Store;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //get products
        $products = Product::when(request()->q, function ($products) {
            $products = $products->where('title', 'like', '%' . request()->q . '%');
        })->with('category', 'store')->latest()->paginate(5);

        //append query string to pagination links
        $products->appends(['q' => request()->q]);

        //return inertia
        return inertia('Account/Products/Index', [
            'products' => $products,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //get all categories
        $categories = Category::all();

        //get all categories
        $stores = Store::all();

        return inertia('Account/Products/Create', [
            'categories' => $categories,
            'stores' => $stores,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        /**
         * Validate request
         */
        $request->validate([
            'title' => 'required|unique:products',
            'category_id' => 'required',
            'store_id' => 'required',
            'description' => 'required',
            'product_sizes' => 'required|array|min:2',
        ]);

        /**
         * Create product
         */
        $product = Product::create([
            'title' => $request->title,
            'slug' => Str::slug($request->title, '-'),
            'category_id' => $request->category_id,
            'store_id' => $request->store_id,
            'description' => $request->description,
        ]);

        //insert product size and price
        if ($request->product_sizes > 0) {

            foreach ($request->product_sizes as $data) {

                $product->productSizes()->create([
                    'size' => $data['size'],
                    'price' => (int) $data['price'],
                ]);

            }
        }

        //redirect
        return redirect()->route('account.products.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //get product by ID
        $product = Product::findOrFail($id);

        //get relation productImages with pagination
        $product->setRelation('productImages', $product->productImages()->paginate(5));

        //return
        return inertia('Account/Products/Show', [
            'product' => $product,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //get product
        $product = Product::with('productSizes')->findOrFail($id);

        //get all categories
        $categories = Category::all();

        //get all categories
        $stores = Store::all();

        //render with inertia
        return inertia('Account/Products/Edit', [
            'product' => $product,
            'categories' => $categories,
            'stores' => $stores,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product)
    {
        /**
         * Validate request
         */
        $request->validate([
            'title' => 'required|unique:products',
            'category_id' => 'required',
            'store_id' => 'required',
            'description' => 'required',
            'product_sizes' => 'required|array|min:2',
        ]);

        /**
         * Update product
         */
        $product->update([
            'title' => $request->title,
            'slug' => Str::slug($request->title, '-'),
            'category_id' => $request->category_id,
            'store_id' => $request->store_id,
            'description' => $request->description,
        ]);

        // Insert or update product sizes and prices
        if (count($request->product_sizes) > 0) {

            // Get all IDs from the request to identify sizes to keep
            $ids = Arr::pluck($request->product_sizes, 'id');

            // Delete sizes not in the request
            $product->productSizes()->whereNotIn('id', $ids)->delete();

            // Loop through each product size in the request
            foreach ($request->product_sizes as $data) {
                if (isset($data['id'])) {
                    // Update existing size and price if 'id' exists
                    $product->productSizes()->where('id', $data['id'])->update([
                        'size' => $data['size'],
                        'price' => (int) $data['price'],
                    ]);
                } else {
                    // Insert new size if no 'id' is provided
                    $product->productSizes()->create([
                        'size' => $data['size'],
                        'price' => (int) $data['price'],
                    ]);
                }
            }
        }

        //redirect
        return redirect()->route('account.products.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //find product by ID
        $product = Product::findOrFail($id);

        //delete product
        $product->delete();

        //redirect
        return redirect()->route('account.products.index');
    }

    /**
     * storeImageProduct
     *
     * @param  mixed $request
     * @return void
     */
    public function storeImageProduct(Request $request)
    {
        /**
         * Validate request
         */
        $request->validate([
            'image' => 'required|mimes:png,jpg',
        ]);

        //get product by ID
        $product = Product::findOrFail($request->product_id);

        // Get request file image
        $image = $request->file('image');

// Pastikan file ada dan valid
        if ($image && $image->isValid()) {
            // Generate unique name for the image
            $imageName = $image->hashName();

            // Move to the 'products' directory within the 'public' directory
            $image->move(public_path('products'), $imageName);

            // Insert image path into the database
            $product->productImages()->create([
                'image' => 'products/' . $imageName, // Gunakan nama file yang telah di-hash
            ]);
        } else {
            // Jika tidak ada file yang diunggah atau ada kesalahan
            return redirect()->back()->withErrors(['image' => 'Gambar tidak valid atau tidak diunggah.']);
        }

        //return back
        return redirect()->back();
    }

    /**
     * destroyImage
     *
     * @param  mixed $id
     * @return void
     */
    public function destroyImage($id)
    {
        //find product image by ID
        $product_image = ProductImage::findOrFail($id);

        // Remove image from public directory
        if (file_exists(public_path($product_image->image))) {
            unlink(public_path($product_image->image));
        }

        //delete image
        $product_image->delete();

        //redirect
        return redirect()->back();
    }
}
