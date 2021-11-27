<?php

namespace App\Repositories;

use Auth;
use JWTAuth;
use App\Actions\UserAction;
use Illuminate\Support\Facades\Validator;
use App\Repositories\Contracts\AuthRepositoryInterface;
use App\Helpers\Token;

class AuthRepository implements AuthRepositoryInterface
{
    private $action;
    public $token_helper;

    public function __construct(UserAction $action, Token $token_helper)
    {
        $this->action = $action;
        $this->token_helper = $token_helper;
    }

    public function createUser($request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|unique:users',
            'email' => 'required|email|unique:users',
            'phone' => 'required|unique:users',
            'organization_name' => 'required',
            'sender_id' => 'required',
            'office_address' => 'required',
            'password' => 'required|confirmed'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => $validator->errors(),
                'success' => false
            ], 422);
        } else {
            return $this->action->create($request);
        }
    }

    //login user
    public function login($request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => $validator->errors(),
                'success' => false
            ], 422);
        } else {
            if (!$token = auth()->attempt($validator->validated())) {
                return response()->json([
                    'error' => 'Unauthorized',
                    'success' => false
                ], 401);
            }
            if (auth()->user()->email_verified_at == null) {
                return response()->json([
                    'error' => 'Email must be verified',
                    'success' => false
                ], 401);

            } else {
                $token = $this->token_helper->createNewToken($token);
                if ($token) {
                    return response()->json([
                        'token' => $token
                    ], 200);
                }

                return response()->json([
                    'error' => 'Authentication failed',
                    'success' => false
                ], 401);
            }
        }
    }

    //logout user
    public function logout($request)
    {
        $validator = Validator::make($request->all(), [
            'token' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'message' => $validator->errors(),
                'success' => false
            ], 422);
        } else {
            try {
                JWTAuth::invalidate($request->token);
                return response()->json([
                    'message' => 'User logged out successfully.',
                    'success' => true
                ], 200);
            } catch (JWTException $e) {
                return response()->json([
                    'message' => 'Failed to logout, please try again.',
                    'success' => false
                ], 500);
            }
        }
    }

    //refresh users token
    public function refresh()
    {
        return $this->token_helper->createNewToken(auth()->refresh());
    }

    //users profile
    public function userProfile()
    {
        return $this->action->authUser();
    }

    public function updateUserAcount($request, $id)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'phone' => 'sometimes',
            'organization_name' => 'sometimes',
            'sender_id' => 'required',
            'office_address' => 'sometimes'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => $validator->errors(),
                'success' => false
            ], 422);
        } else {
            return $this->action->update($request, $id);
        }
    }


    //update user password
    public function changePassword($request, $id)
    {
        $validator = Validator::make($request->all(), [
            'old_password' => 'required',
            'password' => 'required|confirmed'
        ]);
        if ($validator->fails()) {
            return response()->json([
                'message' => $validator->errors(),
                'success' => false
            ], 422);
        } else {
            return $this->action->password($request);
        }
    }

}
