<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Repositories\Contracts\AuthRepositoryInterface;
use Illuminate\Foundation\Auth\EmailVerificationRequest;

class AuthController extends Controller
{
    private $authRepository;

    public function __construct(AuthRepositoryInterface $authRepository)
    {
        $this->middleware('auth:api', ['except' => ['login','createUser']]);
        $this->authRepository = $authRepository;
    }

    //login
    public function login(Request $request)
    {
        return $this->authRepository->login($request);
    }

    //logout
    public function logout(Request $request)
    {
        return $this->authRepository->logout($request);
    }

    //refresh token
    public function refresh()
    {
        return $this->authRepository->refresh();
    }

    //user profile
    public function userProfile()
    {
        return $this->authRepository->userProfile();
    }

    //create user account
    public function createUser(Request $request)
    {
        return $this->authRepository->createUser($request);
    }

    //update user account
    public function updateUserAcount(Request  $request, $id)
    {
        return $this->authRepository->updateUserAcount($request, $id);
    }

    //change password
    public function changePassword(Request $request, $id)
    {
       return $this->authRepository->changePassword($request, $id);
    }

    //delete account
    public function delete($id)
    {
        return $this->authRepository->delete($id);
    }

}
