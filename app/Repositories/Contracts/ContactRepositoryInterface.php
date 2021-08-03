<?php

namespace App\Repositories\Contracts;

interface ContactRepositoryInterface
{
    public function createContact($request);

    public function allContacts();

    public function showContact($id);

    public function addContactsToGrouop($request);

    public function removeContactsFromGrouop($request);

    public function addContactToGrouop($request);

    public function removeContactFromGrouop($request);

    public function updateContact($request, $id);

    public function batchContactUpload($request);

    public function deleteContact($id);
}
