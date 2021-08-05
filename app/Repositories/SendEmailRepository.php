<?php

namespace App\Repositories;

use App\Models\Contact;
use Illuminate\Support\Facades\Validator;
use App\Repositories\Contracts\SendEmailRepositoryInterface;
use App\Mail\BulkMail;
use Illuminate\Support\Facades\Mail;

class SendEmailRepository implements SendEmailRepositoryInterface
{
        
    public $model;

    public function __construct(Contact $model)
    {
        $this->model = $model;
    }

    //send bulk email
    public function sendBulkEmail($request)
    {
        $request->validate([
            'group_id' => 'required',
            'title'     => 'required',
            'body'    => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => $validator->errors()
            ], 422);
        }else {
            $groupID = $request->group_id;
            $contacts = $this->model->with(['groups'  => function ($query) use ($groupID) {
                $query->select(['id', 'email'])
                      ->where('group_id', '=', $groupID);
            }])->where('user_id', auth()->user()->id)->get();
            foreach ($contacts as $contact) {
                $data = array(
                    'title' => $request->title,
                    'body' => $request->body
                );
                Mail::to($contact->email)->send(new BulkMail($data));
            }
            return response()->json([
                'message' => 'Message sent successfully',
            ], 200);
        }
    }   

     //send single email
    public function sendSingleEmail($request)
    {
        $request->validate([
            'contact_id' => 'required',
            'title'     => 'required',
            'body'    => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => $validator->errors()
            ], 422);
        }else {
            $contact = $this->model->where('id', '=', $request->contact_id)->where('user_id', auth()->user()->id)->first();
            $data = array(
                'title' => $request->title,
                'body' => $request->body
            );
           $send = Mail::to($contact->email)->send(new BulkMail($data));
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