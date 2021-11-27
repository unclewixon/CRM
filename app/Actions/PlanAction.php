<?php

namespace App\Actions;

use App\Models\Plan;
use App\Http\Resources\PlanResource;

class PlanAction
{

    public $model;

    public function __construct(Plan $model)
    {
       $this->model = $model;
    }

    //create user account
    public function create($request)
    {
        try {
            $plan = $this->model->create([
                'name' => $request->name,
                'description' => $request->description,
                'duration' => $request->duration,
                'cost' => $request->cost
            ]);
            return response()->json([
                'message' => 'Plan created successfully',
                'data' => $plan,
                'success' => true
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Sorry unable to create plan',
                'error' => $e->getMessage(),
                'success' => false
            ], 400);
        }
    }

    //get
    public function all()
    {
      $plans = $this->model->latest()->paginate(20);
      if (count($plans) < 1) {
        return response()->json([
            'message' => 'Sorry no plan found',
            'success' => false
        ], 400);
      }else {
          return PlanResource::collection($plans);
      }
    }

    //get
    public function get($id)
    {
      $data = $this->model->where('id', '=', $id)->exists();
      if ($data) {
          $plan = $this->model->find($id);
          return new PlanResource($plan);
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
        $data = $this->model->where('id', '=', $id)->exists();
        if ($data) {
           $plan = $this->model->find($id);
           $plan->slug = null;
           try {
                $update = $plan->update([
                    'name' => empty($request->name) ? $plan->name : $request->name,
                    'description' =>   empty($request->description) ? $plan->description : $request->description,
                    'duration' =>  empty($request->duration) ? $plan->duration : $request->duration,
                    'cost' =>  empty($request->cost) ? $plan->cost : $request->cost
                ]);
                return response()->json([
                    'message' => 'Plan updated successfully',
                    'data' => $update,
                    'success' => true
                ], 200);
           } catch (\Exception $e) {
                return response()->json([
                    'message' => 'Sorry unable to update plan',
                    'error' => $th->getMessage(),
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
                    'message' => 'Plan deleted successfully',
                    'data' => $delete,
                    'success' => true
                ], 200);
            } catch (\Exception $e) {
                return response()->json([
                    'message' => 'Sorry unable to delete plan',
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
    
}
