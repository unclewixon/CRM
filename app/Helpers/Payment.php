<?php

namespace App\Helpers;

use App\Models\ServiceCharge;
use Yabacon\Paystack;
use App\Models\Transaction;
use App\Actions\UserAction;
use App\Mail\BuyUnitsMail;
use App\Mail\SubscriptionMail;
use Illuminate\Support\Facades\Mail;
use App\Models\Recharge;
use Carbon\Carbon;
use App\Models\Subscriber;

class Payment
{
    private $user_action;

    public function __construct(UserAction $user_action)
    {
        $this->user_action = $user_action;
//        $this->subscriber = $subscriber;
    }

    //make paystack payment
    public function initialize($request, $type, $cost)
    {
        $paymentReference = "VS" . sprintf("%0.9s", str_shuffle(rand(12, 30000) * time()));

        $tr = Transaction::create([
            'type' => $type,
            'user_id' => auth()->user()->id,
            'trans_ref' => $paymentReference
        ]);
        $payStack = new Paystack(config('paystack.paystack_secret'));
        $trx = $payStack->transaction->initialize(
            [
                'amount' => $cost * 100, /* in kobo */
                'email' => auth()->user()->email,
                'reference' => $paymentReference,
                'callback_url' => "http://127.0.0.1:8000/api/v0.01/verify/$paymentReference",
                'metadata' => [
                    'user_id' => auth()->user()->id,
                    'reference' => $paymentReference,
                    'transaction_id' => $tr->id,
                    'total' => $cost,
                ],
            ]
        );
        if (!$trx) {
            exit($trx->data->message);
        }
        return $trx->data->authorization_url;
    }

    //verify paystack payment
    public function verify($request, $type, $recharge_id)
    {
        $service_charges = $request->service_charges ?? [];

        $recharge = Recharge::where('id', $recharge_id)->first();

        $payStack = new Paystack(config('paystack.paystack_secret'));
        $trx = $payStack->transaction->verify([
            'reference' => $request->reference
        ]);

        $status = $trx->data->status;
        $amount = $trx->data->amount;

        if ($status == 'abandoned') {
            $recharge->delete();
        } else {
            $trans_ref = $trx->data->reference;

            $transaction = Transaction::create([
                'user_id' => auth()->user()->id,
                'trans_ref' => $trans_ref,
                'type' => $type,
                'status' => $status,
                'description' => count($service_charges) > 0 ? 'units purchase plus monthly service charge(s)' : 'units purchase',
                'amount' => $amount / 100,
            ]);

            $recharge->transaction_id = $transaction->id;
            $recharge->save();

            $recharge->transaction = $transaction;

            foreach ($service_charges as $charge) {
                $mcharge = ServiceCharge::create([
                    'user_id' => auth()->user()->id,
                    'amount' => 25000,
                    'paid_at' => Carbon::createFromFormat('M-Y', $charge['month'])->format('Y-m-d'),
                    'transaction_id' => $transaction->id,
                    'status' => 0,
                ]);
            }

            if ($type == "Subscription") {
                $active = Subscriber::where('user_id', '=', auth()->user()->id)->whereDate('created_at', '=', Carbon::today())->first();
                $update = $active->update([
                    'status' => true
                ]);
                if ($update) {
                    $this->user_action->isSubscribed(auth()->user()->id, true);
                }
                $details = [
                    'title' => 'Subscription',
                    'body' => 'You have successfully subscribed',
                    'url' => 'siteurl'
                ];
                Mail::to(auth()->user()->email)->send(new SubscriptionMail($details));
                return $recharge;
            } elseif ($type == "Unit") {
                if ($status == 'success') {
                    $sub = $this->user_action->addUpUnit(auth()->user()->id, $recharge->number);
                    $detail = [
                        'title' => 'SMS Unit',
                        'body' => 'You have bought some units',
                        'url' => ''
                    ];

                    try {
                        $update_charges = ServiceCharge::where('transaction_id', $transaction->id)->update(['status => 1']);
                    } catch (\Exception $e) {
                    }

                    Mail::to(auth()->user()->email)->send(new BuyUnitsMail($detail));
                } else if ($status == 'failed') {
                    try {
                        $remove_charges = ServiceCharge::where('transaction_id', $transaction->id)->delete();
                    } catch (\Exception $e) {
                    }
                }

                return $recharge;
            }
        }

        return $recharge;
    }

}
