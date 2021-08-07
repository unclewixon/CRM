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

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $subscribers = $this->subscriberRepository->allSubscribers();
        return $subscribers;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $subscriber = $this->subscriberRepository->createSubscriber($request);
        return $subscriber;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
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


    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $subscriber = $this->subscriberRepository->deleteSubscriber($id);
        return $subscriber;
    }
}
