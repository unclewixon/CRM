<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Repositories\Contracts\EmailConfigurationRepositoryInterface;

class EmailConfigurationController extends Controller
{
    private $emailConfigurationRepository;

    public function __construct(EmailConfigurationRepositoryInterface $emailConfigurationRepository)
    {
        $this->emailConfigurationRepository = $emailConfigurationRepository;
        $this->middleware('auth:api');
    }

    /**
     * @OA\Get(
     *      path="/configurations",
     *      operationId="AllConfigurationSettings",
     *      tags={"Show All Configuration Settings"},
     *      description="Show All Configuration Settings",
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *          @OA\JsonContent(ref="#/components/schemas/EmailConfiguration")
     *       ),
     *      @OA\Response(
     *          response=404,
     *          description="Sorry no contact found",
     *      ),
     *     )
     */
    public function index()
    {
        $configuration = $this->emailConfigurationRepository->allConfiguration();
        return $configuration;
    }

    /**
     * @OA\Post(
     *      path="/configurations",
     *      operationId="CreateEmailConfiguration",
     *      tags={"Create Email Configuration Settings"},
     *      description="Create new email configuration settings",
     *     @OA\Parameter(
     *         name="driver",
     *         in="query",
     *         description="Enter email driver",
     *         required=true,
     *     ),
     *     @OA\Parameter(
     *         name="host",
     *         in="query",
     *         description="Enter email host",
     *         required=true,
     *     ),
     *    @OA\Parameter(
     *         name="port",
     *         in="query",
     *         description="Enter email port",
     *         required=true,
     *     ),
     *   @OA\Parameter(
     *         name="encryption",
     *         in="query",
     *         description="Enter email enycryption ",
     *         required=true,
     *     ),
     *   @OA\Parameter(
     *         name="user_name",
     *         in="query",
     *         description="Enter email user name",
     *         required=true,
     *     ),
     *    @OA\Parameter(
     *         name="password",
     *         in="query",
     *         description="Enter email password",
     *         required=true,
     *     ),
     *     @OA\Parameter(
     *         name="sender_name",
     *         in="query",
     *         description="Enter email sender name",
     *         required=true,
     *     ),
     *    @OA\Parameter(
     *         name="sender_email",
     *         in="query",
     *         description="Enter email sender email",
     *         required=true,
     *     ),
     *      @OA\Response(
     *          response=200,
     *          description="Configuration created successfully",
     *       ),
     *      @OA\Response(
     *          response=400,
     *          description="Sorry unable to create configuration",
     *      ),
     *      @OA\Response(
     *          response=422,
     *          description="Validation error",
     *      ),
     *     )
   */
    public function store(Request $request)
    {
        $configuration = $this->emailConfigurationRepository->createConfiguration($request);
        return $configuration;
    }

    
     /**
     * @OA\Get(
     *      path="/configurations/{id}",
     *      operationId="ShowConfiguration",
     *      tags={"Show Configuration"},
     *      description="Show configuration details",
     *     @OA\Parameter(
     *         name="id",
     *         in="query",
     *         description="Enter configuration id",
     *         required=true,
     *     ),
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *       ),
     *      @OA\Response(
     *          response=400,
     *          description="Sorry this data do not exist",
     *      ),
     *     )
    */
    public function show($id)
    {
        $configuration = $this->emailConfigurationRepository->showConfiguration($id);
        return $configuration;
    }

       /**
     * @OA\Post(
     *      path="/configurations/{id}",
     *      operationId="UpdateEmailConfiguration",
     *      tags={"Update Email Configuration Settings"},
     *      description="Update email configuration settings",
     *     @OA\Parameter(
     *         name="id",
     *         in="query",
     *         description="Enter configuration id",
     *         required=true,
     *     ),
     *     @OA\Parameter(
     *         name="driver",
     *         in="query",
     *         description="Enter email driver",
     *         required=true,
     *     ),
     *     @OA\Parameter(
     *         name="host",
     *         in="query",
     *         description="Enter email host",
     *         required=true,
     *     ),
     *    @OA\Parameter(
     *         name="port",
     *         in="query",
     *         description="Enter email port",
     *         required=true,
     *     ),
     *   @OA\Parameter(
     *         name="encryption",
     *         in="query",
     *         description="Enter email enycryption ",
     *         required=true,
     *     ),
     *   @OA\Parameter(
     *         name="user_name",
     *         in="query",
     *         description="Enter email user name",
     *         required=true,
     *     ),
     *    @OA\Parameter(
     *         name="password",
     *         in="query",
     *         description="Enter email password",
     *         required=true,
     *     ),
     *     @OA\Parameter(
     *         name="sender_name",
     *         in="query",
     *         description="Enter email sender name",
     *         required=true,
     *     ),
     *    @OA\Parameter(
     *         name="sender_email",
     *         in="query",
     *         description="Enter email sender email",
     *         required=true,
     *     ),
     *      @OA\Response(
     *          response=200,
     *          description="Configuration updated successfully",
     *       ),
     *      @OA\Response(
     *          response=400,
     *          description="Sorry unable to update configuration",
     *      ),
     *      @OA\Response(
     *          response=422,
     *          description="Validation error",
     *      ),
     *     )
   */
    public function update(Request $request, $id)
    {
        $configuration = $this->emailConfigurationRepository->updateConfiguration($request, $id);
        return $configuration;
    }

    /**
     * @OA\Delete(
     *      path="/configurations/{id}",
     *      operationId="delete",
     *      tags={"Delete Settings"},
     *      summary="Delete existing settings",
     *      description="Deletes configuration settings and returns no content",
     *      @OA\Parameter(
     *          name="id",
     *          description="Contact Id",
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
     *          description="Sorry this do not exist"
     *      ),
     *      @OA\Response(
     *          response=400,
     *          description="Sorry unable to delete settings"
     *      ),
     * )
   */
    public function destroy($id)
    {
        $configuration = $this->emailConfigurationRepository->deleteConfiguration($id);
        return $configuration;
    }
}
