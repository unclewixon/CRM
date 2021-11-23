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

    //all groups
    public function index(Request $request)
    {
        $groups = $this->groupRepository->allGroups($request);        ;
        return $groups;
    }

    //create group
    public function store(Request $request)
    {
        $group = $this->groupRepository->createGroup($request);
        return $group;
    }

    //show group detials
    public function show($id)
    {
        $group = $this->groupRepository->showGroup($id);
        return $group;
    }

    //update group
    public function update(Request $request, $id)
    {
        $group = $this->groupRepository->updateGroup($request, $id);
        return $group;
    }

    //delete group
    public function destroy($id)
    {
        $group = $this->groupRepository->deleteGroup($id);
        return $group;
    }
}
