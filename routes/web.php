<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
 */

//route register index
Route::get('/register', [\App\Http\Controllers\Auth\RegisterController::class, 'index'])->name('register')->middleware('guest');

//route register store
Route::post('/register', [\App\Http\Controllers\Auth\RegisterController::class, 'store'])->name('register.store')->middleware('guest');

//route login index
Route::get('/login', [\App\Http\Controllers\Auth\LoginController::class, 'index'])->name('login')->middleware('guest');

//route login store
Route::post('/login', [\App\Http\Controllers\Auth\LoginController::class, 'store'])->name('login.store')->middleware('guest');

//route logout
Route::post('/logout', \App\Http\Controllers\Auth\LogoutController::class)->name('logout')->middleware('auth');

//prefix "account"
Route::prefix('account')->group(function () {
    //middleware "auth"
    Route::group(['middleware' => ['auth']], function () {
        //route dashboard
        Route::get('/dashboard', App\Http\Controllers\Account\DashboardController::class)->name('account.dashboard');

        //route permissions
        Route::get('/permissions', \App\Http\Controllers\Account\PermissionController::class)->name('account.permissions.index')
            ->middleware('permission:permissions.index');

        //route resource roles
        Route::resource('/roles', \App\Http\Controllers\Account\RoleController::class, ['as' => 'account'])
            ->middleware('permission:roles.index|roles.create|roles.edit|roles.delete');

        //route resource users
        Route::resource('/users', \App\Http\Controllers\Account\UserController::class, ['as' => 'account'])
            ->middleware('permission:users.index|users.create|users.edit|users.delete');

        //route resource categories
        Route::resource('/categories', \App\Http\Controllers\Account\CategoryController::class, ['as' => 'account'])
            ->middleware('permission:categories.index|categories.create|categories.edit|categories.delete');

        //route resource categories
        Route::resource('/stores', \App\Http\Controllers\Account\StoreController::class, ['as' => 'account'])
            ->middleware('permission:stores.index|stores.create|stores.edit|stores.delete');

        //route resource categories
        Route::resource('/announcements', \App\Http\Controllers\Account\AnnouncementController::class, ['as' => 'account'])
            ->middleware('permission:announcements.index|announcements.create|announcements.edit|announcements.delete');

        //route store image product
        Route::post('/products/store_image_product', [\App\Http\Controllers\Account\ProductController::class, 'storeImageProduct'])->name('account.products.store_image_product');

        //route destroy image product
        Route::delete('/products/destroy_image_product/{id}', [\App\Http\Controllers\Account\ProductController::class, 'destroyImage'])->name('account.products.destroy_image_product');

        //route resource products
        Route::resource('/products', \App\Http\Controllers\Account\ProductController::class, ['as' => 'account'])
            ->middleware('permission:products.index|products.create|products.show|products.edit|products.delete');

        //route transactions index
        Route::get('/transactions', [App\Http\Controllers\Account\TransactionController::class, 'index'])->name('account.transactions.index')
            ->middleware('permission:transactions.index');

        //route transactions show
        Route::get('/transactions/{invoice}', [App\Http\Controllers\Account\TransactionController::class, 'show'])->name('account.transactions.show')
            ->middleware('permission:transactions.show');

        Route::get('/transaction/export', [App\Http\Controllers\Account\TransactionController::class, 'exportPage'])->name('transactions.exportPage')->middleware('permission:transactions.exportPage');
        Route::post('/transaction/export', [App\Http\Controllers\Account\TransactionController::class, 'export'])->name('transactions.export')->middleware('permission:transactions.export');;
    });
});

/**
 * route home
 */
Route::get('/', \App\Http\Controllers\Web\HomeController::class)->name('web.home.index');

/**
 * route news
 */
Route::get('/news', \App\Http\Controllers\Web\NewsController::class)->name('web.news.index');

/**
 * route about
 */
Route::get('/about', \App\Http\Controllers\Web\AboutController::class)->name('web.about.index');

/**
 * route category index
 */
Route::get('/categori', [\App\Http\Controllers\Web\CategoryController::class, 'index'])->name('web.categories.index');

/**
 * route category show
 */
Route::get('/categories/{slug}', [\App\Http\Controllers\Web\CategoryController::class, 'show'])->name('web.categories.show');

/**
 * route category index
 */
Route::get('/storess', [\App\Http\Controllers\Web\StoreController::class, 'index'])->name('web.stores.index');

/**
 * route category show
 */
Route::get('/stores/{slug}', [\App\Http\Controllers\Web\StoreController::class, 'show'])->name('web.stores.show');

/**
 * route category index
 */
Route::get('/announcementss', [\App\Http\Controllers\Web\AnnouncementController::class, 'index'])->name('web.announcements.index');

/**
 * route category show
 */
Route::get('/announcement/{slug}', [\App\Http\Controllers\Web\AnnouncementController::class, 'show'])->name('web.announcements.show');

/**
 * route products index
 */
Route::get('/productss', [\App\Http\Controllers\Web\ProductController::class, 'index'])->name('web.products.index');

/**
 * route products show
 */
Route::get('/products/{slug}', [\App\Http\Controllers\Web\ProductController::class, 'show'])->name('web.products.show');

/**
 * route search
 */
Route::post('/search', \App\Http\Controllers\Web\SearchController::class)->name('web.search.index');

/**
 * route cart index
 */
Route::get('/carts', [\App\Http\Controllers\Web\CartController::class, 'index'])->name('web.carts.index')
    ->middleware('auth');

/**
 * route cart
 */
Route::post('/carts', [\App\Http\Controllers\Web\CartController::class, 'store'])->name('web.carts.store')
    ->middleware('auth');

/**
 * route cart delete
 */
Route::delete('/carts/{id}', [\App\Http\Controllers\Web\CartController::class, 'destroy'])->name('web.carts.destroy')
    ->middleware('auth');

/**
 * route checkouts index
 */
Route::get('/checkouts', [\App\Http\Controllers\Web\CheckoutController::class, 'index'])->name('web.checkouts.index')
    ->middleware('auth');

/**
 * route checkout store
 */
Route::post('/checkouts', [\App\Http\Controllers\Web\CheckoutController::class, 'store'])->name('web.checkouts.store')
    ->middleware('auth');

/**
 * route callback
 */
Route::post('/callback', \App\Http\Controllers\Web\CallbackController::class)->name('web.callback');
