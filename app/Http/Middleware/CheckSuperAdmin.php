<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Auth;

class CheckSuperAdmin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        $user_roles = Auth::user()->roles->pluck('name');
        if ($user_roles->contains('SuperAdmin')) {
           return $next($request);
       }else {
           return response()->json([
               'error' => 'Sorry you are not allowed to access this routes'
           ], 401);
       }
    }
}
