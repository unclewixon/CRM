<?php

namespace App\Actions;

use App\Models\Subscriber;
use App\Http\Resources\SubscriberResource;
use App\Helpers\Payment;
use Carbon\Carbon;
use App\Helpers\Helper;

class SubscriberAction
{

    public $model;
    public $user_action;
    public $payment;
    public $helper;

    public function __construct(Subscriber $model, Payment $payment, Helper $helper)
    {
       $this->model = $model;
       $this->payment = $payment;
       $this->helper   =  $helper;
    }

    //create
    public function create($request)
    {
        $subscriber = $this->model->create([
            'user_id' => auth()->user()->id,
            'plan_id' => $request->plan_id,
            'from' => Carbon::now(),
            'to' => $this->helper->to($request->plan_id)
        ]);
        if ($subscriber) {
            $pay = $this->payment->initialize($request, 'Subscription', $this->helper->getCost($request->plan_id));
            if ($pay) {
                return response()->json([
                    'url' => $pay
                ], 200);
            }
        }else {
           return response()->json([
               'message' => 'Sorry unable to subscribe'
           ], 400);
        }
    }

    //get
    public function all()
    {
        if (auth()->user()->role_id == 1) {
            $subscriber = $this->model->with(['plan','user'])->latest()->paginate(20);
        }else {
            $subscriber = $this->model->with(['plan'])->where('user_id', auth()->user()->id)->latest()->paginate(20);
        }
        if (count($subscriber) < 1) {
          return response()->json([
              'message' => 'Sorry no subscriber found'
          ], 400);
        }else {
            return SubscriberResource::collection($subscriber);
        }
    }

    //get
    public function get($id)
    {
        $data = $this->model->where('id', '=', $id)->exists();
        if ($data) {
            $subscriber = $this->model->find($id);
            return new SubscriberResource($subscriber);
        }else {
             return response()->json([
                 'message' => 'Sorry this subscriber do not exist'
             ], 400);
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
