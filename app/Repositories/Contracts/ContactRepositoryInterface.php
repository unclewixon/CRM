<?php

namespace App\Repositories\Contracts;

interface ContactRepositoryInterface
{
    public function createContact($request);

    public function allContacts();

    public function showContact($id);

    //public function addContactToGrouop($id);

    public function updateContact($request, $id);

    public function deleteContact($id);
}
