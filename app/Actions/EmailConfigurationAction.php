<?php

namespace App\Actions;

use App\Models\EmailConfiguration;
use App\Http\Resources\EmailConfigurationResoucrce;

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
        try {
            $config = $this->model->create([
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
            return response()->json([
                'message' => 'Email configuration created. successfully',
                'data' => $config,
                'success' => true
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Email configuration not created',
                'error' => $e->getMessage(),
                'success' => false
            ], 400);
        }
    }

    //get
    public function all()
    {
        $configuration = $this->model->where('user_id', auth()->user()->id)->latest()->paginate(20);
        return EmailConfigurationResoucrce::collection($configuration);
    }

    //get
    public function get($id)
    {
      $data = $this->model->where('id', '=', $id)->exists();
      if ($data) {
            if (auth()->user()->role_id == 1) {
                 $configuration = $this->model->with(['user'])->find($id);
            }else {
                 $configuration = $this->model->find($id);
            }
            return new EmailConfigurationResoucrce($configuration);
      }else {
           return response()->json([
               'message' => 'Sorry this data do not exist',
               'success' => false
           ], 400);
      }
    }

    //update
    public function update($request, $id)
    {
        $data = $this->model->where('id', '=', $id)->where('user_id', auth()->user()->id)->exists();
        if ($data) {
           $configuration = $this->model->find($id);
           try {
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
                return response()->json([
                    'message' => 'Email configuration updated successfully',
                    'data' => $update,
                    'success' => true
                ], 200);
           } catch (\Exception $e) {
                return response()->json([
                    'message' => 'Sorry unable to update email configuration',
                    'error' => $e->getMessage(),
                    'success' => false
                ], 400);
           }
        }else {
            return response()->json([
                'message' => 'Sorry this data do not exist',
                'success' => false
            ], 404);
        }
    }

    //delete
    public function delete($id)
    {
        $data = $this->model->where('id', '=', $id)->exists();
        if ($data) {
            try {
                $delete =  $this->model->find($id)->delete();
                return response()->json([
                    'message' => 'Email configuration deleted successfully',
                    'delete' => $delete,
                    'success' => true
                ], 200);
            } catch (\Throwable $th) {
                return response()->json([
                    'message' => 'Sorry unable to delete email configuration',
                    'error' => $th->getMessage(),
                    'success' => false
                ], 400);
            }
        }else {
          return response()->json([
              'message' => 'Sorry no configuration found',
              'success' => false
          ], 404);
        }
    }
}
