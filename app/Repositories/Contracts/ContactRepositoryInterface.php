<?php

namespace App\Repositories\Contracts;

use Illuminate\Http\Request;

interface ContactRepositoryInterface
{
    public function createContact($request);

    public function allContacts($request);

    public function showContact($id);

    public function addContactsToGrouop($request);

    public function removeContactsFromGrouop($request);

    public function addContactToGrouop($request);

    public function removeContactFromGrouop($request);

    public function updateContact($request, $id);

    public function batchContactUpload($request);

    public function deleteContact($id);

    public function analytics();
}
