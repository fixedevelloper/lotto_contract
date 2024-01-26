<?php

use App\Http\Controllers\BackendController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\FrontController;
use App\Http\Controllers\LoginController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/
Route::match(['POST','GET'],'/login', [LoginController::class, 'login'])
    ->name('login');
Route::get('/destroy', [LoginController::class, 'destroy'])
    ->name('destroy');
Route::match(['POST','GET'],'/deposit', [LoginController::class, 'deposit'])
    ->name('deposit');
Route::match(['POST','GET'],'/post_conbinaison', [FrontController::class, 'postConbinaison'])
    ->name('postConbinaison');
Route::match(['POST','GET'],'/post_game', [FrontController::class, 'postGame'])
    ->name('postGame');
Route::get('/', [FrontController::class, 'home'])
    ->name('home');
Route::get('/game/{id}', [FrontController::class, 'game'])
    ->name('game');
Route::get('/resultat/{id}', [FrontController::class, 'resultat'])
    ->name('resultat');

Route::get('dashboard', [DashboardController::class, 'dashboard'])
    ->name('dashboard');
Route::get('my-game', [DashboardController::class, 'myGame'])
    ->name('mygame');
Route::get('logout', [DashboardController::class, 'logout'])
    ->name('logout');
Route::get('/register', [FrontController::class, 'register'])
    ->name('nextregister');
Route::match(['POST','GET'],'/register_ajax', [FrontController::class, 'register_ajax'])->name('register_ajax');
Route::match(['POST','GET'],'/login_ajax', [FrontController::class, 'login_next'])->name('login_next');
Route::match(['POST','GET'],'/check_register', [FrontController::class, 'check_register'])->name('check_register');
Route::group(['prefix' => 'admin', 'as' => 'admin.'], function () {
    Route::match(["POST", "GET"], '/lotto_fixture_list', [BackendController::class, 'lotto_fixture_list'])
        ->name('lotto_fixture_list');
    Route::match(["POST", "GET"], '/result/{id}', [BackendController::class, 'result'])
        ->name('result');
    Route::match(["POST", "GET"], '/winner_detail/{id}', [BackendController::class, 'winner_detail'])
        ->name('winner_detail');
    Route::match(["POST", "GET"], '/payment/{id}', [BackendController::class, 'payment'])
        ->name('payment');
    Route::get('configuration', [BackendController::class, 'configuration'])
        ->name('configuration');
});
