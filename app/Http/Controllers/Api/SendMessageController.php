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

    /**
     * @OA\Post(
     *      path="/send-bulk-message",
     *      operationId="SendSMS in bulk",
     *      tags={"Send SMS"},
     *      description="Send sms in batch",
     *     @OA\Parameter(
     *         name="group_id",
     *         in="query",
     *         description="Enter group id",
     *         required=true,
     *     ),
     *   @OA\Parameter(
     *         name="message",
     *         in="query",
     *         description="Enter message body",
     *         required=true,
     *     ),
     *    @OA\Parameter(
     *         name="pages",
     *         in="query",
     *         description="number of pages",
     *         required=true,
     *     ),
     *      @OA\Response(
     *          response=200,
     *          description="Message sent successfully",
     *       ),
     *      @OA\Response(
     *          response=400,
     *          description="Sorry unable to send message",
     *      ),
     *      @OA\Response(
     *          response=422,
     *          description="Validation error",
     *      ),
     *     )
   */
    public function sendBulk(Request $request)
    {
        $send_message = $this->sendMessageRepository->sendBulkSms($request);
        return $send_message;
    }

    /**
     * @OA\Post(
     *      path="/send-single-message",
     *      operationId="SendMessag",
     *      tags={"Send Message"},
     *      description="Send sms",
     *     @OA\Parameter(
     *         name="contact_id",
     *         in="query",
     *         description="Enter contact id",
     *         required=true,
     *     ),
     *   @OA\Parameter(
     *         name="message",
     *         in="query",
     *         description="Enter email body",
     *         required=true,
     *     ),
     *    @OA\Parameter(
     *         name="pages",
     *         in="query",
     *         description="number of pages",
     *         required=true,
     *     ),
     *      @OA\Response(
     *          response=200,
     *          description="Message sent successfully",
     *       ),
     *      @OA\Response(
     *          response=400,
     *          description="Sorry unable to send message",
     *      ),
     *      @OA\Response(
     *          response=422,
     *          description="Validation error",
     *      ),
     *     )
   */
    public function sendSingle(Request $request)
    {
        $send_message = $this->sendMessageRepository->sendSingleMessage($request);
        return $send_message;
    }

    /**
     * @OA\Post(
     *      path="/message-contacts",
     *      operationId="SendSMS in bulk to all contacts",
     *      tags={"Send SMS"},
     *      description="Send sms in bulk to all contacts",
     *   @OA\Parameter(
     *         name="message",
     *         in="query",
     *         description="Enter message body",
     *         required=true,
     *     ),
     *     @OA\Parameter(
     *         name="pages",
     *         in="query",
     *         description="number of pages",
     *         required=true,
     *     ),
     *      @OA\Response(
     *          response=200,
     *          description="Message sent successfully",
     *       ),
     *      @OA\Response(
     *          response=400,
     *          description="Sorry unable to send message",
     *      ),
     *      @OA\Response(
     *          response=422,
     *          description="Validation error",
     *      ),
     *     )
   */
    public function all(Request $request)
    {
        $send_message = $this->sendMessageRepository->sendMessageToAllContact($request);
        return $send_message;
    }
}
