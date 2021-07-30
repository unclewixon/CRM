<?php 

namespace App\Repositories\Contracts;

interface ResetPasswordRepositoryInterface
{
    public function sendPasswordResetLink($request);

    public function resetPassword($request);
}