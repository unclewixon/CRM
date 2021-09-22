<?php

namespace App\Repositories;

use App\Jobs\SendSMS;
use App\Models\Contact;
use App\Repositories\Contracts\SendMessageRepositoryInterface;
use Illuminate\Http\Request;
use App\Helpers\Charge;
use App\Actions\UserAction;
use SMSGlobal\Credentials;

class SendMessageRepository implements SendMessageRepositoryInterface
{

	public $model;
    public $charge;
    public $user_action;

	public function __construct(Contact $model, Charge $charge, UserAction $user_action)
	{
        Credentials::set(config('smsglobal.key_public'), config('smsglobal.key_secret'));

		$this->model = $model;
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
                    dispatch(new SendSMS($contact, $request->message));
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
                    dispatch(new SendSMS($contact, $request->message));
                }

                return response()->json([
                    'message' => 'Message scheduled successfully',
                ], 200);
            }
        }
    }

    public function smsAnalytics()
    {
        $result = (object)null;
        $result->total = $this->model->count();

        $series = (object)null;
        $series->name = 'SMS Sent';
        $series->data = [0, 0, 0, 0, 0];

        $result->series = $series;

        return response()->json([
            'result' => $result
        ], 200);
    }

    public function deliveredAnalytics()
    {
        $result = (object)null;
        $result->total = $this->model->count();

        $series = (object)null;
        $series->name = 'SMS Delivered';
        $series->data = [0, 0, 0, 0, 0];

        $result->series = $series;

        return response()->json([
            'result' => $result
        ], 200);
    }

    public function receipt(Request $request)
    {
        error_log(json_encode($request->all));

        //update sms scheduled
        //ScheduledSms::where('')->update(['status' => '']);

        return response()->json([
            'result' => true,
        ], 200);
    }

}

