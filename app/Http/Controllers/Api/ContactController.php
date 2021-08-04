<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Repositories\Contracts\ContactRepositoryInterface;

class ContactController extends Controller
{
    private $contactRepository;

    public function __construct(ContactRepositoryInterface $contactRepository)
    {
        $this->contactRepository = $contactRepository;
        $this->middleware('auth:api');
    }

     /**
     * @OA\Get(
     *      path="/contacts",
     *      operationId="AllContacts",
     *      tags={"Show All Contacts"},
     *      description="Show all contacts",
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *          @OA\JsonContent(ref="#/components/schemas/Contact")
     *       ),
     *      @OA\Response(
     *          response=404,
     *          description="Sorry no contact found",
     *      ),
     *     )
     */
    public function index()
    {
        $contacts = $this->contactRepository->allContacts();
        return $contacts;
    }

      /**
     * @OA\Post(
     *      path="/contacts",
     *      operationId="CreateContact",
     *      tags={"Create Contact"},
     *      description="Create new contact",
     *     @OA\Parameter(
     *         name="sur_name",
     *         in="query",
     *         description="Enter sur name of the contact person",
     *         required=true,
     *     ),
     *     @OA\Parameter(
     *         name="first_name",
     *         in="query",
     *         description="Enter first name of the contact person",
     *         required=true,
     *     ),
     *    @OA\Parameter(
     *         name="email",
     *         in="query",
     *         description="Enter email address of the contact person",
     *         required=true,
     *     ),
     *   @OA\Parameter(
     *         name="scheme",
     *         in="query",
     *         description="Enter scheme of the contact person",
     *         required=true,
     *     ),
     *   @OA\Parameter(
     *         name="gender",
     *         in="query",
     *         description="Enter gender of the contact person",
     *         required=true,
     *     ),
     *    @OA\Parameter(
     *         name="dob",
     *         in="query",
     *         description="Enter date of birth of the contact person",
     *         required=true,
     *     ),
     *      @OA\Response(
     *          response=200,
     *          description="Contact created successfully",
     *       ),
     *      @OA\Response(
     *          response=400,
     *          description="Sorry unable to create contact",
     *      ),
     *      @OA\Response(
     *          response=422,
     *          description="Validation error",
     *      ),
     *     )
   */
    public function store(Request $request)
    {
        $contact = $this->contactRepository->createContact($request);
        return $contact;
    }


       /**
     * @OA\Post(
     *      path="/contacts-batch",
     *      operationId="UploadBatchContacts",
     *      tags={"UploadContact"},
     *      description="Upload batch contacts",
     *     @OA\Parameter(
     *         name="file",
     *         in="query",
     *         description="Csv file is required",
     *         required=true,
     *     ),
     *      @OA\Response(
     *          response=200,
     *          description="Contacts uploaded successfully",
     *       ),
     *      @OA\Response(
     *          response=400,
     *          description="Sorry unable to create contact",
     *      ),
     *      @OA\Response(
     *          response=422,
     *          description="Validation error",
     *      ),
     *     )
   */
    public function storeBatch(Request $request)
    {
        $contact = $this->contactRepository->batchContactUpload($request);
        return $contact;
    }

    /**
     * @OA\Get(
     *      path="/contacts/{id}",
     *      operationId="ShowContact",
     *      tags={"Show Contact"},
     *      description="Show single contact",
     *     @OA\Parameter(
     *         name="id",
     *         in="query",
     *         description="Enter contact id",
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
        $contact = $this->contactRepository->showContact($id);
        return $contact;
    }

     /**
     * @OA\Patch(
     *      path="/contacts/{id}",
     *      operationId="UpdateContacts",
     *      tags={"Update Contacts"},
     *      @OA\Parameter(
     *         name="sur_name",
     *         in="query",
     *         description="Enter sur name of the contact person",
     *         required=true,
     *     ),
     *     @OA\Parameter(
     *         name="first_name",
     *         in="query",
     *         description="Enter first name of the contact person",
     *         required=true,
     *     ),
     *    @OA\Parameter(
     *         name="email",
     *         in="query",
     *         description="Enter email address of the contact person",
     *         required=true,
     *     ),
     *   @OA\Parameter(
     *         name="scheme",
     *         in="query",
     *         description="Enter scheme of the contact person",
     *         required=true,
     *     ),
     *   @OA\Parameter(
     *         name="gender",
     *         in="query",
     *         description="Enter gender of the contact person",
     *         required=true,
     *     ),
     *    @OA\Parameter(
     *         name="dob",
     *         in="query",
     *         description="Enter date of birth of the contact person",
     *         required=true,
     *     ),
      *      @OA\Response(
      *          response=200,
      *          description="Contact updated successfully",
      *       ),
      *      @OA\Response(
      *          response=400,
      *          description="Sorry unable to update contact",
      *      ),
      *      @OA\Response(
      *          response=404,
      *          description="Sorry this data do not exist",
      *      ),
      *      @OA\Response(
      *          response=422,
      *          description="Validation error",
      *      ),
      *     )
    */
    public function update(Request $request, $id)
    {
        $contact = $this->contactRepository->updateContact($request, $id);
        return $contact;
    }

   /**
     * @OA\Delete(
     *      path="/contacts/{id}",
     *      operationId="deleteContact",
     *      tags={"Delete Contact"},
     *      summary="Delete existing contact",
     *      description="Deletes a contact and returns no content",
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
     *          description="Sorry this contact do not exist"
     *      ),
     *      @OA\Response(
     *          response=400,
     *          description="Sorry unable to delete contact"
     *      ),
     * )
   */
    public function destroy($id)
    {
        $contact = $this->contactRepository->deleteContact($id);
        return $contact;
    }
}
