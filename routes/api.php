<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::group(['middleware' => 'api', 'prefix' => 'v0.01'], function ($router) {

    Route::post('/login', [App\Http\Controllers\Api\AuthController::class, 'login']);
        Route::post('/create-account', [App\Http\Controllers\Api\AuthController::class, 'createUser']);

    Route::post('/forgot-password', [App\Http\Controllers\Api\ResetPasswordController::class, 'send'])->name('password.email');
        Route::post('/reset-password', [App\Http\Controllers\Api\ResetPasswordController::class, 'reset'])->name('password.update');

    Route::get('/plans', [App\Http\Controllers\Api\PlanController::class, 'index']);
        Route::get('/plans/{id}', [App\Http\Controllers\Api\PlanController::class, 'show']);

    Route::get('/units', [App\Http\Controllers\Api\UnitController::class, 'index']);
        Route::get('/units/{id}', [App\Http\Controllers\Api\UnitController::class, 'show']);

    Route::group(['middleware' => ['jwt.verify']], function() {

        Route::get('/email/verify', function () { return "verification link send "; })->middleware('auth')->name('verification.notice');
            Route::post('/email-verification-notification', [App\Http\Controllers\Api\EmailVerificationController::class, 'send'])->middleware(['auth:api', 'throttle:6,1'])->name('verification.send');
            Route::get('/email/verify/{id}/{hash}', [App\Http\Controllers\Api\EmailVerificationController::class, 'verify'])->middleware(['auth:api', 'signed'])->name('verification.verify');

        Route::post('/logout', [App\Http\Controllers\Api\AuthController::class, 'logout']);
        Route::post('/refresh', [App\Http\Controllers\Api\AuthController::class, 'refresh']);
        Route::get('/user-profile', [App\Http\Controllers\Api\AuthController::class, 'userProfile']);
        Route::patch('/reset-password/{id}', [App\Http\Controllers\Api\AuthController::class, 'resetPassword']);
        Route::patch('/update-profile/{id}', [App\Http\Controllers\Api\AuthController::class, 'updateUserAcount']);

        Route::group(['middleware' => ['admin']], function () {

            Route::post('/plans', [App\Http\Controllers\Api\PlanController::class, 'store']);
                Route::patch('/plans/{id}', [App\Http\Controllers\Api\PlanController::class, 'update']);
                Route::delete('/plans/{id}', [App\Http\Controllers\Api\PlanController::class, 'destroy']);

            Route::post('/units', [App\Http\Controllers\Api\UnitController::class, 'store']);
                Route::patch('/units/{id}', [App\Http\Controllers\Api\UnitController::class, 'update']);
                Route::delete('/units/{id}', [App\Http\Controllers\Api\UnitController::class, 'destroy']);

                Route::patch('/delete-user/{id}', [App\Http\Controllers\Api\AuthController::class, 'delete']);

       });

    });

});
