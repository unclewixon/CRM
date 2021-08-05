<?php 

namespace App\Repositories\Contracts;

interface SendEmailRepositoryInterface
{
    public function sendBulkEmail($request);

    public function sendSingleEmail($request);
}