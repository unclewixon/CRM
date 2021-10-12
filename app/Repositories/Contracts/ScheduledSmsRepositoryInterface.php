<?php

namespace App\Repositories\Contracts;

use Illuminate\Http\Request;

interface ScheduledSmsRepositoryInterface
{
    public function smsAnalytics();

    public function deliveredAnalytics();

}
