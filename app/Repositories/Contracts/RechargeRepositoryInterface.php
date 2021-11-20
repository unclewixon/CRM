<?php

namespace App\Repositories\Contracts;

use Illuminate\Http\Request;

interface RechargeRepositoryInterface
{
    public function rechargeAcct($request);

    public function rechargeHistory(Request $request);

    public function singleRechargeHistory($id);

    public function deleteRecharge($id);
}
