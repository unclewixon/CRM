<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Recharge extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id', 'unit_id', 'number', 'amount'
    ];

    public function user() {
      return $this->belongsTo(User::class, 'user_id');
    }

    public function unit() {
      return $this->belongsTo(Unit::class, 'unit_id');
    }

}
