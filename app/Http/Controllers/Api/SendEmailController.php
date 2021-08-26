<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Repositories\Contracts\SendEmailRepositoryInterface;

class SendEmailController extends Controller
{
    private $sendEmailRepository;

    public function __construct(SendEmailRepositoryInterface $sendEmailRepository)
    {
        $this->sendEmailRepository = $sendEmailRepository;
        $this->middleware('auth:api');
    }

    //send bulk email
    public function sendBulk(Request $request)
    {
        $send_email = $this->sendEmailRepository->sendBulkEmail($request);
        return $send_email;
    }

    //send single email
    public function sendSingle(Request $request)
    {
        $send_email = $this->sendEmailRepository->sendSingleEmail($request);
        return $send_email;
    }

    //send email to all contacts
    public function all(Request $request)
    {
        $send_email = $this->sendEmailRepository->sendEmailToAllContacts($request);
        return $send_email;
    }

}
