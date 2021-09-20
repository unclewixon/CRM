<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Contact extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
      'user_id', 'surname', 'firstname', 'email', 'scheme', 'gender', 'phone_number', 'dob', 'emr_id', 'address'
    ];

    public function user() {
      return $this->belongsTo(User::class, 'user_id');
    }

    public function groups() {
        return $this->belongsToMany(Group::class);
    }

}
