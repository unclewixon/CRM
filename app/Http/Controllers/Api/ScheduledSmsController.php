<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Repositories\Contracts\ScheduledSmsRepositoryInterface;
use Illuminate\Http\Request;

class ScheduledSmsController extends Controller
{
    private $scheduledSmsRepository;

    public function __construct(ScheduledSmsRepositoryInterface $scheduledSmsRepository)
    {
        $this->scheduledSmsRepository = $scheduledSmsRepository;
        $this->middleware('auth:api');
    }

    //send sms to all contacts
    public function smsAnalytics()
    {
        $sms = $this->scheduledSmsRepository->smsAnalytics();
        return $sms;
    }

    //send sms to all contacts
    public function deliveredAnalytics()
    {
        $delivered = $this->scheduledSmsRepository->deliveredAnalytics();
        return $delivered;
    }
}
