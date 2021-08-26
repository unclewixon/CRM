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

    //all contacts
    public function index()
    {
        $contacts = $this->contactRepository->allContacts();
        return $contacts;
    }

    //create account
    public function store(Request $request)
    {
        $contact = $this->contactRepository->createContact($request);
        return $contact;
    }

    //batch contact upload
    public function storeBatch(Request $request)
    {
        $contact = $this->contactRepository->batchContactUpload($request);
        return $contact;
    }

   //show contact details
    public function show($id)
    {
        $contact = $this->contactRepository->showContact($id);
        return $contact;
    }

    //update contact
    public function update(Request $request, $id)
    {
        $contact = $this->contactRepository->updateContact($request, $id);
        return $contact;
    }

    //delete contact
    public function destroy($id)
    {
        $contact = $this->contactRepository->deleteContact($id);
        return $contact;
    }
}
