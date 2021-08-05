<?php

namespace App\Repositories;

use App\Actions\ContactAction;
use Illuminate\Support\Facades\Validator;
use App\Repositories\Contracts\ContactRepositoryInterface;
use App\Imports\ContactImport;
use Maatwebsite\Excel\Facades\Excel;

class ContactRepository implements ContactRepositoryInterface
{
    private $action;

    public function __construct(ContactAction $action)
    {
        $this->action = $action;
    }

    //buy
    public function createContact($request)
    {
        $validator =  Validator::make($request->all(),[
            'sur_name' => 'required',
            'first_name' => 'required',
            'email' => 'required|email',
            'scheme' => 'required',
            'phone_number' => 'required',
            'gender' => 'required',
            'dob' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => $validator->errors()
            ], 422);
        }else {
             return  $this->action->create($request);
        }
    }

    //all
    public function allContacts()
    {
        return $this->action->all();
    }

    //show
    public function showContact($id)
    {
        return $this->action->get($id);
    }

    //add single contact
    public function addContactsToGrouop($request)
    {
        $validator =  Validator::make($request->all(),[
            'group_id' => 'required',
            'contacts_id' => 'required|array'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => $validator->errors()
            ], 422);
        }else {
             return  $this->action->addContactsToGroup($request);
        }
    }

    //remove mutiple contacts
    public function removeContactsFromGrouop($request)
    {
        $validator =  Validator::make($request->all(),[
            'group_id' => 'required',
            'contacts_id' => 'required|array'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => $validator->errors()
            ], 422);
        }else {
             return  $this->action->removeContactsFromGroup($request);
        }
    }

    //add single contact
    public function addContactToGrouop($request)
    {
        $validator =  Validator::make($request->all(),[
            'group_id' => 'required',
            'contact_id' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => $validator->errors()
            ], 422);
        }else {
             return  $this->action->addContactToGroup($request);
        }
    }

    //remove single contact
    public function removeContactFromGrouop($request)
    {
        $validator =  Validator::make($request->all(),[
            'group_id' => 'required',
            'contact_id' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => $validator->errors()
            ], 422);
        }else {
             return  $this->action->removeContactFromGroup($request);
        }
    }

    //batch contacts
    public function batchContactUpload($request)
    {
        $validator =  Validator::make($request->all(),[
            'file' => 'required'
        ]);
        if ($validator->fails()) {
            return response()->json([
                'message' => $validator->errors()
            ], 422);
        }else {
            $insert =  Excel::import(new ContactImport,request()->file('file'));
            return $insert;
        }
    }

    //update contact details
    public function updateContact($request, $id)
    {
        $validator =  Validator::make($request->all(),[
            'sur_name' => 'required',
            'first_name' => 'required',
            'email' => 'required|email',
            'scheme' => 'required',
            'phone_number' => 'required',
            'gender' => 'required',
            'dob' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => $validator->errors()
            ], 422);
        }else {
             return  $this->action->update($request, $id);
        }
    }

    //delete
    public function deleteContact($id)
    {
        return $this->action->delete($id);
    }
}
