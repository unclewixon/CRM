<?php

namespace App\Repositories\Contracts;

interface RechargeRepositoryInterface
{
    public function rechargeAcct($request);

    public function rechargeHistory();

    public function singelRechargeHistory($id);

    public function deleteRecharge($id);
}