<?php

namespace App\Actions;

use App\Models\Group;
use App\Http\Resources\GroupResource;
use \Cviebrock\EloquentSluggable\Services\SlugService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

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
        $user = $this->model->create([
            'user_id' => auth()->user()->id,
            'name' => $request->name,
            'description' => $request->description ?? null,
            'slug' => SlugService::createSlug($this->model, 'slug', $request->name)
        ]);
        if ($user) {
            return response()->json([
                'message' => 'Group created successfully',
            ], 200);
        } else {
            return response()->json([
                'message' => 'Sorry unable to create group'
            ], 400);
        }
    }

    //get all users
    public function all(Request $request)
    {
        $q = $request->q ?? '';

        $query = $this->model->query()->where('user_id', auth()->user()->id);
        if ($q != '') {
            $query->where('name', 'like', '%' . $q . '%');
        }
        $groups = $query->get();

        return GroupResource::collection($groups);
    }

    //get single user
    public function get($id)
    {
        $data = $this->model->where('id', '=', $id)->exists();
        if ($data) {
            $groups = $this->model->find($id);
            return new GroupResource($groups);
        } else {
            return response()->json([
                'message' => 'Sorry this data do not exist'
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
            $update = $groups->update([
                'name' => empty($request->name) ? $groups->name : $request->name,
                'description' => empty($request->description) ? $groups->description : $request->description,
            ]);
            if ($update) {
                $group = $this->model->where('id', '=', $id)->first();
                return response()->json([
                    'group' => $group,
                    'message' => 'Group updated successfully'
                ], 200);
            } else {
                return response()->json([
                    'message' => 'Sorry unable to update group'
                ], 400);
            }
        } else {
            return response()->json([
                'message' => 'Sorry this data do not exist'
            ], 404);
        }
    }

    //delete user
    public function delete($id)
    {
        $data = $this->model->where('id', '=', $id)->exists();
        if ($data) {
            $delete_contacts = DB::table('contact_group')->where('group_id', $id)->delete();

            $delete = $this->model->find($id)->delete();
            if ($delete) {
                return response()->json([
                    'message' => 'Group deleted successfully'
                ], 200);
            } else {
                return response()->json([
                    'message' => 'Sorry unable to delete group'
                ], 400);
            }
        } else {
            return response()->json([
                'message' => 'Sorry this group do not exist'
            ], 404);
        }
    }
}
