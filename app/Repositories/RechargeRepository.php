<?php

namespace App\Repositories;

use App\Actions\RechargeAction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Repositories\Contracts\RechargeRepositoryInterface;

class RechargeRepository implements RechargeRepositoryInterface
{
    private $action;

    public function __construct(RechargeAction $action)
    {
        $this->action = $action;
    }

    //buy
    public function rechargeAcct($request)
    {
        $validator =  Validator::make($request->all(),[
            'unit_id' => 'required',
            'unit_number' => 'required'
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
    public function rechargeHistory(Request $request)
    {
        return $this->action->all($request);
    }

    //show
    public function singleRechargeHistory($id)
    {
        return $this->action->get($id);
    }

    //delete
    public function deleteRecharge($id)
    {
        return $this->action->delete($id);
    }
}
