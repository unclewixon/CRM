<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Repositories\Contracts\SubscriberRepositoryInterface;

class SubscriberController extends Controller
{

    private $subscriberRepository;

    public function __construct(SubscriberRepositoryInterface $subscriberRepository)
    {
        $this->subscriberRepository = $subscriberRepository;
        $this->middleware('auth:api');
    }

    //all subscribers
    public function index()
    {
        $subscribers = $this->subscriberRepository->allSubscribers();
        return $subscribers;
    }

    //create
    public function store(Request $request)
    {
        $subscriber = $this->subscriberRepository->createSubscriber($request);
        return $subscriber;
    }

    //show details
    public function show($id)
    {
        $subscriber = $this->subscriberRepository->showSubscriber($id);
        return $subscriber;
    }

    //active sub
    public function activeSub()
    {
         $subscriber = $this->subscriberRepository->active();
         return $subscriber;
    }

    //inactive sub
    public function inActiveSub()
    {
         $subscriber = $this->subscriberRepository->inactive();
         return $subscriber;
    }

    //deactivate subscribersw
    public function deActivateSub()
    {
         $subscriber = $this->subscriberRepository->deActivateSubscriber();
         return $subscriber;
    }

    //delete
    public function destroy($id)
    {
        $subscriber = $this->subscriberRepository->deleteSubscriber($id);
        return $subscriber;
    }
}
