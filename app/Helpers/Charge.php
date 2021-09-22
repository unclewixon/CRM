<?php

namespace App\Helpers;

class Charge
{
	public function chargeUser($pages, $user_count)
	{
		$per_page = env('PRICE_SMS');
		$pages_cost = $per_page * $pages;
		$total_charge = $pages_cost * $user_count;
		return $total_charge;
	}
}
