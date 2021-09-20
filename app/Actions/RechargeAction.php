<?php

namespace App\Actions;

use App\Models\Recharge;
use App\Helpers\Helper;
use App\Helpers\Payment;

class RechargeAction
{

    public $model;
    public $helper;
    public $payment;

    public function __construct(Recharge $model, Helper $helper, Payment $payment)
    {
       $this->model = $model;
       $this->helper = $helper;
       $this->payment = $payment;
    }

    //create
    public function create($request)
    {
        $unit = $this->model->create([
            'user_id' => auth()->user('api')->id,
            'unit_id' => $request->unit_id,
            'number' => $request->unit_number,
            'amount' => $this->helper->calculateCost($request->unit_id,$request->unit_number)
        ]);
        if ($unit) {
          $pay = $this->payment->initialize($request, 'Unit', $unit->amount);
          if ($pay) {
            return response()->json([
                'url' => $pay
            ], 200);
          }
        }else {
           return response()->json([
               'message' => 'Sorry unable to buy unit'
           ], 400);
        }
    }

    //get
    public function all()
    {
        $user_roles = auth()->user()->roles->pluck('name');
        if ($user_roles->contains('SuperAdmin')) {
            $my_units = $this->model->with(['user'])->latest()->paginate(20);
        }else {
            $my_units  = $this->model->where('user_id', auth()->user()->id)->latest()->paginate(20);
        }
        if (count($my_units) < 1) {
            return response()->json([
                'message' => 'Sorry no unit found'
            ], 400);
        }else {
            return $my_units;
        }
    }

    //get
    public function get($id)
    {
      $data = $this->model->where('id', '=', $id)->exists();
      if ($data) {
          $my_unit = $this->model->find($id);
          return $my_unit;
      }else {
           return response()->json([
               'message' => 'Sorry this data do not exist'
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
                   'message' => 'Unit deleted successfully'
               ], 200);
            }else {
               return response()->json([
                   'message' => 'Sorry unable to delete unit'
               ], 400);
            }
        }else {
          return response()->json([
              'message' => 'Sorry this data do not exist'
          ], 404);
        }
    }
}
