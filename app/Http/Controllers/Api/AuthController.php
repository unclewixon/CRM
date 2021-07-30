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

    /**
   * @OA\Post(
   *      path="/login",
   *      operationId="UsersLogin",
   *      tags={"Login User"},
   *      description="Users login method",
   *     @OA\Parameter(
   *         name="email",
   *         in="query",
   *         description="Users email address",
   *         required=true,
   *     ),
   *     @OA\Parameter(
   *         name="password",
   *         in="query",
   *         description="Users password",
   *         required=true,
   *     ),
   *      @OA\Response(
   *          response=200,
   *          description="Successful",
   *       ),
   *      @OA\Response(
   *          response=401,
   *          description="Unauthorized",
   *      ),
   *     )
   */
    public function login(Request $request)
    {
        return $this->authRepository->login($request);
    }

  /**
   * @OA\Post(
   *      path="/logout",
   *      operationId="LogoutUsers",
   *      tags={"Logout User"},
   *      summary="Logout users",
   *      description="Logout users from the system",
   *     @OA\Parameter(
   *         name="token",
   *         in="query",
   *         description="Authenticate users token",
   *         required=true,
   *     ),
   *      @OA\Response(
   *          response=200,
   *          description="User logged out successfully",
   *       ),
   *      @OA\Response(
   *          response=500,
   *          description="Failed to logout, please try again.",
   *       )
   *     )
   */
    public function logout(Request $request)
    {
        return $this->authRepository->logout($request);
    }

    /**
     * @OA\Post(
     *      path="/refresh",
     *      operationId="refreshToken",
     *      tags={"Refresh User Token"},
     *      summary="Refresh Token",
     *      description="Create new token for and returns the token",
     *      @OA\Response(
     *          response=200,
     *          description="New Token",
     *       ),
     *     )
     */
    public function refresh()
    {
        return $this->authRepository->refresh();
    }

    /**
    * @OA\Get(
    *      path="/user-profile",
    *      operationId="Authenticated Users Profile",
    *      tags={"View User Profile"},
    *      summary="Get auth users profile",
    *      description="Returns the authenticated users profile",
    *      @OA\Response(
    *          response=200,
    *          description="User"
    *       ),
    *     )
    */
    public function userProfile()
    {
        return $this->authRepository->userProfile();
    }

    /**
     * @OA\Post(
     *      path="/create-account",
     *      operationId="CreateUser",
     *      tags={"Create User Account"},
     *      summary="Create User Account",
     *      description="Create new users account",
     *      @OA\Parameter(
     *         name="name",
     *         in="query",
     *         description="Users fullname",
     *         required=true,
     *     ),
     *      @OA\Parameter(
     *         name="email",
     *         in="query",
     *         description="Users email address",
     *         required=true,
     *     ),
     *     @OA\Parameter(
     *         name="phone",
     *         in="query",
     *         description="Users phone number",
     *         required=true,
     *     ),
     *    @OA\Parameter(
     *         name="organization_name",
     *         in="query",
     *         description="Enter organization name",
     *         required=true,
     *     ),
     *    @OA\Parameter(
     *         name="office_address",
     *         in="query",
     *         description="Enter office address",
     *         required=true,
     *     ),
     *     @OA\Parameter(
     *         name="password",
     *         in="query",
     *         description="Users password",
     *         required=true,
     *     ),
     *     @OA\Parameter(
     *         name="password_confirmation",
     *         in="query",
     *         description="Users password confirmation",
     *     ),
     *      @OA\Response(
     *          response=200,
     *          description="Account created successfully",
     *       ),
     *      @OA\Response(
     *          response=400,
     *          description="Sorry unable to create accounnt",
     *      ),
     *      @OA\Response(
     *          response=422,
     *          description="Validation error occured",
     *      ),
     *     )
     */
    public function createUser(Request $request)
    {
        return $this->authRepository->createUser($request);
    }

    /**
     * @OA\Patch(
     *      path="/update-profile/{id}",
     *      operationId="UpdateUser",
     *      tags={"Update User Account"},
     *      summary="Update Users Account",
     *      description="Update existing users account",
     *      @OA\Parameter(
     *         name="name",
     *         in="query",
     *         description="Users fullname",
     *     ),
     *     @OA\Parameter(
     *         name="phone",
     *         in="query",
     *         description="Users phone number",
     *     ),
     *     @OA\Parameter(
     *         name="organization_name",
     *         in="query",
     *         description="Enter organization name",
     *     ),
     *     @OA\Parameter(
     *         name="office_address",
     *         in="query",
     *         description="Enter office address",
     *     ),
     *     @OA\Response(
     *          response=200,
     *          description="Profile updated successfully",
     *      ),
     *      @OA\Response(
     *          response=400,
     *          description="Sorry unable to update profile",
     *      ),
     *      @OA\Response(
     *          response=404,
     *          description="Sorry this data do not exist",
     *      ),
     *      @OA\Response(
     *          response=422,
     *          description="Validation error occured",
     *      ),
     *     )
     */
    public function updateUserAcount(Request  $request, $id)
    {
        return $this->authRepository->updateUserAcount($request, $id);
    }

    /**
     * @OA\Patch(
     *      path="/reset-password/{id}",
     *      operationId="ResetPassword",
     *      tags={"Reset User Password"},
     *      summary="Reset users password",
     *      description="Reset users account password",
     *      @OA\Parameter(
     *         name="old_password",
     *         in="query",
     *         description="Enter old password",
     *         required=true,
     *     ),
     *      @OA\Parameter(
     *         name="password",
     *         in="query",
     *         description="Enter new password for users account",
     *         required=true,
     *     ),
     *     @OA\Parameter(
     *         name="password_confirmation",
     *         in="query",
     *         description="Enter password confrimation for users account",
     *         required=true,
     *     ),
     *      @OA\Response(
     *          response=200,
     *          description="User password reset successful",
     *       ),
     *      @OA\Response(
     *          response=400,
     *          description="Sorry the password reset process failed",
     *      ),
     *      @OA\Response(
     *          response=422,
     *          description="Validation error occured",
     *      ),
     *      @OA\Response(
     *          response=404,
     *          description="Sorry this user do not exist",
     *      ),
     *      @OA\Response(
     *          response=401,
     *          description="Sorry new password can not be the old password!",
     *      ),
     *      @OA\Response(
     *          response=402,
     *          description="Sorry old password doesnt matched",
     *      ),
     *     )
     */
    public function resetPassword(Request $request, $id)
    {
       return $this->authRepository->updateUserAcount($request, $id);
    }

    /**
     * @OA\Delete(
     *      path="/delete-user/{id}",
     *      operationId="Delete",
     *      tags={"Delete Users Account"},
     *      summary="Delete user account",
     *      description="Delete users account form the system",
     *     @OA\Parameter(
     *         name="id",
     *         in="query",
     *         description="Enter users id to add image",
     *         required=true,
     *     ),
     *      @OA\Response(
     *          response=200,
     *          description="User deleted successfully",
     *       ),
     *      @OA\Response(
     *          response=400,
     *          description="Sorry unable to delete user",
     *      ),
     *      @OA\Response(
     *          response=404,
     *          description="Sorry this user do not exist",
     *      ),
     *     )
    */
    public function delete($id)
    {
        return $this->authRepository->delete($id);
    }

}
