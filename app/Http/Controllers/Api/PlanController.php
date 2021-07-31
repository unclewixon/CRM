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

    /**
     * @OA\Get(
     *      path="/plans",
     *      operationId="AllPlans",
     *      tags={"Show All Plans"},
     *      description="Show all plans",
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *          @OA\JsonContent(ref="#/components/schemas/Plan")
     *       ),
     *      @OA\Response(
     *          response=404,
     *          description="Sorry no plan found",
     *      ),
     *     )
     */
    public function index()
    {
        $plans = $this->planRepository->allPlans();        ;
        return $plans;
    }

    /**
     * @OA\Post(
     *      path="/plans",
     *      operationId="CreatePlan",
     *      tags={"Create Plan"},
     *      description="Create new plan",
     *     @OA\Parameter(
     *         name="name",
     *         in="query",
     *         description="Enter plan name",
     *         required=true,
     *     ),
     *     @OA\Parameter(
     *         name="description",
     *         in="query",
     *         description="Enter plan description",
     *         required=true,
     *     ),
     *     @OA\Parameter(
     *         name="duration",
     *         in="query",
     *         description="Enter plan duration",
     *         required=true,
     *     ),
     *     @OA\Parameter(
     *         name="cost",
     *         in="query",
     *         description="Enter plan cost",
     *         required=true,
     *     ),
     *      @OA\Response(
     *          response=200,
     *          description="Plan created successfully",
     *       ),
     *      @OA\Response(
     *          response=400,
     *          description="Sorry unable to create plan",
     *      ),
     *      @OA\Response(
     *          response=422,
     *          description="Validation error",
     *      ),
     *     )
   */
    public function store(Request $request)
    {
        $plan = $this->planRepository->createPlan($request);
        return $plan;
    }

    /**
     * @OA\Get(
     *      path="/plans/{id}",
     *      operationId="ShowPlan",
     *      tags={"Show Plan"},
     *      description="Show single plan",
     *     @OA\Parameter(
     *         name="id",
     *         in="query",
     *         description="Enter plan id",
     *         required=true,
     *     ),
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *          @OA\JsonContent(ref="#/components/schemas/Plan")
     *       ),
     *      @OA\Response(
     *          response=400,
     *          description="Sorry this data do not exist",
     *      ),
     *     )
    */
    public function show($id)
    {
        $plan = $this->planRepository->showPlan($id);
        return $plan;
    }

    /**
      * @OA\Patch(
      *      path="/plans/{id}",
      *      operationId="UpdatePlan",
      *      tags={"Update Plan"},
      *      description="Update  plan",
      *     @OA\Parameter(
      *         name="name",
      *         in="query",
      *         description="Enter plan name",
      *     ),
      *     @OA\Parameter(
      *         name="description",
      *         in="query",
      *         description="Enter plan description",
      *     ),
      *     @OA\Parameter(
      *         name="duration",
      *         in="query",
      *         description="Enter plan duration",
      *     ),
      *     @OA\Parameter(
      *         name="cost",
      *         in="query",
      *         description="Enter plan cost",
      *     ),
      *      @OA\Response(
      *          response=200,
      *          description="Category updated successfully",
      *       ),
      *      @OA\Response(
      *          response=400,
      *          description="Sorry unable to update category",
      *      ),
      *      @OA\Response(
      *          response=404,
      *          description="Sorry this data do not exist",
      *      ),
      *      @OA\Response(
      *          response=422,
      *          description="Validation error",
      *      ),
      *     )
    */
    public function update(Request $request, $id)
    {
        $plan = $this->planRepository->updatePlan($request, $id);
        return $plan;
    }

    /**
     * @OA\Delete(
     *      path="/plans/{id}",
     *      operationId="deletePlan",
     *      tags={"Delete Plan"},
     *      summary="Delete existing plan",
     *      description="Deletes a plan and returns no content",
     *      @OA\Parameter(
     *          name="id",
     *          description="Plan Id",
     *          required=true,
     *          in="path",
     *          @OA\Schema(
     *              type="integer"
     *          )
     *      ),
     *      @OA\Response(
     *          response=204,
     *          description="Successful operation",
     *          @OA\JsonContent()
     *       ),
     *      @OA\Response(
     *          response=404,
     *          description="Sorry this plan do not exist"
     *      ),
     *      @OA\Response(
     *          response=400,
     *          description="Sorry unable to delete plan"
     *      ),
     * )
   */
    public function destroy($id)
    {
        $plan = $this->planRepository->deletePlan($id);
        return $plan;
    }

}
