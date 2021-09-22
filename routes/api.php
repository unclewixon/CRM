<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\ContactController;
use App\Http\Controllers\Api\ContactGroupController;
use App\Http\Controllers\Api\EmailConfigurationController;
use App\Http\Controllers\Api\EmailVerificationController;
use App\Http\Controllers\Api\GroupController;
use App\Http\Controllers\Api\PlanController;
use App\Http\Controllers\Api\RechargeController;
use App\Http\Controllers\Api\ResetPasswordController;
use App\Http\Controllers\Api\SendEmailController;
use App\Http\Controllers\Api\SendMessageController;
use App\Http\Controllers\Api\SubscriberController;
use App\Http\Controllers\Api\TransactionController;
use App\Http\Controllers\Api\UnitController;
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
Route::domain('api.' . env('SITE_URL'))->group(function ($router) {

    Route::prefix('auth')->group(function () {
        Route::post('/login', [AuthController::class, 'login']);
        Route::post('/create-account', [AuthController::class, 'createUser']);

        Route::post('/forgot-password-link', [ResetPasswordController::class, 'send'])->name('password.email');
        Route::post('/reset-password', [ResetPasswordController::class, 'reset'])->name('password.update');

        Route::get('/plans', [PlanController::class, 'index']);
        Route::get('/plans/{id}', [PlanController::class, 'show']);

        Route::get('/units', [UnitController::class, 'index']);
        Route::get('/units/{id}', [UnitController::class, 'show']);

        Route::get('/recharges', [RechargeController::class, 'index']);
        Route::get('/recharges/{id}', [RechargeController::class, 'show']);

        Route::post('/verify-account', [EmailVerificationController::class, 'verify']);
    });

    Route::group(['middleware' => ['jwt.verify']], function () {
        //admin routes
        Route::group(['middleware' => ['user']], function () {
        });

        //admin routes
        Route::group(['middleware' => ['admin']], function () {

            Route::post('/recharges', [RechargeController::class, 'store']);
            Route::delete('/recharges/{id}', [RechargeController::class, 'destroy']);

            Route::post('/subscribers', [SubscriberController::class, 'store']);
            Route::get('/subscribers', [SubscriberController::class, 'index']);
            Route::get('/subscribers/{id}', [SubscriberController::class, 'show']);

            Route::get('/batch-template', function () {
                return $emp = Excel::download(new ContactExport(), 'contacts-template.xlsx');
            });

            Route::get('/groups', [GroupController::class, 'index']);
            Route::get('/groups/{id}', [GroupController::class, 'show']);
            Route::post('/groups', [GroupController::class, 'store']);
            Route::patch('/groups/{id}', [GroupController::class, 'update']);
            Route::delete('/groups/{id}', [GroupController::class, 'destroy']);

            Route::get('/transactions', [TransactionController::class, 'index']);
            Route::get('/transactions/{id}', [TransactionController::class, 'show']);
            Route::delete('/transactions/{id}', [TransactionController::class, 'destroy']);

            Route::get('/contacts', [ContactController::class, 'index']);
            Route::get('/contacts/{id}', [ContactController::class, 'show']);
            Route::post('/contacts', [ContactController::class, 'store']);
            Route::patch('/contacts/{id}', [ContactController::class, 'update']);
            Route::delete('/contacts/{id}', [ContactController::class, 'destroy']);
            Route::post('/contacts-batch', [ContactController::class, 'storeBatch']);
            Route::get('/contacts-analytics', [ContactController::class, 'analytics']);

            Route::get('/configurations', [EmailConfigurationController::class, 'index']);
            Route::get('/configurations/{id}', [EmailConfigurationController::class, 'show']);
            Route::post('/configurations', [EmailConfigurationController::class, 'store']);
            Route::patch('/configurations/{id}', [EmailConfigurationController::class, 'update']);
            Route::delete('/configurations/{id}', [EmailConfigurationController::class, 'destroy']);

            Route::post('/add-contacts', [ContactGroupController::class, 'addContactM']);
            Route::delete('/remove-contacts', [ContactGroupController::class, 'removeContactM']);
            Route::post('/add-single-contact', [ContactGroupController::class, 'addSingleContact']);
            Route::delete('/delete-single-contact', [ContactGroupController::class, 'removeSingleContact']);

            Route::post('/send-bulk-email', [SendEmailController::class, 'sendBulk']);
            Route::post('/send-single-email', [SendEmailController::class, 'sendSingle']);
            Route::post('/email-contacts', [SendEmailController::class, 'all']);

            Route::post('/send-bulk-message', [SendMessageController::class, 'sendBulk']);
            Route::post('/send-single-message', [SendMessageController::class, 'sendSingle']);
            Route::post('/message-contacts', [SendMessageController::class, 'sendSingle']);
            Route::get('/sms-analytics', [SendMessageController::class, 'smsAnalytics']);
            Route::get('/delivered-analytics', [SendMessageController::class, 'deliveredAnalytics']);
            Route::get('/delivery-receipt', [SendMessageController::class, 'deliveryReceipt']);

            Route::post('/logout', [AuthController::class, 'logout']);
            Route::post('/refresh', [AuthController::class, 'refresh']);
            Route::get('/user-profile', [AuthController::class, 'userProfile']);
            Route::patch('/change-password/{id}', [AuthController::class, 'changePassword']);
            Route::patch('/update-profile/{id}', [AuthController::class, 'updateUserAcount']);

            Route::get('/verify/{id}', [App\Helpers\Payment::class, 'verify']);

        });//end

        //super admin
        Route::group(['middleware' => ['superadmin']], function () {

            Route::delete('/subscribers/{id}', [SubscriberController::class, 'destroy']);
            Route::get('/active-subscribers', [SubscriberController::class, 'activeSub']);
            Route::get('/inactive-subscribers', [SubscriberController::class, 'inActiveSub']);
            Route::get('/deactive-subscribers', [SubscriberController::class, 'deActivateSub']);

            Route::post('/plans', [PlanController::class, 'store']);
            Route::patch('/plans/{id}', [PlanController::class, 'update']);
            Route::delete('/plans/{id}', [PlanController::class, 'destroy']);

            Route::post('/units', [UnitController::class, 'store']);
            Route::patch('/units/{id}', [UnitController::class, 'update']);
            Route::delete('/units/{id}', [UnitController::class, 'destroy']);
            Route::patch('/delete-user/{id}', [AuthController::class, 'delete']);

        });//end

    });

    Route::get('/', function () {
        return response()->json(['message' => 'SendSwift API']);
    });

});
