<?php

namespace App\Http\Controllers;

use App\Models\LoanRecord;
use App\Models\LoanRecordPayment;
use Illuminate\Http\Request;

class LoanRecordPaymentController extends Controller
{
    public function index()
    {
        $loan_record_payment = LoanRecordPayment::get();
        return response()->json([
            'response' => $loan_record_payment,
        ], 200);
    }


    public function show($id)
    {
        $loan_record_payment = LoanRecordPayment::where('examination_id', $id)
            ->orderBy('created_at', 'asc')->get();
        return response()->json([
            'response' => $loan_record_payment,
        ], 200);
    }
    public function store(Request $request)
    {
        LoanRecordPayment::create($request->all());
        return response()->json([
            'response' => 'success',
        ], 200);
    }

    public function destroy($id)
    {
        LoanRecordPayment::where('id', $id)->delete();
        return response()->json([
            'response' => 'success',
        ], 200);
    }
    public function pay_loan_record(Request $request)
    {
        $loan_record_payments = LoanRecordPayment::where('id', $request->id)->first();
        $loan_record = LoanRecord::where('loan_record_id', $loan_record_payments->loan_record_id)->first();

        $remaining = $loan_record->balance - $request->amount;

        $loan_record->update([
            'balance' => floor($remaining) == 0 ? 0 : $remaining
        ]);

        $loan_record_payments->update([
            'status' => $request->status
        ]);
        return response()->json([
            'response' => 'success',
        ], 200);
    }
}
