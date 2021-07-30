<?php

namespace App\Repositories;

use App\Actions\UnitAction;
use Illuminate\Support\Facades\Validator;
use App\Repositories\Contracts\UnitRepositoryInterface;

class UnitRepository implements UnitRepositoryInterface
{
    private $action;

    public function __construct(UnitAction $action)
    {
        $this->action = $action;
    }

    //create
    public function createUnit($request)
    {
        $validator =  Validator::make($request->all(),[
            'name' => 'required',
            'description' => 'required',
            'cost_per_unit' => 'required',
            'unit' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => $validator->errors()
            ], 422);
        }else {
             return  $this->action->create($request);
        }
    }

    //view all
    public function allUnits()
    {
        return $this->action->all();
    }

    //show
    public function showUnit($id)
    {
      return $this->action->get($id);
    }

    //update
    public function updateUnit($request, $id)
    {
        $validator =  Validator::make($request->all(),[
            'name' => 'required',
            'description' => 'required',
            'cost_per_unit' => 'required',
            'unit' => 'required'
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
    public function deleteUnit($id)
    {
        return $this->action->delete($id);
    }

}
