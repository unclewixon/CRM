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

    //send password reset link
    public function send(Request $request)
    {
        return $this->resetPasswordRepository->sendPasswordResetLink($request);
    }

    //reset password
    public function reset(Request $request)
    {
        return $this->resetPasswordRepository->resetPassword($request);
    }

}
