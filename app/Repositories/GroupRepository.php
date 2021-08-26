<?php

namespace App\Repositories;

use App\Actions\GroupAction;
use Illuminate\Support\Facades\Validator;
use App\Repositories\Contracts\GroupRepositoryInterface;

class GroupRepository implements GroupRepositoryInterface
{
    private $action;

    public function __construct(GroupAction $action)
    {
        $this->action = $action;
    }

    //create group
    public function createGroup($request)
    {
        $validator =  Validator::make($request->all(),[
            'name'  => 'required',
            'description' => 'required',
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
    public function allGroups()
    {
        return $this->action->all();
    }

    //show
    public function showGroup($id)
    {
        return $this->action->get($id);
    }

    //update
    public function updateGroup($request, $id)
    {
        $validator =  Validator::make($request->all(),[
            'name'  => 'required',
            'description' => 'required',
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
    public function deleteGroup($id)
    {
        return $this->action->delete($id);
    }
}
