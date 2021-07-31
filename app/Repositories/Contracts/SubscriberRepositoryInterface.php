<?php

namespace App\Repositories\Contracts;

interface SubscriberRepositoryInterface
{
    public function createSubscriber($request);

    public function allSubscribers();

    public function showSubscriber($id);

    public function deleteSubscriber($id);
}
