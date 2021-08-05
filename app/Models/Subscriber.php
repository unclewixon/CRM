<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Subscriber extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
      'user_id', 'plan_id', 'from', 'to', 'status'
    ];

    public function user() {
      return $this->belongsTo(User::class, 'user_id');
    }

    public function plan() {
      return $this->belongsTo(Plan::class, 'plan_id');
    }
}
