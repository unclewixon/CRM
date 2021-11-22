<?php

namespace App\Repositories;

use App\Models\Contact;
use App\Models\ScheduledSms;
use App\Repositories\Contracts\ScheduledSmsRepositoryInterface;

class ScheduledSmsRepository implements ScheduledSmsRepositoryInterface
{

    public $model;

    public function __construct(ScheduledSms $model)
    {
        $this->model = $model;
    }

    public function smsAnalytics()
    {
        $user = auth()->user();

        $units = (object)null;
        $units->icon = 'LayersIcon';
        $units->color = 'light-secondary';
        $units->title = $user->unit;
        $units->subtitle = 'Units';
        $units->customClass = '';

        $contacts = (object)null;
        $contacts->icon = 'UsersIcon';
        $contacts->color = 'light-primary';
        $contacts->title = Contact::where('user_id', $user->id)->count();
        $contacts->subtitle = 'Contacts';
        $contacts->customClass = 'mb-2 mb-xl-0';

        $sent = (object)null;
        $sent->icon = 'MailIcon';
        $sent->color = 'light-info';
        $sent->title = $this->model->where('scheduled_by', $user->id)->count();
        $sent->subtitle = 'Sent';
        $sent->customClass = 'mb-2 mb-xl-0';

        $delivered = (object)null;
        $delivered->icon = 'CheckCircleIcon';
        $delivered->color = 'light-success';
        $delivered->title = $this->model->where('status', 'DELIVRD')->where('scheduled_by', $user->id)->count();
        $delivered->subtitle = 'Delivered';
        $delivered->customClass = 'mb-2 mb-sm-0';

        $analytics = [$units, $contacts, $sent, $delivered];

        return response()->json([
            'result' => $analytics
        ], 200);
    }
}
