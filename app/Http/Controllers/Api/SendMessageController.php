<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Repositories\Contracts\SendMessageRepositoryInterface;

class SendMessageController extends Controller
{
    private $sendMessageRepository;

    public function __construct(SendMessageRepositoryInterface $sendMessageRepository)
    {
        $this->sendMessageRepository = $sendMessageRepository;
        $this->middleware('auth:api');
    }

    //send bulk sms
    public function sendBulk(Request $request)
    {
        $send_message = $this->sendMessageRepository->sendBulkSms($request);
        return $send_message;
    }

    //send single sms
    public function sendSingle(Request $request)
    {
        $send_message = $this->sendMessageRepository->sendSingleMessage($request);
        return $send_message;
    }

    //send sms to all contacts
    public function all(Request $request)
    {
        $send_message = $this->sendMessageRepository->sendMessageToAllContact($request);
        return $send_message;
    }

    //get delivery receipt
    public function deliveryReceipt(Request  $request)
    {
        $delivered = $this->sendMessageRepository->receipt($request);
        return $delivered;
    }
}
