<?php

namespace App\Repositories\Contracts;

use Illuminate\Http\Request;

interface ContactRepositoryInterface
{
    public function createContact($request);

    public function allContacts($request);

    public function showContact($id);

    public function addContactsToGroup($request);

    public function removeContactsFromGroup($request);

    public function addContactToGroup($request);

    public function removeContactFromGroup($request);

    public function updateContact($request, $id);

    public function batchContactUpload($request);

    public function deleteContact($id);
}
