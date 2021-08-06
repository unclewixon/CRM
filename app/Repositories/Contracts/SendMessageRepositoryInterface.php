<?php 

namespace App\Repositories\Contracts;

interface SendMessageRepositoryInterface
{
    public function sendBulkSms($request);

    public function sendSingleMessage($request);

    public function sendMessageToAllContact($request);
    
}