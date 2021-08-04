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
     * @OA\Get(
     *      path="/recharges",
     *      operationId="AllReacharge",
     *      tags={"Show All Reacharge"},
     *      description="Show all reacharge",
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *          @OA\JsonContent(ref="#/components/schemas/Recharge")
     *       ),
     *      @OA\Response(
     *          response=404,
     *          description="Sorry no recharge found",
     *      ),
     *     )
     */
    public function index()
    {
        $recharges = $this->rechargeRepository->rechargeHistory();
        return $recharges;
    }
    
    /**
     * @OA\Post(
     *      path="/recharges",
     *      operationId="CreateRecharge",
     *      tags={"Create Recharge"},
     *      description="Create new Recharge",
     *     @OA\Parameter(
     *         name="unit_id",
     *         in="query",
     *         description="Enter the unit id",
     *         required=true,
     *     ),
     *     @OA\Parameter(
     *         name="number",
     *         in="query",
     *         description="Enter the number of unit",
     *         required=true,
     *     ),
     *      @OA\Response(
     *          response=200,
     *          description="Recharge successfully",
     *       ),
     *      @OA\Response(
     *          response=400,
     *          description="Sorry unable to Recharge",
     *      ),
     *      @OA\Response(
     *          response=422,
     *          description="Validation error",
     *      ),
     *     )
   */
    public function store(Request $request)
    {
        $recharges = $this->rechargeRepository->rechargeAcct($request);
        return $recharges;
    }

    /**
     * @OA\Get(
     *      path="/recharges/{id}",
     *      operationId="ShowRecharge",
     *      tags={"Show Recharge"},
     *      description="Show single Recharge",
     *     @OA\Parameter(
     *         name="id",
     *         in="query",
     *         description="Enter Recharge id",
     *         required=true,
     *     ),
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *       ),
     *      @OA\Response(
     *          response=400,
     *          description="Sorry this data do not exist",
     *      ),
     *     )
    */
    public function show($id)
    {
        $recharge = $this->rechargeRepository->singelRechargeHistory($id);
        return $recharge;
    }

    /**
     * @OA\Delete(
     *      path="/recharges/{id}",
     *      operationId="deleteRecharge",
     *      tags={"Delete Recharge"},
     *      summary="Delete existing Recharge",
     *      description="Deletes a Recharge and returns no content",
     *      @OA\Parameter(
     *          name="id",
     *          description="Recharge Id",
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
     *          description="Sorry this Recharge do not exist"
     *      ),
     *      @OA\Response(
     *          response=400,
     *          description="Sorry unable to delete Recharge"
     *      ),
     * )
    */
    public function destroy($id)
    {
        $recharge = $this->rechargeRepository->deleteRecharge($id);
        return $recharge;
    }
}
