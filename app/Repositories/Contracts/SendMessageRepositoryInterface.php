<?php

namespace App\Repositories\Contracts;

use Illuminate\Http\Request;

interface SendMessageRepositoryInterface
{
    public function sendBulkSms($request);

    public function sendSingleMessage($request);

    public function sendMessageToAllContact($request);

    public function receipt(Request $request);

    public function checkTransactions();
}
