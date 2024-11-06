<?php
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\LoanRecordController;
use App\Http\Controllers\LoanRecordPaymentController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// Route::get('/user', function (Request $request) {
//     return $request->user();
// });


Route::resource('dashboard', DashboardController::class);
Route::resource('loan_record', LoanRecordController::class);
Route::post('/loan_change_status', [LoanRecordController::class, 'loan_change_status']);
Route::resource('loan_record_payment', LoanRecordPaymentController::class);
