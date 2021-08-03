<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Repositories\Contracts\SendEmailRepositoryInterface;

class SendEmailController extends Controller
{
    private $sendEmailRepository;

    public function __construct(SendEmailRepositoryInterface $sendEmailRepository)
    {
        $this->sendEmailRepository = $sendEmailRepository;
        $this->middleware('auth:api');
    }

      /**
     * @OA\Post(
     *      path="/send-bulk-email",
     *      operationId="SendEmail in bulk",
     *      tags={"Send Email"},
     *      description="Send email in batch",
     *     @OA\Parameter(
     *         name="group_id",
     *         in="query",
     *         description="Enter group id",
     *         required=true,
     *     ),
     *   @OA\Parameter(
     *         name="title",
     *         in="query",
     *         description="Enter email title",
     *         required=true,
     *     ),
     *   @OA\Parameter(
     *         name="body",
     *         in="query",
     *         description="Enter email body",
     *         required=true,
     *     ),
     *      @OA\Response(
     *          response=200,
     *          description="Email sent successfully",
     *       ),
     *      @OA\Response(
     *          response=400,
     *          description="Sorry unable to send email",
     *      ),
     *      @OA\Response(
     *          response=422,
     *          description="Validation error",
     *      ),
     *     )
   */
    public function sendBulk(Request $request)
    {
        $send_email = $this->sendEmailRepository->sendBulkEmail($request);
        return $send_email;
    }

}
