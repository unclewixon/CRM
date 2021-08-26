<?php

namespace App\Repositories;

use App\Repositories\Contracts\EmailVerificationRepositoryInterface;
use App\Models\VerificationToken;
use App\Models\User;
use \Carbon\Carbon;
use Illuminate\Support\Facades\Validator;

class EmailVerificationRepository implements EmailVerificationRepositoryInterface
{

    //vverify email
    public function verifyEmailAddress($request)
    {
        $validator =  Validator::make($request->all(),[
            "token"  =>  'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => $validator->errors()
            ], 422);
        }else {
           $token = VerificationToken::where('token', '=', $request->token)->first();
           if ($token) {
                $verify = User::where('email', '=', $token->email)->first();
                $ack = $verify->update([
                    'email_verified_at' => Carbon::now()
                ]);
                return response()->json([
                    'message' => 'Email have  been  verified'
                ], 200);
           }else {
            return response()->json([
                'message' => 'Token not found'
            ], 404);
           }
        }
    }
}
