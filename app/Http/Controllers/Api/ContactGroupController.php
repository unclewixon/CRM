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

    //add mutiple contact to group
    public function addContactM(Request $request)
    {
        $contact = $this->contactGroupRepository->addContactsToGrouop($request);
        return $contact;
    }

    //remove mutiple contact from group
    public function removeContactM(Request $request)
    {
        $contact = $this->contactGroupRepository->removeContactsFromGrouop($request);
        return $contact;
    }

    //add single contact to group
    public function addSingleContact(Request $request)
    {
        $contact = $this->contactGroupRepository->addContactToGrouop($request);
        return $contact;
    }

    //remove single contact from group
    public function removeSingleContact(Request $request)
    {
        $contact = $this->contactGroupRepository->removeContactFromGrouop($request);
        return $contact;
    }
}
