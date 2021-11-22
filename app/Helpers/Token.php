<?php

namespace App\Helpers;

use App\Models\Role;
use App\Models\ServiceCharge;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class Token
{
    public function createNewToken($token)
    {
        $user = auth()->user();

        $month = Carbon::now()->shortMonthName;
        $year = Carbon::now()->year;

        $charge_unpaid = [];
        $service_charge_paid = ServiceCharge::where('user_id', $user->id)->where('month', $month)->where('year', $year)->where('status', 1)->first();
        if ($service_charge_paid == null) {
            $charge_unpaid[] = ['month' => Carbon::now()->format('M-Y')];
        }

        $user->role = $user->roles->pluck('name')[0];
        $user->charge_unpaid = $charge_unpaid;
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
