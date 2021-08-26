<?php

namespace App\Repositories\Contracts;

interface EmailVerificationRepositoryInterface
{

    public function verifyEmailAddress($request);
}