<?php

namespace App\Repositories;

use App\Actions\PlanAction;
use Illuminate\Support\Facades\Validator;
use App\Repositories\Contracts\PlanRepositoryInterface;

class PlanRepository implements PlanRepositoryInterface
{
    private $action;

    public function __construct(PlanAction $action)
    {
        $this->action = $action;
    }

    //create Plan
    public function createPlan($request)
    {
        $validator =  Validator::make($request->all(),[
            'name' => 'required',
            'description' => 'required',
            'duration' => 'required',
            'cost' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => $validator->errors(),
                'success' => false
            ], 422);
        }else {
             return  $this->action->create($request);
        }
    }

    //view all the plans
    public function allPlans()
    {
        return $this->action->all();
    }

    //show single plan
    public function showPlan($id)
    {
      return $this->action->get($id);
    }

    //update plans
    public function updatePlan($request, $id)
    {
        $validator =  Validator::make($request->all(),[
            'name' => 'required',
            'description' => 'required',
            'duration' => 'required',
            'cost' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => $validator->errors(),
                'success' => false
            ], 422);
        }else {
             return  $this->action->update($request, $id);
        }
    }

    //delete plan
    public function deletePlan($id)
    {
        return $this->action->delete($id);
    }

}
