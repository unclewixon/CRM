<?php

namespace App\Helpers;

use Yabacon\Paystack;
use App\Models\Transaction;
use App\Actions\UserAction;
use App\Mail\BuyUnitsMail;
use App\Mail\SubscriptionMail;
use Illuminate\Support\Facades\Mail;
use App\Models\Recharge;
use Carbon\Carbon;
use App\Actions\SubscriberAction;

class Payment
{
    private $user_action;
    private $subscriber;

    public function __construct(UserAction $user_action, SubscriberAction $subscriber)
    {
        $this->user_action = $user_action;
        $this->subscriber = $subscriber;
    }

    //make paystack payment
    public function initialize($request, $type, $cost)
    {
        $paymentReference = "VS".sprintf("%0.9s",str_shuffle(rand(12,30000) * time()));

         $tr = Transaction::create([
            'type' => $type,
            'user_id' => auth()->user()->id,
            'trans_ref' => $paymentReference
         ]);
        $payStack = new Paystack(config('paystack.paystack_secret'));
        $trx = $payStack->transaction->initialize(
            [
                'amount'=> $cost * 100, /* in kobo */
                'email'=>auth()->user()->email,
                'reference' => $paymentReference,
                'callback_url'=>"http://127.0.0.1:8000/api/v0.01/verify/$paymentReference",
                'metadata'=> [
                    'user_id'=> auth()->user()->id,
                    'reference'=> $paymentReference,
                    'transaction_id' => $tr->id,
                    'total' => $cost,
                ],
            ]
        );
        if(!$trx) {
            exit($trx->data->message);
        }
        return $trx->data->authorization_url;
    }

    //verify paystack payment
    public function verify($reference)
    {
        if (!$reference) {
            die('No reference supplied');
        }
        $payStack = new Paystack( config('paystack.paystack_secret') );
        $trx = $payStack->transaction->verify([
            'reference'=>$reference
        ]);

        if(!$trx->data->status="success"){
            exit($trx->message);
        }
        $trans_ref = $trx->data->metadata->reference;
          $transType = Transaction::where('trans_ref',$trans_ref)->where('user_id',auth()->user()->id)->first();
          $update = $transType->update([
                'paid' => true,
         ]);
        if ($transType->type == "Subscription") {
          $active = $this->subscriber->activateSubscription();
          if ($active) {
              $sub = $this->user_action->isSubscribed(auth()->user()->id, true);
          }
          $details = [
              'title' => 'Subscription',
              'body'  => 'You have successfully subscribed',
              'url' => 'siteurl'
          ];
          Mail::to(auth()->user()->email)->send(new SubscriptionMail($details));
          return response()->json([
              'message' => 'You have subscribed successfully',
          ], 200);
        }elseif ($transType->type == "Unit") {
            $recharge = Recharge::where('user_id', '=', auth()->user()->id)->whereDate('created_at' , '=', Carbon::today())->whereTime('created_at' , '>', Carbon::now()->subMinutes(15))->last();
            $sub = $this->user_action->addUpUnit(auth()->user()->id, $recharge->number);
            $detail = [
                'title' => 'SMS Unit',
                'body'  => 'You have bought some units',
                'url' => 'siteurl'
            ];
            Mail::to(auth()->user()->email)->send(new BuyUnitsMail($detail));
            return response()->json([
                'message' => "You have successfully bought $transType->unit_number of units",
            ], 200);
        }
    }

}
