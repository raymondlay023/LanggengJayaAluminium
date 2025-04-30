<?php

use App\Http\Controllers\WelcomeController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [WelcomeController::class, 'index'])->name('home');

Route::get('/about', function() {
    return Inertia::render('about/about');
})->name('about');

Route::get('/services', function() {
    return Inertia::render('services/services');
})->name('services');

Route::get('/projects', function() {
    return Inertia::render('projects/projects');
})->name('projects');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
