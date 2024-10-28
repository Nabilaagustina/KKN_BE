<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\Announcement;

class AnnouncementController extends Controller
{
    /**
     * index
     *
     * @return void
     */
    public function index()
    {
        $announcements = Announcement::latest()->paginate(12);

        //render inertia
        return inertia('Web/Announcements/Index', [
            'announcements' => $announcements,
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
        $announcement = Announcement::where('slug', $slug)->firstOrFail();

        //render inertia
        return inertia('Web/Announcements/Show', [
            'announcement' => $announcement,
        ]);
    }
}
