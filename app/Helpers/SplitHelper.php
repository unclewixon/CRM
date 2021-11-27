<?php

namespace App\Helpers;

use Yabacon\Paystack;
use App\Models\SplitTransaction;
use App\Models\SplitAccount;
use App\Models\Contact;
use App\Http\Resources\SplitTransactionResource;

class SplitHelper
{

    private $url;
    private $acct_model;
    private $trans_model;
    private $contact_model;

    public function __construct(SplitAccount $acct_model, SplitTransaction $trans_model, Contact $contact_model)
    {
        $this->url = "https://api.paystack.co/subaccount";
        $this->acct_model = $acct_model;
        $this->trans_model = $trans_model;
        $this->contact_model = $contact_model;
    }

    //create stripe split account
    public function stripeSlplit($request)
    {
        $fields_string = http_build_query([
            'business_name' => $request->business_name,
            'bank_code' => $request->bank_code,
            'account_number' => $request->account_number,
            'percentage_charge' => $request->percentage_charge
        ]);
        $ch = curl_init();
        curl_setopt($ch,CURLOPT_URL, $this->url);
        curl_setopt($ch,CURLOPT_POST, true);
        curl_setopt($ch,CURLOPT_POSTFIELDS, $fields_string);
        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
          "Authorization: Bearer ". config('paystack.paystack_secret'),
          "Cache-Control: no-cache",
        ));
        curl_setopt($ch,CURLOPT_RETURNTRANSFER, true);
        $result = curl_exec($ch);
        $json =  json_decode($result);
        return $json->data->subaccount_code;
    }

    //create acct
    public function createSplitAccountDb($request)
    {
        $check_acct = $this->acct_model->all();
        if (count($check_acct) < 1) {
            try {
                $split = $this->acct_model->create([
                    'business_name' => $request->business_name,
                    'bank_code' => $request->bank_code,
                    'account_number' => $request->account_number,
                    'percentage_charge' => $request->percentage_charge,
                    'split_code' => $this->stripeSlplit($request)
                ]);
                return response()->json([
                    'message' => 'Split account created',
                    'data' => $split,
                    'success' => true
                ], 200);
            } catch (\Exception $e) {
                return response()->json([
                    'message' => 'Sorry unable to create split account',
                    'error' => $e->getMessage(),
                    'success' => false
                ], 400);
            }
        }else {
            return response()->json([
                'message' => 'Sorry you cant create more than on split account for now',
                'success' => false
            ], 400);
        }
    }

    //make split payment
    public function initializeSplitPayment($request)
    {
        $split_acct = $this->acct_model->first();
        $contact = $this->contact_model->where('emr_id', '=', $request->emr_id)->first();
        $paymentReference = "VS".sprintf("%0.9s",str_shuffle(rand(12,30000) * time()));

        try{
            $transaction = $this->trans_model->create([
                'emr_id' => $request->emr_id,
                'type' => 'Hospital Payment',
                'amount' => $request->amount,
                'trans_ref' => $paymentReference
            ]);
            $payStack = new Paystack(config('paystack.paystack_secret'));
            $trx = $payStack->transaction->initialize(
                [
                    'amount'=> $request->amount * 100, /* in kobo */
                    'email'=> $contact->email,
                    'subaccount' =>  $split_acct->split_code,
                    'bearer' => "subaccount",
                    'reference' => $paymentReference,
                    'callback_url'=>"http://127.0.0.1:8000/api/v0.01/verify/$paymentReference",
                    'metadata'=> [
                        'reference'=> $paymentReference,
                        'transaction_id' => $transaction->id,
                        'total' => $request->amount
                    ],
                ]
            );
            if(!$trx) {
                exit($trx->data->message);
            }else {
                return response()->json([
                    'message' => 'Transaction created successfully',
                    'payment_url' => $trx->data->authorization_url,
                    'data' => $transaction,
                    'success' => true
                ], 200);
            }
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Sorry the transaction process failed',
                'error' => $e->getMessage(),
                'success' => false
            ], 400);
        }
    }

    //verify split payment
    public function verifySplitPayment($reference)
    {
        if (!$reference) {
            return response()->json([
                'message' => 'No reference supplied',
                'success' => false
            ], 422);
        } else {
            $payStack = new Paystack( config('paystack.paystack_secret') );
            $trx = $payStack->transaction->verify([
                'reference'=> $reference
            ]);
            if (!$trx->data->status="success") {
                exit($trx->message);
            }else {
                $trans_ref = $trx->data->metadata->reference;
                $transType = $this->trans_model->where('trans_ref', '=', $trans_ref)->first();
                $update = $transType->update([
                    'paid' => true,
                ]);
            }

        }

    }

    //get all split transactions
    public function getAllSplitTransaction()
    {
        $transactions = $this->trans_model->latest()->paginate(10);
        return SplitTransactionResource::collection($transactions);
    }

    //get all account
    public function getAllAccount()
    {
        return $this->acct_model->first();
    }


}
