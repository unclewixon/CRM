<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Repositories\Contracts\ContactRepositoryInterface;

class ContactGroupController extends Controller
{
    private $contactGroupRepository;

    public function __construct(ContactRepositoryInterface $contactGroupRepository)
    {
        $this->contactGroupRepository = $contactGroupRepository;
        $this->middleware('auth:api');
    }

     /**
     * @OA\Post(
     *      path="/add-contacts",
     *      operationId="AddContactToGroup",
     *      tags={"Add Contact to Groups"},
     *      description="Add Contact to Groups",
     *     @OA\Parameter(
     *         name="group_id",
     *         in="query",
     *         description="Enter the group id",
     *         required=true,
     *     ),
     *     @OA\Parameter(
     *         name="contacts_id",
     *         in="query",
     *         description="Enter contacts id in array format",
     *         required=true,
     *     ),
     *      @OA\Response(
     *          response=200,
     *          description="Contacts add to group successfully",
     *       ),
     *      @OA\Response(
     *          response=422,
     *          description="Validation error",
     *      ),
     *     )
   */
    public function addContactM(Request $request)
    {
        $contact = $this->contactGroupRepository->addContactsToGrouop($request);
        return $contact;
    }

     /**
     * @OA\Delete(
     *      path="/remove-contacts",
     *      operationId="RemoveContactsToGroup",
     *      tags={"Romve Contacts to Groups"},
     *      description="Romve Contacts to Groups",
     *     @OA\Parameter(
     *         name="group_id",
     *         in="query",
     *         description="Enter the group id",
     *         required=true,
     *     ),
     *     @OA\Parameter(
     *         name="contacts_id",
     *         in="query",
     *         description="Enter contacts id in array format",
     *         required=true,
     *     ),
     *      @OA\Response(
     *          response=200,
     *          description="Contacts removed from group successfully",
     *       ),
     *      @OA\Response(
     *          response=422,
     *          description="Validation error",
     *      ),
     *     )
   */
    public function removeContactM(Request $request)
    {
        $contact = $this->contactGroupRepository->removeContactsFromGrouop($request);
        return $contact;
    }

     /**
     * @OA\Post(
     *      path="/add-single-contact",
     *      operationId="AddSingleContactGroup",
     *      tags={"Add Single Contact Group"},
     *      description="Add Single Contact Group",
     *     @OA\Parameter(
     *         name="group_id",
     *         in="query",
     *         description="Enter the group id",
     *         required=true,
     *     ),
     *     @OA\Parameter(
     *         name="contact_id",
     *         in="query",
     *         description="Enter contact id",
     *         required=true,
     *     ),
     *      @OA\Response(
     *          response=200,
     *          description="Contact add to group successfully",
     *       ),
     *      @OA\Response(
     *          response=422,
     *          description="Validation error",
     *      ),
     *     )
   */
    public function addSingleContact(Request $request)
    {
        $contact = $this->contactGroupRepository->addContactToGrouop($request);
        return $contact;
    }

     /**
     * @OA\Delete(
     *      path="/delete-single-contact",
     *      operationId="DeleteSingleContact",
     *      tags={"Delete Single Contact Group"},
     *      description="Delete Single Contact Group",
     *     @OA\Parameter(
     *         name="group_id",
     *         in="query",
     *         description="Enter the group id",
     *         required=true,
     *     ),
     *     @OA\Parameter(
     *         name="contact_id",
     *         in="query",
     *         description="Enter contact id",
     *         required=true,
     *     ),
     *      @OA\Response(
     *          response=200,
     *          description="Contact removed from group successfully",
     *       ),
     *      @OA\Response(
     *          response=422,
     *          description="Validation error",
     *      ),
     *     )
   */
    public function removeSingleContact(Request $request)
    {
        $contact = $this->contactGroupRepository->removeContactFromGrouop($request);
        return $contact;
    }
}
