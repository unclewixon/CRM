<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Helpers\SplitHelper;

class SplitPaymentController extends Controller
{
    private $helper;

    public function __construct(SplitHelper $helper)
    {
        $this->helper = $helper;
    }

    //create account
    public function createSplitAccount(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'business_name' => 'required',
            'bank_code' => 'required',
            'account_number' => 'required',
            'percentage_charge' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => $validator->errors(),
                'success' => false
            ], 422);
        } else {
            return $this->helper->createSplitAccountDb($request);
        }
    }

    //get split account
    public function getSplitAccount()
    {
        return $this->helper->getAllAccount();
    }

    //make payment
    public function makePayment(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'emr_id' => 'required',
            'amount' => 'required',
            'description' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => $validator->errors(),
                'success' => false
            ], 422);
        } else {
            return $this->helper->initializeSplitPayment($request);
        }
    }

    //verify transaction
    public function verifyTrax($tranx_code)
    {
        return $this->helper->verifySplitPayment($tranx_code);
    }

    //get all transactions
    public function getAllSplitTransaction()
    {
        return $this->helper->getAllSplitTransaction();
    }

}
