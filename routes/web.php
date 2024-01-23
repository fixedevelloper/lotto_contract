<?php

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
Route::get('admin/configuration', [FrontController::class, 'configuration'])
    ->name('configuration');
Route::get('/register', [FrontController::class, 'register'])
    ->name('nextregister');
Route::match(['POST','GET'],'/register_ajax', [FrontController::class, 'register_ajax'])->name('register_ajax');
Route::match(['POST','GET'],'/login_ajax', [FrontController::class, 'login_next'])->name('login_next');
Route::match(['POST','GET'],'/check_register', [FrontController::class, 'check_register'])->name('check_register');
