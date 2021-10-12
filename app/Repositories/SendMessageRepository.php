<?php

namespace App\Repositories;

use App\Jobs\SendSMS;
use App\Models\Contact;
use App\Repositories\Contracts\SendMessageRepositoryInterface;
use Illuminate\Http\Request;
use App\Helpers\Charge;
use App\Actions\UserAction;
use Illuminate\Support\Facades\Validator;

class SendMessageRepository implements SendMessageRepositoryInterface
{

    public $model;
    public $charge;
    public $user_action;

    public function __construct(Contact $model, Charge $charge, UserAction $user_action)
    {
        $this->model = $model;
        $this->charge = $charge;
        $this->user_action = $user_action;
    }

    //send bulk message
    public function sendBulkSms($request)
    {
        $validator = Validator::make($request->all(), [
            'to' => 'required',
            'message' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => $validator->errors()
            ], 422);
        } else {
            if ($request->to != 'All Contacts') {
                $to = explode(',', $request->to);
                $contacts = [];
                foreach ($to as $item) {
                    $contacts[] = $this->model->where('phone_number', '=', $item)->first();
                }
            } else {
                $contacts = $this->model->where('user_id', auth()->user()->id)->get();
            }
            $my_unit = auth()->user()->unit;
            $my_charge = $this->charge->chargeUser($request->pages, count($contacts));
            if ($my_charge > $my_unit) {
                return response()->json([
                    'message' => 'Sorry you do not have enough to send this message ',
                ], 401);
            } else {
                $remove_charge_from_my_unit = $this->user_action->subtractUnit(auth()->user()->id, $my_charge);
                foreach ($contacts as $contact) {
                    dispatch(new SendSMS(auth()->user()->id, $contact->id, $contact->phone_number, $request->message, auth()->user()->sender_id));
                }

                return response()->json([
                    'message' => 'Message scheduled successfully',
                ], 200);
            }

        }
    }

    //send single message
    public function sendSingleMessage($request)
    {
        $request->validate([
            'message' => 'required',
            'contact_id' => 'required',
            'pages' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => $validator->errors()
            ], 422);
        } else {
            $contact = $this->model->where('id', '=', $request->contact_id)->where('user_id', auth()->user()->id)->first();
            $my_unit = auth()->user()->unit;
            $my_charge = $this->charge->chargeUser($request->pages, 1);
            if ($my_charge > $my_unit) {
                return response()->json([
                    'message' => 'Sorry you do not have enough to send this message ',
                ], 401);
            } else {
                $remove_charge_from_my_unit = $this->user_action->subtractUnit(auth()->user()->id, $my_charge);
                dispatch(new SendSMS($contact, $request->message));

                return response()->json([
                    'message' => 'Message scheduled successfully',
                ], 200);
            }
        }
    }

    public function sendMessageToAllContact($request)
    {
        $request->validate([
            'message' => 'required',
            'page_number' => 'required',
            'pages' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => $validator->errors()
            ], 422);
        } else {
            $contacts = $this->model->where('user_id', auth()->user()->id)->get();
            $my_unit = auth()->user()->unit;
            $my_charge = $this->charge->chargeUser($request->pages, $contacts->count());
            if ($my_charge > $my_unit) {
                return response()->json([
                    'message' => 'Sorry you do not have enough to send this message ',
                ], 401);
            } else {
                $remove_charge_from_my_unit = $this->user_action->subtractUnit(auth()->user()->id, $my_charge);
                foreach ($contacts as $contact) {
                    dispatch(new SendSMS($contact, $request->message));
                }

                return response()->json([
                    'message' => 'Message scheduled successfully',
                ], 200);
            }
        }
    }

    public function receipt(Request $request)
    {
        info(json_encode($request->all));

        //update sms scheduled
        //ScheduledSms::where('')->update(['status' => '']);

        return response()->json([
            'result' => true,
        ], 200);
    }

}

