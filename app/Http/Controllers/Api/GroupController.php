<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Repositories\Contracts\GroupRepositoryInterface;

class GroupController extends Controller
{
    private $groupRepository;

    public function __construct(GroupRepositoryInterface $groupRepository)
    {
        $this->groupRepository = $groupRepository;
        $this->middleware('auth:api');
    }

    /**
     * @OA\Get(
     *      path="/groups",
     *      operationId="AllGroups",
     *      tags={"Show All Groups"},
     *      description="Show all groups",
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *          @OA\JsonContent(ref="#/components/schemas/Group")
     *       ),
     *      @OA\Response(
     *          response=404,
     *          description="Sorry no group found",
     *      ),
     *     )
     */
    public function index()
    {
        $groups = $this->groupRepository->allGroups();        ;
        return $groups;
    }

    /**
     * @OA\Post(
     *      path="/groups",
     *      operationId="CreateGroup",
     *      tags={"Create Group"},
     *      description="Create new group",
     *     @OA\Parameter(
     *         name="name",
     *         in="query",
     *         description="Enter group name",
     *         required=true,
     *     ),
     *     @OA\Parameter(
     *         name="description",
     *         in="query",
     *         description="Enter group description",
     *         required=true,
     *     ),
     *      @OA\Response(
     *          response=200,
     *          description="Group created successfully",
     *       ),
     *      @OA\Response(
     *          response=400,
     *          description="Sorry unable to create group",
     *      ),
     *      @OA\Response(
     *          response=422,
     *          description="Validation error",
     *      ),
     *     )
   */
    public function store(Request $request)
    {
        $group = $this->groupRepository->createGroup($request);
        return $group;
    }

     /**
     * @OA\Get(
     *      path="/groups/{id}",
     *      operationId="ShowGroup",
     *      tags={"Show Group"},
     *      description="Show single group",
     *     @OA\Parameter(
     *         name="id",
     *         in="query",
     *         description="Enter group id",
     *         required=true,
     *     ),
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *          @OA\JsonContent(ref="#/components/schemas/Group")
     *       ),
     *      @OA\Response(
     *          response=400,
     *          description="Sorry this data do not exist",
     *      ),
     *     )
    */
    public function show($id)
    {
        $group = $this->groupRepository->showGroup($id);
        return $group;
    }


    /**
     * @OA\Patch(
     *      path="/groups/{id}",
     *      operationId="UpdateGroup",
     *      tags={"UpdateGroup"},
     *      description="Update existing group",
    *       @OA\Parameter(
     *         name="name",
     *         in="query",
     *         description="Enter group name",
     *         required=true,
     *     ),
     *     @OA\Parameter(
     *         name="description",
     *         in="query",
     *         description="Enter group description",
     *         required=true,
     *     ),
      *      @OA\Response(
      *          response=200,
      *          description="group updated successfully",
      *       ),
      *      @OA\Response(
      *          response=400,
      *          description="Sorry unable to update group",
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
        $group = $this->groupRepository->updateGroup($request, $id);
        return $group;
    }

    /**
     * @OA\Delete(
     *      path="/groups/{id}",
     *      operationId="deleteGroup",
     *      tags={"Delete Group"},
     *      summary="Delete existing group",
     *      description="Deletes a group and returns no content",
     *      @OA\Parameter(
     *          name="id",
     *          description="Group Id",
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
     *          description="Sorry this group do not exist"
     *      ),
     *      @OA\Response(
     *          response=400,
     *          description="Sorry unable to delete group"
     *      ),
     * )
   */
    public function destroy($id)
    {
        $group = $this->groupRepository->deleteGroup($id);
        return $group;
    }
}
