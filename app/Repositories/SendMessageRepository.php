<?php

namespace App\Repositories;

use App\Models\Contact;
use Illuminate\Support\Facades\Validator;
use App\Repositories\Contracts\SendEmailRepositoryInterface;
use App\Helpers\MessageHelper;

class SendEmailRepository implements SendEmailRepositoryInterface
{

	public $model;
	public $message_helper;

	public function __construct(Contact $model, MessageHelper $message_helper)
	{
		$this->model = $model;
		$this->message_helper = $message_helper;
	}

    //send bulk message
    public function sendBulkSms($request)
    {
        $request->validate([
            'group_id' => 'required',
            'message'    => 'required'
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

    //send single message
    public function sendSingleMessage($request)
    {
    	$request->validate([
            'message'    => 'required',
            'contact_id' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => $validator->errors()
            ], 422);
        }else {
            $groupID = $request->group_id;
            $contact = $this->model->where('id', '=', $request->contact_id)->where('user_id', auth()->user()->id)->first();
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

