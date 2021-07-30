<?php

namespace App\Actions;

use App\Models\Subscriber;
use App\Http\Resources\SubscriberResource;
use App\Actions\UserAction;
use App\Helpers\Payment;

class SubscriberAction
{

    public $model;
    public $user_action;
    public $payment;

    public function __construct(Subscriber $model, UserAction $user_action, Payment $payment)
    {
       $this->model = $model;
       $this->user_action = $user_action;
       $this->payment = $payment;
    }

    //create user account
    public function create($request)
    {
        $user = $this->model->create([
            'user_id' => auth()->user()->id,
            'plan_id' => $request->plan_id,
            'from' => $request->from,
            'to' => $request->cost
        ]);
        if ($user) {
            $sub = $this->user_action->isSubscribed(auth()->user()->id, 1);
            return response()->json([
                'message' => 'Subscriber created successfully',
            ], 200);
        }else {
           return response()->json([
               'message' => 'Sorry unable to create subscriber'
           ], 400);
        }
    }

    //get all users
    public function all()
    {
      $plans = $this->model->latest()->paginate(20);
      if (count($plans) < 1) {
        return response()->json([
            'message' => 'Sorry no subscriber found'
        ], 400);
      }else {
          return PlanResource::collection($plans);
      }
    }

    //get single user
    public function get($id)
    {
      $data = $this->model->where('id', '=', $id)->exists();
      if ($data) {
          $plan = $this->model->find($id);
          return new PlanResource($plan);
      }else {
           return response()->json([
               'message' => 'Sorry this subscriber do not exist'
           ], 400);
      }
    }

    //delete user
    public function delete($id)
    {
        $data = $this->model->where('id', '=', $id)->exists();
        if ($data) {
            $delete =  $this->model->find($id)->delete();
            if ($delete) {
              return response()->json([
                   'message' => 'Subscriber deleted successfully'
               ], 200);
            }else {
               return response()->json([
                   'message' => 'Sorry unable to delete  subscriber'
               ], 400);
            }
        }else {
          return response()->json([
              'message' => 'Sorry this  subscriber do not exist'
          ], 404);
        }
    }
}
