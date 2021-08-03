<?php

namespace App\Repositories;

use App\Actions\EmailConfigurationAction;
use Illuminate\Support\Facades\Validator;
use App\Repositories\Contracts\EmailConfigurationRepositoryInterface;

class EmailConfigurationRepository implements EmailConfigurationRepositoryInterface
{
    private $action;

    public function __construct(EmailConfigurationAction $action)
    {
        $this->action = $action;
    }

    //create
    public function createConfiguration($request)
    {
        $validator =  Validator::make($request->all(),[
            "driver"  =>  'required',
            "host"    =>   'required',
            "port"   =>  'required',
            "encryption" =>   'required',
            "user_name" =>   'required',
            "password" =>  'required',
            "sender_name" =>  'required',
            "sender_email" =>  'required|email'
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
    public function allConfiguration()
    {
         return $this->action->all();
    }

    //show
    public function showConfiguration($id)
    {
         return $this->action->get($id);
    }

    //update
    public function updateConfiguration($request, $id)
    {
        $validator =  Validator::make($request->all(),[
            "driver"  =>  'required',
            "host"    =>   'required',
            "port"   =>  'required',
            "encryption" =>   'required',
            "user_name" =>   'required',
            "password" =>  'required',
            "sender_name" =>  'required',
            "sender_email" =>  'required|email'
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
    public function deleteConfiguration($id)
    {
         return $this->action->delete($id);
    }


}