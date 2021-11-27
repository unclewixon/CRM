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
            'plan_id' => 'required'
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

    //active subscribers
    public function active()
    {
         return $this->action->activeSubscribers();
    }

    //deactivate subscribers
    public function deActivateSubscriber()
    {
        return $this->action->deActivateSubscription();
    }

    //inactive subscribers
    public function inactive()
    {
         return $this->action->inactiveSubscribers();
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

    //delete
    public function deleteSubscriber($id)
    {
        return $this->action->delete($id);
    }

}
