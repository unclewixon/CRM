<?php

namespace App\Repositories;

use App\Models\Contact;
use App\Models\Group;
use Illuminate\Support\Facades\Validator;
use App\Repositories\Contracts\SendEmailRepositoryInterface;
use App\Mail\BulkMail;
use Illuminate\Support\Facades\Mail;

class SendEmailRepository implements SendEmailRepositoryInterface
{

    //send email
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
            $contacts = Contact::with(['groups'  => function ($query) use ($groupID) {
                $query->select(['id', 'email'])
                      ->where('group_id', '=', $groupID);
            }])->where('user_id', auth()->user()->id)->get();
            foreach ($contacts as $contact) {
                $data = array(
                    'title' => $contact->title,
                    'body' => $contact->body
                );
                Mail::to($value->email)->send(new BulkMail($data));
            }
            return response()->json([
                'message' => 'Message sent successfully',
            ], 200);
        }
    }   

}