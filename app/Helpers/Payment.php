<?php

namespace App\Helpers;

use Yabacon\Paystack;
use App\Models\Transaction;

class Payment
{
    //make paystack payment
    public function initialize($request, $type)
    {
        $paymentReference = "VS".sprintf("%0.9s",str_shuffle(rand(12,30000) * time()));

         $tr = Transaction::create([
            'type' => $type
            'user_id' => auth()->user()->id,
            'trans_ref' => $paymentReference
         ]);
        $payStack = new Paystack("sk_test_2a3345566113793b468c574ea74028fa50c2497d");
        $trx = $payStack->transaction->initialize(
            [
                'amount'=> $request->total * 100, /* in kobo */
                'email'=>auth()->user()->email,
                'reference' => $paymentReference,
                'callback_url'=>"http://127.0.0.1:8000/verify/$paymentReference",
                'metadata'=> [
                    'user_id'=> auth()->user()->id,
                    'reference'=> $paymentReference,
                    'transaction_id' => $tr->id,
                    'total' => $request->total,
                ],
            ]
        );
        if(!$trx) {
            exit($trx->data->message);
        }
        return redirect($trx->data->authorization_url);
    }

    //verify paystack payment
    public function verify($reference)
    {
        if (!$reference) {
            die('No reference supplied');
        }
        $payStack = new Paystack( "sk_test_2a3345566113793b468c574ea74028fa50c2497d" );
        $trx = $payStack->transaction->verify([
            'reference'=>$reference
        ]);

        if(!$trx->data->status="success"){
            exit($trx->message);
        }
        $trans_ref = $trx->data->metadata->reference;

        Transaction::where('trans_ref',$trans_ref)
            ->where('user_id',auth()->user()->id)
            ->update([
                'paid' => true,
        ]);
        return redirect('http://127.0.0.1:8000/verify-confirmed');
    }

}
