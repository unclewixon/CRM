<?php

namespace App\Actions;

use App\Models\Group;
use App\Http\Resources\GroupResource;
use \Cviebrock\EloquentSluggable\Services\SlugService;

class GroupAction
{

    public $model;

    public function __construct(Group $model)
    {
       $this->model = $model;
    }

    //create user account
    public function create($request)
    {
        try {
            $group = $this->model->create([
                'user_id' => auth()->user()->id,
                'name' => $request->name,
                'description' => $request->description,
                'slug' => SlugService::createSlug($this->model, 'slug', $request->name)
            ]);
            return response()->json([
                'message' => 'Group created successfully',
                'data' => $group,
                'success' => true
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Sorry unable to create group',
                'error' => $e->getMessage(),
                'success' => false
            ], 400);
        }
    }

    //get all users
    public function all()
    {
        $groups  = $this->model->with('contacts')->where('user_id', auth()->user()->id)->latest()->paginate(20);
        return GroupResource::collection($groups);
    }

    //get single user
    public function get($id)
    {
      $data = $this->model->where('id', '=', $id)->exists();
      if ($data) {
          $groups = $this->model->find($id);
          return new GroupResource($groups);
      }else {
           return response()->json([
               'message' => 'Sorry this data do not exist',
               'success' => false
           ], 400);
      }
    }

    //update user account
    public function update($request, $id)
    {
        $data = $this->model->where('id', '=', $id)->exists();
        if ($data) {
           $groups = $this->model->find($id);
           $groups->slug = null;
           try {
                $update = $groups->update([
                    'name' => empty($request->name) ? $groups->name : $request->name,
                    'description' =>   empty($request->description) ? $groups->description : $request->description,
                ]);
                return response()->json([
                    'message' => 'Group updated successfully',
                    'data' => $update,
                    'success' => true
                ], 200);
           } catch (\Throwable $th) {
                return response()->json([
                    'message' => 'Sorry unable to update group',
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

    //delete user
    public function delete($id)
    {
        $data = $this->model->where('id', '=', $id)->exists();
        if ($data) {
            try {
                $delete =  $this->model->find($id)->delete();
                return response()->json([
                    'message' => 'Group deleted successfully',
                    'data' => $delete,
                    'success' => true
                ], 200);
            } catch (\Exception $e) {
                return response()->json([
                   'message' => 'Sorry unable to delete group',
                   'error' => $e->getMessage(),
                   'success' => false
               ], 400);
            }
        }else {
          return response()->json([
              'message' => 'Sorry this group do not exist',
              'success' => false
          ], 404);
        }
    }
}
