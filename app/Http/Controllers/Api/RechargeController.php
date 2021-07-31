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

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $recharges = $this->rechargeRepository->rechargeHistory();        ;
        return $recharges;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $recharges = $this->rechargeRepository->rechargeAcct($request);        ;
        return $recharges;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $recharge = $this->rechargeRepository->singelRechargeHistory($id);        ;
        return $recharge;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $recharge = $this->rechargeRepository->deleteRecharge($id);        ;
        return $recharge;
    }
}
