<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SplitAccount extends Model
{
    use HasFactory;

    protected $fillable = [
        'business_name', 'bank_code', 'account_number', 'percentage_charge', 'split_code'
    ];
}
