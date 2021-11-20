<?php

namespace App\Actions;

use App\Models\Recharge;
use App\Helpers\Helper;
use App\Helpers\Payment;
use Illuminate\Http\Request;

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
        $recharge = $this->model->create([
            'user_id' => auth()->user()->id,
            'unit_id' => $request->unit_id,
            'number' => $request->unit_number,
            'amount' => $this->helper->calculateCost($request->unit_id, $request->unit_number),
        ]);

        if ($recharge) {
            $pay = $this->payment->verify($request, 'Unit', $recharge->id);
            return response()->json([
                'recharge' => $pay
            ], 200);
        } else {
            return response()->json([
                'message' => 'Sorry unable to buy unit'
            ], 400);
        }
    }

    //get
    public function all(Request $request)
    {
        $perPage = $request->perPage ?? 10;
        $page = $request->page ?? 1;

        $my_units = $this->model->with('transaction:id,status')->where('user_id', auth()->user()->id)->latest()->paginate($perPage, ['*'], 'page', $page);

        return $my_units;
    }

    //get
    public function get($id)
    {
        $data = $this->model->where('id', '=', $id)->exists();
        if ($data) {
            $my_unit = $this->model->find($id);
            return $my_unit;
        } else {
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
            $delete = $this->model->find($id)->delete();
            if ($delete) {
                return response()->json([
                    'message' => 'Unit deleted successfully'
                ], 200);
            } else {
                return response()->json([
                    'message' => 'Sorry unable to delete unit'
                ], 400);
            }
        } else {
            return response()->json([
                'message' => 'Sorry this data do not exist'
            ], 404);
        }
    }
}
