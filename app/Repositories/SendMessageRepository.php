<?php

namespace App\Repositories;

use App\Models\Contact;
use Illuminate\Support\Facades\Validator;
use App\Repositories\Contracts\SendEmailRepositoryInterface;
use App\Helpers\MessageHelper;
use App\Hepers\Charge;
use App\Actions\UserAction;

class SendEmailRepository implements SendEmailRepositoryInterface
{

	public $model;
	public $message_helper;
    public $charge;
    public $user_action;

	public function __construct(Contact $model, MessageHelper $message_helper, Charge $charge, UserAction $user_action)
	{
		$this->model = $model;
		$this->message_helper = $message_helper;
        $this->charge = $charge;
        $this->user_action = $user_action;
	}

    //send bulk message
    public function sendBulkSms($request)
    {
        $request->validate([
            'group_id' => 'required',
            'message'    => 'required',
            'pages' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => $validator->errors()
            ], 422);
        }else {
            $groupID = $request->group_id;
            $contacts = $this->model->with(['groups'  => function ($query) use ($groupID) {
                    $query->select(['id', 'email'])->where('group_id', '=', $groupID);
                }])->where('user_id', auth()->user()->id)->get();
            $my_unit = auth()->user()->unit;
            $my_charge = $this->charge->chargeUser($request->pages, $contacts->count());
            if ($my_charge > $my_unit) {
                return response()->json([
                    'message' => 'Sorry you do not have enough to send this message ',
                ], 401);
            }else {
                $remove_charge_from_my_unit = $this->user_action->subtractUnit(auth()->user()->id, $my_charge);
                foreach ($contacts as $contact) {
                    $send = $this->message_helper->sendMessage($contact->phone_number, $request->message);
                }

                if ($send) {
                    return response()->json([
                        'message' => 'Message sent successfully',
                    ], 200);
                }else {
                    return response()->json([
                        'message' => 'Message not sent',
                    ], 401);
                }
            }

        }
    }

    //send single message
    public function sendSingleMessage($request)
    {
    	$request->validate([
            'message'    => 'required',
            'contact_id' => 'required',
            'pages' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => $validator->errors()
            ], 422);
        }else {
            $contact = $this->model->where('id', '=', $request->contact_id)->where('user_id', auth()->user()->id)->first();
            $my_unit = auth()->user()->unit;
            $my_charge = $this->charge->chargeUser($request->pages, 1);
            if ($my_charge > $my_unit) {
                return response()->json([
                    'message' => 'Sorry you do not have enough to send this message ',
                ], 401);
            }else { 
                $remove_charge_from_my_unit = $this->user_action->subtractUnit(auth()->user()->id, $my_charge);
                $send = $this->message_helper->sendMessage($contact->phone_number, $request->message);
                if ($send) {
                    return response()->json([
                        'message' => 'Message sent successfully',
                    ], 200);
                }else {
                    return response()->json([
                        'message' => 'Message not sent',
                    ], 401);
                }
            }
        }
    }   

    public function sendMessageToAllContact($request) 
    {
         $request->validate([
            'message'  => 'required',
            'page_number' => 'required', 
            'pages' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => $validator->errors()
            ], 422);
        }else {
            $contacts = $this->model->where('user_id', auth()->user()->id)->get();
            $my_unit = auth()->user()->unit;
            $my_charge = $this->charge->chargeUser($request->pages, $contacts->count());
            if ($my_charge > $my_unit) {
                return response()->json([
                    'message' => 'Sorry you do not have enough to send this message ',
                ], 401);
            }else {
                $remove_charge_from_my_unit = $this->user_action->subtractUnit(auth()->user()->id, $my_charge);
                foreach ($contacts as $contact) {
                    $send = $this->message_helper->sendMessage($contact->phone_number, $request->message);
                }
                if ($send) {
                    return response()->json([
                        'message' => 'Message sent successfully',
                    ], 200);
                }else {
                    return response()->json([
                        'message' => 'Message not sent',
                    ], 401);
                } 
            }
        }
    }

}

