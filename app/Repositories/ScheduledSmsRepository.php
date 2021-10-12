<?php

namespace App\Repositories;

use App\Models\ScheduledSms;
use App\Repositories\Contracts\ScheduledSmsRepositoryInterface;
use Illuminate\Http\Request;

class ScheduledSmsRepository implements ScheduledSmsRepositoryInterface
{

    public $model;

    public function __construct(ScheduledSms $model)
    {
        $this->model = $model;
    }

    public function smsAnalytics()
    {
        $result = (object)null;
        $result->total = $this->model->where('status', 'sent')->count();

        $series = (object)null;
        $series->name = 'SMS Sent';
        $series->data = [0, 0, 0, 0, 0];

        $result->series[] = $series;

        return response()->json([
            'result' => $result
        ], 200);
    }

    public function deliveredAnalytics()
    {
        $result = (object)null;
        $result->total = $this->model->where('status', 'sent')->count();

        $series = (object)null;
        $series->name = 'SMS Delivered';
        $series->data = [0, 0, 0, 0, 0];

        $result->series[] = $series;

        return response()->json([
            'result' => $result
        ], 200);
    }

}

