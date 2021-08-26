<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Repositories\Contracts\EmailVerificationRepositoryInterface;

class EmailVerificationController extends Controller
{
    private $repository;

    public function __construct(EmailVerificationRepositoryInterface $repository)
    {
        $this->repository =  $repository;
    }

    //verify email
    public function verify(Request $request)
    {
        return $this->repository->verifyEmailAddress($request);
    }
}
