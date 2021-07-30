<?php

namespace App\Repositories\Contracts;

interface SubscriberRepositoryInterface
{
    public function createSubscriber($request);

    public function allSubscribers();

    public function showSubscriber($id);

    public function updateSubscriber($request, $id);

    public function deleteSubscriber($id);
}
