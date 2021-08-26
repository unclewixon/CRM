<?php

namespace App\Actions;

use App\Models\Plan;
use App\Http\Resources\PlanResource;
use \Cviebrock\EloquentSluggable\Services\SlugService;

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
        $user = $this->model->create([
            'name' => $request->name,
            'description' => $request->description,
            'duration' => $request->duration,
            'cost' => $request->cost,
            'slug' => SlugService::createSlug($this->model, 'slug', $request->name)
        ]);
        if ($user) {
            return response()->json([
                'message' => 'Plan created successfully',
            ], 200);
        }else {
           return response()->json([
               'message' => 'Sorry unable to create plan'
           ], 400);
        }
    }

    //get
    public function all()
    {
      $plans = $this->model->latest()->paginate(20);
      if (count($plans) < 1) {
        return response()->json([
            'message' => 'Sorry no plan found'
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
             'duration' =>  empty($request->duration) ? $plan->duration : $request->duration,
             'cost' =>  empty($request->cost) ? $plan->cost : $request->cost
           ]);
           if ($update) {
             return response()->json([
                 'message' => 'Plan updated successfully'
             ], 200);
           }else {
              return response()->json([
                  'message' => 'Sorry unable to update plan'
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
                   'message' => 'Plan deleted successfully'
               ], 200);
            }else {
               return response()->json([
                   'message' => 'Sorry unable to delete plan'
               ], 400);
            }
        }else {
          return response()->json([
              'message' => 'Sorry this data do not exist'
          ], 404);
        }
    }
    
}
