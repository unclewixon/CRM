<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Repositories\Contracts\PlanRepositoryInterface;

class PlanController extends Controller
{
    private $planRepository;

    public function __construct(PlanRepositoryInterface $planRepository)
    {
        $this->planRepository = $planRepository;
        $this->middleware('auth:api',['except' => ['index','show']]);
        $this->middleware('admin', ['except' => ['index', 'show']]);
    }

    //all plans
    public function index()
    {
        $plans = $this->planRepository->allPlans();        ;
        return $plans;
    }

    //create plan
    public function store(Request $request)
    {
        $plan = $this->planRepository->createPlan($request);
        return $plan;
    }

    //show plan details
    public function show($id)
    {
        $plan = $this->planRepository->showPlan($id);
        return $plan;
    }

    //update plan
    public function update(Request $request, $id)
    {
        $plan = $this->planRepository->updatePlan($request, $id);
        return $plan;
    }

    //delete plan
    public function destroy($id)
    {
        $plan = $this->planRepository->deletePlan($id);
        return $plan;
    }

}
