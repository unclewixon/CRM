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
                'message' => $validator->errors(),
                'success' => false
            ], 422);
        }else {
            $groupID = $request->group_id;
            $contacts = $this->model->with(['groups'  => function ($query) use ($groupID) {
                $query->select(['id', 'email'])
                      ->where('group_id', '=', $groupID);
            }])->where('user_id', auth()->user()->id)->get();
            $data = array(
                'title' => $request->title,
                'body' => $request->body
            );
            foreach ($contacts as $contact) {
                Mail::to($contact->email)->send(new BulkMail($data));
            }
            return response()->json([
                'message' => 'Message sent successfully',
                'success' => true
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
                'message' => $validator->errors(),
                'success' => false
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
                    'success' => true
                ], 200);
           }else {
                return response()->json([
                    'message' => 'Message not sent',
                    'success' => false
                ], 401);
           }

        }
    }

    //send to all
    public function sendEmailToAllContacts($request)
    {
        $request->validate([
            'title'     => 'required',
            'body'    => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => $validator->errors()
            ], 422);
        }else {
            $contacts = $this->model->where('user_id', auth()->user()->id)->get();
            $data = array(
                'title' => $request->title,
                'body' => $request->body
            );
            foreach ($contacts as $contact) {
                Mail::to($contact->email)->send(new BulkMail($data));
            }
            return response()->json([
                'message' => 'Message sent successfully',
            ], 200);
        }
    }

}
