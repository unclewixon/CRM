<?php

namespace App\Repositories\Contracts;

interface EmailConfigurationRepositoryInterface
{
    public function createConfiguration($request);

    public function allConfiguration();

    public function showConfiguration($id);

    public function updateConfiguration($request, $id);

    public function deleteConfiguration($id);

}