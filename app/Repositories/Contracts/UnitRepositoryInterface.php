<?php

namespace App\Repositories\Contracts;

interface UnitRepositoryInterface
{
    public function createUnit($request);

    public function allUnits();

    public function showUnit($id);

    public function updateUnit($request, $id);

    public function deleteUnit($id);
}
