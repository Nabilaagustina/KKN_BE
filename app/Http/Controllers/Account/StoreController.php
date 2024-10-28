<?php

namespace App\Http\Controllers\Account;

use App\Http\Controllers\Controller;
use App\Models\Store;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class StoreController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $stores = Store::when(request()->q, function ($query) {
            $query->where('name', 'like', '%' . request()->q . '%');
        })->latest()->paginate(5);

        // Append query string to pagination links
        $stores->appends(['q' => request()->q]);

        // Return inertia
        return inertia('Account/Stores/Index', [
            'stores' => $stores,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return inertia('Account/Stores/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // Validate the request
        $request->validate([
            'image' => 'required|image|mimes:jpeg,jpg,png|max:2000',
            'name' => 'required|unique:stores,name',
            'telp' => 'required|numeric',
            'address' => 'required',
        ]);

        // Upload new image to the public directory
        $image = $request->file('image');
        $imageNameHash = $image->hashName();

        // Create a unique name for the image
        $imageName = 'stores/' . $imageNameHash . '.' . $image->getClientOriginalExtension();
        $image->move(public_path('stores'), $imageName);

        // Create store
        Store::create([
            'image' => $imageName,
            'name' => $request->name,
            'telp' => $request->telp,
            'address' => $request->address,
            'slug' => Str::slug($request->name, '-'),
        ]);

        // Redirect
        return redirect()->route('account.stores.index');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  Store  $store
     * @return \Illuminate\Http\Response
     */
    public function edit(Store $store)
    {
        return inertia('Account/Stores/Edit', [
            'store' => $store,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  Store  $store
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Store $store)
    {
        // Validate the request
        $request->validate([
            'name' => 'required|unique:stores,name,' . $store->id,
            'telp' => 'required|numeric',
            'address' => 'required',
        ]);

        // Check if an image is being uploaded
        if ($request->hasFile('image') && $request->file('image')->isValid()) {
            // Remove old image from public directory
            if (file_exists(public_path($store->image))) {
                unlink(public_path($store->image));
            }

            // Upload new image to the public directory
            $image = $request->file('image');
            $imageNameHash = $image->hashName();

            // Create a unique name for the image
            $imageName = 'stores/' . $imageNameHash . '.' . $image->getClientOriginalExtension();
            $image->move(public_path('stores'), $imageName);

            // Update store with new image
            $store->update([
                'image' => $imageName,
                'slug' => Str::slug($request->name, '-'),
            ]);
        }

        // Update store information
        $store->update([
            'name' => $request->name,
            'telp' => $request->telp,
            'address' => $request->address,
            'slug' => Str::slug($request->name, '-'),
        ]);

        // Redirect
        return redirect()->route('account.stores.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        // Find store by ID
        $store = Store::findOrFail($id);

        // Remove image from public directory
        if (file_exists(public_path($store->image))) {
            unlink(public_path($store->image));
        }

        // Delete the store
        $store->delete();

        // Redirect
        return redirect()->route('account.stores.index');
    }
}
