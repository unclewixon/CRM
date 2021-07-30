<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Repositories\Contracts\ResetPasswordRepositoryInterface;

class ResetPasswordController extends Controller
{
    public $resetPasswordRepository;

    public function __construct(ResetPasswordRepositoryInterface $resetPasswordRepository)
    {
        $this->resetPasswordRepository = $resetPasswordRepository;
    }

    /**
     * @OA\Post(
     *      path="/forgot-password",
     *      operationId="ForgotPassword",
     *      tags={"User Forgot Password"},
     *      description="User Forgot Password",
     *     @OA\Parameter(
     *         name="email",
     *         in="query",
     *         description="Users email address",
     *         required=true,
     *     ),
     *      @OA\Response(
     *          response=200,
     *          description="Successful",
     *       ),
     *      @OA\Response(
     *          response=422,
     *          description="Validation errors",
     *       ),
     *     )
   */
    public function send(Request $request)
    {
        return $this->resetPasswordRepository->sendPasswordResetLink($request);
    }

    /**
     * @OA\Post(
     *      path="/reset-password",
     *      operationId="ResetPassword",
     *      tags={"User Reset Forgot Password"},
     *      description="User Reset Forgot Password",
     *      @OA\Parameter(
     *         name="token",
     *         in="query",
     *         description="Token sent to users email",
     *         required=true,
     *     ),
     *     @OA\Parameter(
     *         name="email",
     *         in="query",
     *         description="Users email address",
     *         required=true,
     *     ),
     *    @OA\Parameter(
     *         name="password",
     *         in="query",
     *         description="New password",
     *         required=true,
     *     ),
     *     @OA\Parameter(
     *         name="password_confirmation",
     *         in="query",
     *         description="New password confirmation",
     *         required=true,
     *     ),
     *      @OA\Response(
     *          response=200,
     *          description="Successful",
     *       ),
     *     @OA\Response(
     *          response=422,
     *          description="Validation errors",
     *       ),
     *     )
   */
    public function reset(Request $request) 
    {
        return $this->resetPasswordRepository->resetPassword($request);
    }

}
