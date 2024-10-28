<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\Announcement;
use Illuminate\Http\Request;

class NewsController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        //get Announcement 4 items
        $announcementNews = Announcement::latest()->take(3)->get();

        $announcements = Announcement::oldest()->take(3)->get();

        return inertia('Web/News/Index', [
            'announcementNews' => $announcementNews,
            'announcements' => $announcements,
        ]);
    }
}
