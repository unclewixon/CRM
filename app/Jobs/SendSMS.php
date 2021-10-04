<?php

namespace App\Jobs;

use App\Models\ScheduledSms;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Log;
use SMSGlobal\Credentials;
use SMSGlobal\Resource\Sms;

class SendSMS implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $userId;
    protected $contactId;
    protected $contactPhone;
    protected $message;
    protected $senderId;

    /**
     * Create a new job instance.
     *
     * @param $user_id
     * @param $contact_id
     * @param $contact_phone
     * @param $message
     */
    public function __construct($user_id, $contact_id, $contact_phone, $message, $sender_id)
    {
        $this->userId = $user_id;
        $this->contactId = $contact_id;
        $this->contactPhone = $contact_phone;
        $this->message = $message;
        $this->senderId = $sender_id;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        try {
            $schedule = ScheduledSms::create([
                'contact_id' => $this->contactId,
                'message' => $this->message,
                'scheduled_by' => $this->userId,
                'response' => json_encode([]),
            ]);

            Credentials::set(config('smsglobal.key_public'), config('smsglobal.key_secret'));
            $response = (new Sms)->sendToOne($this->contactPhone, $this->message, $this->senderId);

            $schedule->response = json_encode($response);
            $schedule->status = $response['messages'][0]['status'] ?? 'pending';
            $schedule->save();
        } catch (\Exception $e) {
            Log::error($e->getLine() . '-> ' . $e->getMessage());
        }
    }
}
