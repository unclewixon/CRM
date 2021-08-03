<?php 

namespace App\Repositories\Contracts;

interface SendEmailRepositoryInterface
{
    public function sendBulkEmail($request);
}