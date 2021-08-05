<?php 

namespace App\Helpers;

class MessageHelper
{

	public function sendMessage($number, $message)
	{
		 \SMSGlobal\Credentials::set(config('smsglobal.key_public'), config('smsglobal.key_secret'));

		 $sms = new \SMSGlobal\Resource\Sms();

		 try {
		 	$response = $sms->sendToOne($number, $message);
		 	return true;
		 } catch (\Exception $e) {
		 	return false;
		 }
	}
}