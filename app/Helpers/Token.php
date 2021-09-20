<?php

namespace App\Helpers;

use App\Models\Role;
use Illuminate\Support\Facades\DB;

class Token
{
    public function createNewToken($token)
    {
        $user = auth()->user();
        $user->role = $user->roles->pluck('name')[0];
        $user->ability = [
            ['action' => 'manage', 'subject' => 'all']
        ];

        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60,
            'user' => $user,
        ]);
    }
}
