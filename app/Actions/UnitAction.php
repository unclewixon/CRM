<?php

namespace App\Actions;

use App\Models\Unit;
use App\Http\Resources\UnitResource;

class UnitAction
{

    public $model;

    public function __construct(Unit $model)
    {
       $this->model = $model;
    }

    //create
    public function create($request)
    {
        $unit = $this->model->create([
            'name' => $request->name,
            'description' => $request->description,
            'unit' => $request->unit,
            'cost_per_unit' => $request->cost_per_unit
        ]);
        if ($unit) {
            return response()->json([
                'message' => 'Unit created successfully',
            ], 200);
        }else {
           return response()->json([
               'message' => 'Sorry unable to create unit'
           ], 400);
        }
    }

    //get
    public function all()
    {
      $plans = $this->model->latest()->paginate(20);
      if (count($plans) < 1) {
        return response()->json([
            'message' => 'Sorry no unit found'
        ], 400);
      }else {
          return UnitResource::collection($plans);
      }
    }

    //get
    public function get($id)
    {
      $data = $this->model->where('id', '=', $id)->exists();
      if ($data) {
          $unit = $this->model->find($id);
          return new UnitResource($unit);
      }else {
           return response()->json([
               'message' => 'Sorry this data do not exist'
           ], 400);
      }
    }

    //update
    public function update($request, $id)
    {
        $data = $this->model->where('id', '=', $id)->exists();
        if ($data) {
           $plan = $this->model->find($id);
           $plan->slug = null;
           $update = $plan->update([
             'name' => empty($request->name) ? $plan->name : $request->name,
             'description' =>   empty($request->description) ? $plan->description : $request->description,
             'unit' =>  empty($request->unit) ? $plan->unit : $request->unit,
             'cost_per_unit' =>  empty($request->cost_per_unit) ? $plan->cost_per_unit : $request->cost_per_unit
           ]);
           if ($update) {
             return response()->json([
                 'message' => 'Unit updated successfully'
             ], 200);
           }else {
              return response()->json([
                  'message' => 'Sorry unable to update unit'
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
