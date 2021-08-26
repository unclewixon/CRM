<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Exports\ContactExport;
use Maatwebsite\Excel\Facades\Excel;

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

    Route::post('/forgot-password-link', [App\Http\Controllers\Api\ResetPasswordController::class, 'send'])->name('password.email');
        Route::post('/reset-password', [App\Http\Controllers\Api\ResetPasswordController::class, 'reset'])->name('password.update');

    Route::get('/plans', [App\Http\Controllers\Api\PlanController::class, 'index']);
        Route::get('/plans/{id}', [App\Http\Controllers\Api\PlanController::class, 'show']);

    Route::get('/units', [App\Http\Controllers\Api\UnitController::class, 'index']);
        Route::get('/units/{id}', [App\Http\Controllers\Api\UnitController::class, 'show']);

        Route::get('/recharges', [App\Http\Controllers\Api\RechargeController::class, 'index']);
        Route::get('/recharges/{id}', [App\Http\Controllers\Api\RechargeController::class, 'show']);

        Route::post('/verify-account', [App\Http\Controllers\Api\EmailVerificationController::class, 'verify']);


    Route::group(['middleware' => ['jwt.verify']], function() {

         //admin routes
         Route::group(['middleware' => ['user']], function () {

         });

        //admin routes
        Route::group(['middleware' => ['admin']], function () {

            Route::post('/recharges', [App\Http\Controllers\Api\RechargeController::class, 'store']);
                Route::delete('/recharges/{id}', [App\Http\Controllers\Api\RechargeController::class, 'destroy']);

            Route::post('/subscribers', [App\Http\Controllers\Api\SubscriberController::class, 'store']);
                Route::get('/subscribers', [App\Http\Controllers\Api\SubscriberController::class, 'index']);
                Route::get('/subscribers/{id}', [App\Http\Controllers\Api\SubscriberController::class, 'show']);

            Route::get('/batch-template', function () {
                return $emp = Excel::download(new ContactExport(), 'contacts-template.xlsx');
            });

            Route::get('/groups', [App\Http\Controllers\Api\GroupController::class, 'index']);
                Route::get('/groups/{id}', [App\Http\Controllers\Api\GroupController::class, 'show']);
                Route::post('/groups', [App\Http\Controllers\Api\GroupController::class, 'store']);
                Route::patch('/groups/{id}', [App\Http\Controllers\Api\GroupController::class, 'update']);
                Route::delete('/groups/{id}', [App\Http\Controllers\Api\GroupController::class, 'destroy']);

            Route::get('/transactions', [App\Http\Controllers\Api\TransactionController::class, 'index']);
                Route::get('/transactions/{id}', [App\Http\Controllers\Api\TransactionController::class, 'show']);
                Route::delete('/transactions/{id}', [App\Http\Controllers\Api\TransactionController::class, 'destroy']);

            Route::get('/contacts', [App\Http\Controllers\Api\ContactController::class, 'index']);
                Route::get('/contacts/{id}', [App\Http\Controllers\Api\ContactController::class, 'show']);
                Route::post('/contacts', [App\Http\Controllers\Api\ContactController::class, 'store']);
                Route::post('/contacts-batch', [App\Http\Controllers\Api\ContactController::class, 'storeBatch']);
                Route::patch('/contacts/{id}', [App\Http\Controllers\Api\ContactController::class, 'update']);
                Route::delete('/contacts/{id}', [App\Http\Controllers\Api\ContactController::class, 'destroy']);

            Route::get('/configurations', [App\Http\Controllers\Api\EmailConfigurationController::class, 'index']);
                Route::get('/configurations/{id}', [App\Http\Controllers\Api\EmailConfigurationController::class, 'show']);
                Route::post('/configurations', [App\Http\Controllers\Api\EmailConfigurationController::class, 'store']);
                Route::patch('/configurations/{id}', [App\Http\Controllers\Api\EmailConfigurationController::class, 'update']);
                Route::delete('/configurations/{id}', [App\Http\Controllers\Api\EmailConfigurationController::class, 'destroy']);

            Route::post('/add-contacts', [App\Http\Controllers\Api\ContactGroupController::class, 'addContactM']);
                Route::delete('/remove-contacts', [App\Http\Controllers\Api\ContactGroupController::class, 'removeContactM']);
            Route::post('/add-single-contact', [App\Http\Controllers\Api\ContactGroupController::class, 'addSingleContact']);
                Route::delete('/delete-single-contact', [App\Http\Controllers\Api\ContactGroupController::class, 'removeSingleContact']);

            Route::post('/send-bulk-email', [App\Http\Controllers\Api\SendEmailController::class, 'sendBulk']);
                Route::post('/send-single-email', [App\Http\Controllers\Api\SendEmailController::class, 'sendSingle']);
                 Route::post('/email-contacts', [App\Http\Controllers\Api\SendEmailController::class, 'all']);

            Route::post('/send-bulk-message', [App\Http\Controllers\Api\SendMessageController::class, 'sendBulk']);
                Route::post('/send-single-message', [App\Http\Controllers\Api\SendMessageController::class, 'sendSingle']);
                Route::post('/message-contacts', [App\Http\Controllers\Api\SendMessageController::class, 'sendSingle']);

            Route::post('/logout', [App\Http\Controllers\Api\AuthController::class, 'logout']);
                Route::post('/refresh', [App\Http\Controllers\Api\AuthController::class, 'refresh']);
                Route::get('/user-profile', [App\Http\Controllers\Api\AuthController::class, 'userProfile']);
                Route::patch('/change-password/{id}', [App\Http\Controllers\Api\AuthController::class, 'changePassword']);
                Route::patch('/update-profile/{id}', [App\Http\Controllers\Api\AuthController::class, 'updateUserAcount']);

            Route::get('/verify/{id}',  [App\Helpers\Payment::class, 'verify']);

        });//end

        //super admin
        Route::group(['middleware' => ['superadmin']], function () {

          Route::delete('/subscribers/{id}', [App\Http\Controllers\Api\SubscriberController::class, 'destroy']);
            Route::get('/active-subscribers', [App\Http\Controllers\Api\SubscriberController::class, 'activeSub']);
            Route::get('/inactive-subscribers', [App\Http\Controllers\Api\SubscriberController::class, 'inActiveSub']);
            Route::get('/deactive-subscribers', [App\Http\Controllers\Api\SubscriberController::class, 'deActivateSub']);

            Route::post('/plans', [App\Http\Controllers\Api\PlanController::class, 'store']);
                Route::patch('/plans/{id}', [App\Http\Controllers\Api\PlanController::class, 'update']);
                Route::delete('/plans/{id}', [App\Http\Controllers\Api\PlanController::class, 'destroy']);

            Route::post('/units', [App\Http\Controllers\Api\UnitController::class, 'store']);
                Route::patch('/units/{id}', [App\Http\Controllers\Api\UnitController::class, 'update']);
                Route::delete('/units/{id}', [App\Http\Controllers\Api\UnitController::class, 'destroy']);
            Route::patch('/delete-user/{id}', [App\Http\Controllers\Api\AuthController::class, 'delete']);

        });//end

    });

});
