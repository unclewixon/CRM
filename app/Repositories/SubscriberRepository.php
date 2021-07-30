<?php

namespace App\Repositories;

use App\Actions\SubscriberAction;
use Illuminate\Support\Facades\Validator;
use App\Repositories\Contracts\SubscriberRepositoryInterface;

class SubscriberRepository implements SubscriberRepositoryInterface
{
    private $action;

    public function __construct(SubscriberAction $action)
    {
        $this->action = $action;
    }

    //create
    public function createSubscriber($request)
    {
        $validator =  Validator::make($request->all(),[
            'plan_id' => 'required',
            'from' => 'required',
            'to' => 'required'
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
    public function allSubscribers()
    {
        return $this->action->all();
    }

    //show
    public function showSubscriber($id)
    {
      return $this->action->all();
    }

    //update
    public function updateSubscriber($request, $id)
    {
        $validator =  Validator::make($request->all(),[
            'plan_id' => 'required',
            'from' => 'required',
            'to' => 'required'
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
    public function deleteSubscriber($id)
    {
        return $this->action->delete($id);
    }

}
