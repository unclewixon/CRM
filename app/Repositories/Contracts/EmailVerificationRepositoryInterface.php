<?php

namespace App\Repositories\Contracts;

interface EmailVerificationRepositoryInterface
{
    public function sendVerificatonLink($request);

    public function verifyEmailAddress($request);
}