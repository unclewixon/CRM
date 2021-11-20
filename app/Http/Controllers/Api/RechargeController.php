<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Repositories\Contracts\RechargeRepositoryInterface;

class RechargeController extends Controller
{
    private $rechargeRepository;

    public function __construct(RechargeRepositoryInterface $rechargeRepository)
    {
        $this->rechargeRepository = $rechargeRepository;
        $this->middleware('auth:api');
    }

    //my recharge units
    public function index(Request $request)
    {
        $recharges = $this->rechargeRepository->rechargeHistory($request);
        return $recharges;
    }

    //buy units
    public function store(Request $request)
    {
        $recharges = $this->rechargeRepository->rechargeAcct($request);
        return $recharges;
    }

    //show recharge details
    public function show($id)
    {
        $recharge = $this->rechargeRepository->singleRechargeHistory($id);
        return $recharge;
    }

    //delete history
    public function destroy($id)
    {
        $recharge = $this->rechargeRepository->deleteRecharge($id);
        return $recharge;
    }
}
