<?php

namespace App\Repositories\Contracts;

use Illuminate\Http\Request;

interface GroupRepositoryInterface
{
    public function createGroup($request);

    public function allGroups(Request $request);

    public function showGroup($id);

    public function updateGroup($request, $id);

    public function deleteGroup($id);
}
