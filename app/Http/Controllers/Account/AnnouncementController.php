<?php

namespace App\Http\Controllers\Account;

use App\Http\Controllers\Controller;
use App\Models\Announcement;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class AnnouncementController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $announcements = Announcement::when(request()->q, function ($announcements) {
            $announcements = $announcements->where('title', 'like', '%' . request()->q . '%');
        })->latest()->paginate(5);

        //append query string to pagination links
        $announcements->appends(['q' => request()->q]);

        //return inertia
        return inertia('Account/Announcements/Index', [
            'announcements' => $announcements,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return inertia('Account/Announcements/Create');
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
            'title' => 'required|unique:announcements',
            'description' => 'required',
        ]);

        // Upload image directly to the public directory
        $image = $request->file('image');
        $imageName = $image->hashName();
        $image->move(public_path('announcements'), $imageName);

        Announcement::create([
            'image' => 'announcements/' . $imageName,
            'title' => $request->title,
            'description' => $request->description,
            'slug' => Str::slug($request->title, '-'),
        ]);

        // Redirect
        return redirect()->route('account.announcements.index');
    }

    public function edit(Announcement $announcement)
    {
        return inertia('Account/Announcements/Edit', [
            'announcement' => $announcement,
        ]);
    }

    public function update(Request $request, Announcement $announcement)
    {
        /**
         * validate
         */
        $request->validate([
            'title' => 'required|unique:announcements',
            'description' => 'required',
        ]);

        // Check image update
        if ($request->file('image')) {

            // Remove old image from public directory
            if (file_exists(public_path($announcement->image))) {
                unlink(public_path($announcement->image));
            }

            // Upload new image to the public directory
            $image = $request->file('image');
            $imageName = $image->hashName();
            $image->move(public_path('announcements'), $imageName);

            $announcement->update([
                'image' => 'announcements/' . $imageName,
                'title' => $request->title,
                'description' => $request->description,
                'slug' => Str::slug($request->title, '-'),
            ]);

        } else {
            $announcement->update([
                'title' => $request->title,
                'description' => $request->description,
                'slug' => Str::slug($request->title, '-'),
            ]);
        }

        // Redirect
        return redirect()->route('account.announcements.index');
    }

    public function destroy($id)
    {
        // Find by ID
        $announcement = Announcement::findOrFail($id);

        // Remove image from public directory
        if (file_exists(public_path($announcement->image))) {
            unlink(public_path($announcement->image));
        }

        // Delete
        $announcement->delete();

        // Redirect
        return redirect()->route('account.announcements.index');
    }

}
