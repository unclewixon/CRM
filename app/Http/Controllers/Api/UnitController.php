<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Repositories\Contracts\UnitRepositoryInterface;

class UnitController extends Controller
{

    private $unitRepository;

    public function __construct(UnitRepositoryInterface $unitRepository)
    {
        $this->unitRepository = $unitRepository;
        $this->middleware('auth:api');
         $this->middleware('admin', ['except' => ['index', 'show']]);
    }

    /**
     * @OA\Get(
     *      path="/units",
     *      operationId="AllUnits",
     *      tags={"Show All Units"},
     *      description="Show all units",
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *          @OA\JsonContent(ref="#/components/schemas/Unit")
     *       ),
     *      @OA\Response(
     *          response=404,
     *          description="Sorry no unit price found",
     *      ),
     *     )
     */
    public function index()
    {
        $units = $this->unitRepository->allUnits();
        return $units;
    }

    /**
     * @OA\Post(
     *      path="/units",
     *      operationId="CreateUnit",
     *      tags={"Create unit"},
     *      description="Create new unit",
     *     @OA\Parameter(
     *         name="name",
     *         in="query",
     *         description="Enter unit name",
     *         required=true,
     *     ),
     *     @OA\Parameter(
     *         name="description",
     *         in="query",
     *         description="Enter unit description",
     *         required=true,
     *     ),
     *     @OA\Parameter(
     *         name="unit",
     *         in="query",
     *         description="Enter unit range",
     *         required=true,
     *     ),
     *     @OA\Parameter(
     *         name="cost_per_unit",
     *         in="query",
     *         description="Enter cost per unit",
     *         required=true,
     *     ),
     *      @OA\Response(
     *          response=200,
     *          description="Unit created successfully",
     *       ),
     *      @OA\Response(
     *          response=400,
     *          description="Sorry unable to create unit",
     *      ),
     *      @OA\Response(
     *          response=422,
     *          description="Validation error",
     *      ),
     *     )
   */
    public function store(Request $request)
    {
        $unit = $this->unitRepository->createUnit($request);
        return $unit;
    }

    /**
     * @OA\Get(
     *      path="/units/{id}",
     *      operationId="ShowUnit",
     *      tags={"Show Unit"},
     *      description="Show single unit details",
     *     @OA\Parameter(
     *         name="id",
     *         in="query",
     *         description="Enter unit id",
     *         required=true,
     *     ),
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *          @OA\JsonContent(ref="#/components/schemas/Unit")
     *       ),
     *      @OA\Response(
     *          response=400,
     *          description="Sorry this data do not exist",
     *      ),
     *     )
    */
    public function show($id)
    {
        $units = $this->unitRepository->showUnit($id);
        return $units;
    }

    /**
     * @OA\Patch(
     *      path="/units/{id}",
     *      operationId="UpdateUnit",
     *      tags={"Update unit"},
     *      description="Update existing unit",
     *     @OA\Parameter(
     *         name="name",
     *         in="query",
     *         description="Enter unit name",
     *         required=true,
     *     ),
     *     @OA\Parameter(
     *         name="description",
     *         in="query",
     *         description="Enter unit description",
     *         required=true,
     *     ),
     *     @OA\Parameter(
     *         name="unit",
     *         in="query",
     *         description="Enter unit range",
     *         required=true,
     *     ),
     *     @OA\Parameter(
     *         name="cost_per_unit",
     *         in="query",
     *         description="Enter cost per unit",
     *         required=true,
     *     ),
     *      @OA\Response(
     *          response=200,
     *          description="Unit updated successfully",
     *       ),
     *      @OA\Response(
     *          response=400,
     *          description="Sorry unable to update unit",
     *      ),
     *      @OA\Response(
     *          response=422,
     *          description="Validation error",
     *      ),
     *     )
   */
    public function update(Request $request, $id)
    {
        $units = $this->unitRepository->updateUnit($request, $id);
        return $units;
    }

    /**
     * @OA\Delete(
     *      path="/units/{id}",
     *      operationId="deleteUnit",
     *      tags={"Delete Unit"},
     *      summary="Delete existing unit",
     *      description="Deletes a unit and returns no content",
     *      @OA\Parameter(
     *          name="id",
     *          description="Unit Id",
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
     *          description="Sorry this unit do not exist"
     *      ),
     *      @OA\Response(
     *          response=400,
     *          description="Sorry unable to delete unit"
     *      ),
     * )
   */
    public function destroy($id)
    {
      $units = $this->unitRepository->deleteUnit($id);
      return $units;
    }
}
