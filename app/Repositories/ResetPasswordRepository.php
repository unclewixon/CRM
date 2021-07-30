<?php 

namespace App\Repositories;

use App\Repositories\Contracts\ResetPasswordRepositoryInterface;
use Illuminate\Support\Facades\Password;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Validator;

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
                'message' => $validator->errors()
            ], 422);

        }else {

            $status = Password::sendResetLink(
                $request->only('email')
            );
        
            return $status === Password::RESET_LINK_SENT
                ? back()->with(['status' => __($status)])
                : back()->withErrors(['email' => __($status)]);
        }
    }

    //reset users password
    public function resetPassword($request)
    {
        $validator =  Validator::make($request->all(),[
            'token' => 'required',
            'email' => 'required|email',
            'password' => 'required|min:8|confirmed',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'message' => $validator->errors()
            ], 422);

        }else {
            $status = Password::reset(
                $request->only('email', 'password', 'password_confirmation', 'token'),
                function ($user, $password) {
                    $user->forceFill([
                        'password' => bcrypt($password)
                    ])->setRememberToken(Str::random(60));
        
                    $user->save();
        
                    event(new PasswordReset($user));
                }
            );
        
            return $status === Password::PASSWORD_RESET
                    ? back()->with(['status' => __($status)])
                    : back()->withErrors(['email' => __($status)]);
        }
    }
}