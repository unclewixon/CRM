<?php

namespace App\Repositories;

use App\Repositories\Contracts\EmailVerificationRepositoryInterface;

class EmailVerificationRepository implements EmailVerificationRepositoryInterface
{
    public function sendVerificatonLink($request)
    {
       return  $request->user()->sendEmailVerificationNotification();
    }

    public function verifyEmailAddress($request) 
    {
        $verifed = $request->fulfill();
        return response()->json([
            'message' => 'Email have  been  verified'
        ], 200);
    }
}