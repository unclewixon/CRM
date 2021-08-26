<?php

namespace App\Repositories\Contracts;

interface AuthRepositoryInterface
{
    public function login($request);

    public function logout($request);

    public function refresh();

    public function userProfile();

    public function createUser($request);

    public function updateUserAcount($request, $id);

    public function changePassword($request, $id);


}

