<?php

namespace App\Repositories\Contracts;

interface GroupRepositoryInterface
{
    public function createGroup($request);

    public function allGroups();

    public function showGroup($id);

    public function updateGroup($request, $id);

    public function deleteGroup($id);
}
