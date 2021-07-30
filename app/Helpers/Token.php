<?php 

namespace App\Helpers;

class Token
{
    public function createNewToken($token)
    {
         return response()->json([
             'access_token' => $token,
             'token_type' => 'bearer',
             'expires_in' => auth('api')->factory()->getTTL() * 60,
             'user' => auth()->user()
         ]);
     }
}