<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Repositories\Contracts\EmailVerificationRepositoryInterface;
use Illuminate\Foundation\Auth\EmailVerificationRequest;

class EmailVerificationController extends Controller
{
    private $repository;

    public function __construct(EmailVerificationRepositoryInterface $repository)
    {
        $this->repository =  $repository;
    }

    /**
     * @OA\Post(
     *      path="/email-verification-notification",
     *      operationId="ForgotPassword",
     *      tags={"User Forgot Password"},
     *      description="User Forgot Password",
     *      @OA\Parameter(
     *         name="token",
     *         in="query",
     *         description="User token",
     *         required=true,
     *     ),
     *     @OA\Response(
     *          response=200,
     *          description="Successful",
     *     ),
     *    )
   */
    public function send(Request $request)
    {
        return $this->repository->sendVerificatonLink($request);
    }

    /**
     * @OA\Get(
     *      path="/email/verify/{id}/{hash}",
     *      operationId="ForgotPassword",
     *      tags={"User Forgot Password"},
     *      description="User Forgot Password",
     *     @OA\Parameter(
     *         name="token",
     *         in="query",
     *         description="User token",
     *         required=true,
     *     ),
     *      @OA\Response(
     *          response=200,
     *          description="Successful",
     *       ),
     *     )
   */
    public function verify(EmailVerificationRequest $request)
    {
        return $this->repository->verifyEmailAddress($request);
    }
}
