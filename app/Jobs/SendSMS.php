<?php

namespace App\Jobs;

use App\Models\ScheduledSms;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Log;
use SMSGlobal\Resource\Sms;

class SendSMS implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $contact;
    protected $message;
    protected $sms;

    /**
     * Create a new job instance.
     *
     * @param $contact
     * @param $message
     */
    public function __construct($contact, $message)
    {
        $this->contact = $contact;
        $this->message = $message;

        $this->sms = new Sms();
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        try {
            $response = $this->sms->sendToOne($this->contact->phone_number, $this->message, auth()->user()->organization_name);

            ScheduledSms::create([
                'contact_id' => $this->contact->id,
                'message' => $this->message,
                'scheduled_by' => auth()->user()->id,
                'response' => $response,
            ]);
        } catch (\Exception $e) {
            Log::error($e->getMessage());
        }
    }
}
