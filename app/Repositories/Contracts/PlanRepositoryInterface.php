<?php

namespace App\Repositories\Contracts;

interface PlanRepositoryInterface 
{
    public function createPlan($request);

    public function allPlans();

    public function showPlan($id);

    public function updatePlan($request, $id);

    public function deletePlan($id);
}