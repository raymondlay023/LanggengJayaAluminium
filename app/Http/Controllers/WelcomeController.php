<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class WelcomeController extends Controller
{
    public function index()
    {
        $files = collect(Storage::disk('public')->files('gallery'))
                    ->filter(function ($file) {
                        return in_array(pathinfo($file, PATHINFO_EXTENSION), ['jpg', 'jpeg', 'png', 'webp']);
                    })
                    ->shuffle()  // 🔀 Random order
                    ->take(12)
                    ->map(function ($file) {
                        return Storage::url($file);
                    })
                    ->values();


        return Inertia::render('welcome', [
            'images' => $files,
        ]);
    }
}
