<?php

namespace App\Repositories;

use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Password;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Support\Facades\Validator;
use App\Repositories\Contracts\ResetPasswordRepositoryInterface;

class ResetPasswordRepository implements ResetPasswordRepositoryInterface
{
    //send password reset link
    public function sendPasswordResetLink($request)
    {
        $validator =  Validator::make($request->all(),[
            'email' => 'required|email'
        ]);
        if ($validator->fails()) {
            return response()->json([
                'message' => $validator->errors(),
                'success' => false
            ], 422);

        }else {

            $email_check = User::where('email', '=', $request->email)->first();
            if ($email_check) {
                $status = Password::sendResetLink(
                    $request->only('email')
                );
                if ($status) {
                    return response()->json([
                        'message' => 'Email link sent successfully',
                        'success' => true
                    ], 200);
                }
            }else {
                return response()->json([
                        'message' => 'Sorry this email do not exist in our system',
                        'success' => false
                ], 404);
            }
        }
    }

    //reset users password
    public function resetPassword($request)
    {
        $validator =  Validator::make($request->all(),[
            'token' => 'required',
            'password' => 'required|min:8|confirmed',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'message' => $validator->errors(),
                'success' => false
            ], 422);

        }else {
            $status = Password::reset(
                $request->only('password', 'password_confirmation', 'token'),
                function ($user, $password) {
                    $user->forceFill([
                        'password' => bcrypt($password)
                    ])->setRememberToken(Str::random(60));

                    $user->save();

                    event(new PasswordReset($user));
                }
            );

            if ($status) {
                return response()->json([
                    'message' => 'Password reset successfully',
                    'success' => true
                ], 200);
            }
        }
    }
}
