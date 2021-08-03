<?php

namespace App\Actions;

use App\Models\EmailConfiguration;

class EmailConfigurationAction
{

    public $model;

    public function __construct(EmailConfiguration $model)
    {
       $this->model = $model;
    }

    //create
    public function create($request)
    {
        $user = $this->model->create([
            "user_id" =>    auth()->user()->id,
            "driver"  =>  $request->driver,
            "host"    =>   $request->host_name,
            "port"   =>  $request->port,
            "encryption" =>   $request->encryption,
            "user_name" =>   $request->user_name,
            "password" =>  $request->password,
            "sender_name" =>  $request->sender_name,
            "sender_email" =>  $request->sender_email
        ]);
        if ($user) {
            return response()->json([
                'message' => 'Email configuration created. successfully',
            ], 200);
        }else {
           return response()->json([
               'message' => 'Email configuration not created'
           ], 400);
        }
    }

    //get
    public function all()
    {
        if (auth()->user()->role_id == 1) {
            $configuration = $this->model->with(['user'])->latest()->paginate(20);
        }else {
            $configuration = $this->model->where('user_id', auth()->user()->id)->latest();
        }
        if (count($configuration) < 1) {
            return response()->json([
                'message' => 'Sorry no configuration found'
            ], 400);
        }else {
            return $configuration;
        }
    }

    //get
    public function get($id)
    {
      $data = $this->model->where('id', '=', $id)->exists();
      if ($data) {
            $configuration = $this->model->find($id);
            return $configuration;
      }else {
           return response()->json([
               'message' => 'Sorry this data do not exist'
           ], 400);
      }
    }

    //update
    public function update($request, $id)
    {
        $data = $this->model->where('id', '=', $id)->where('user_id', auth()->user()->id)->exists();
        if ($data) {
           $configuration = $this->model->find($id);
           $update = $configuration->update([
                "driver"  =>  empty($request->driver) ? $configuration->driver : $request->driver ,
                "host"    =>   empty($request->host_name) ? $configuration->host_name : $request->host_name,
                "port"   =>  empty($request->port) ? $configuration->port : $request->port,
                "encryption" =>   empty($request->encryption) ? $configuration->encryption : $request->encryption ,
                "user_name" =>   empty($request->user_name) ? $configuration->user_name : $request->user_name ,
                "password" =>  empty($request->password) ? $configuration->password : $request->password ,
                "sender_name" =>  empty($request->sender_name) ? $configuration->sender_name : $request->sender_name,
                "sender_email" =>  empty($request->sender_email) ? $configuration->sender_email : $request->sender_email
           ]);
           if ($update) {
             return response()->json([
                 'message' => 'Email configuration updated successfully'
             ], 200);
           }else {
              return response()->json([
                  'message' => 'Sorry unable to update email configuration'
              ], 400);
           }
        }else {
          return response()->json([
              'message' => 'Sorry this data do not exist'
          ], 404);
        }
    }

    //delete
    public function delete($id)
    {
        $data = $this->model->where('id', '=', $id)->exists();
        if ($data) {
            $delete =  $this->model->find($id)->delete();
            if ($delete) {
              return response()->json([
                   'message' => 'Email configuration deleted successfully'
               ], 200);
            }else {
               return response()->json([
                   'message' => 'Sorry unable to delete email configuration'
               ], 400);
            }
        }else {
          return response()->json([
              'message' => 'Sorry no confuguration found'
          ], 404);
        }
    }
}
