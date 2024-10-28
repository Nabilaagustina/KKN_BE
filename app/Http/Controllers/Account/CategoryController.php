<?php

namespace App\Http\Controllers\Account;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //get categories
        $categories = Category::when(request()->q, function ($categories) {
            $categories = $categories->where('name', 'like', '%' . request()->q . '%');
        })->latest()->paginate(5);

        //append query string to pagination links
        $categories->appends(['q' => request()->q]);

        //return inertia
        return inertia('Account/Categories/Index', [
            'categories' => $categories,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return inertia('Account/Categories/Create');
    }

    public function edit(Category $category)
    {
        return inertia('Account/Categories/Edit', [
            'category' => $category,
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
         * validate
         */
        $request->validate([
            'image' => 'required|image|mimes:jpeg,jpg,png|max:2000',
            'name' => 'required|unique:categories',
        ]);

        // Upload image directly to the public directory
        $image = $request->file('image');
        $imageName = $image->hashName();
        $image->move(public_path('categories'), $imageName);

        // Create category
        Category::create([
            'image' => 'categories/' . $imageName,
            'name' => $request->name,
            'slug' => Str::slug($request->name, '-'),
        ]);

        // Redirect
        return redirect()->route('account.categories.index');
    }

    public function update(Request $request, Category $category)
    {
        /**
         * validate
         */
        $request->validate([
            'name' => 'required|unique:categories,name,' . $category->id,
        ]);

        // Check image update
        if ($request->file('image')) {

            // Remove old image from public directory
            if (file_exists(public_path($category->image))) {
                unlink(public_path($category->image));
            }

            // Upload new image to the public directory
            $image = $request->file('image');
            $imageName = $image->hashName();
            $image->move(public_path('categories'), $imageName);

            // Update category with new image
            $category->update([
                'image' => 'categories/' . $imageName,
                'name' => $request->name,
                'slug' => Str::slug($request->name, '-'),
            ]);

        } else {
            // Update category without image
            $category->update([
                'name' => $request->name,
                'slug' => Str::slug($request->name, '-'),
            ]);
        }

        // Redirect
        return redirect()->route('account.categories.index');
    }

    public function destroy($id)
    {
        // Find by ID
        $category = Category::findOrFail($id);

        // Remove image from public directory
        if (file_exists(public_path($category->image))) {
            unlink(public_path($category->image));
        }

        // Delete
        $category->delete();

        // Redirect
        return redirect()->route('account.categories.index');
    }

}
