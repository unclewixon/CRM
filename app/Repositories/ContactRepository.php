<?php

namespace App\Repositories;

use App\Actions\ContactAction;
use Illuminate\Support\Facades\Validator;
use App\Repositories\Contracts\ContactRepositoryInterface;

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
            'gender' => 'required',
            'dob' => 'required',
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

    public function updateContact($request, $id)
    {
        $validator =  Validator::make($request->all(),[
            'sur_name' => 'required',
            'first_name' => 'required',
            'email' => 'required|email',
            'scheme' => 'required',
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
