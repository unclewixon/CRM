<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id', 'trans_ref', 'type', 'paid'
    ];

    public function users() {
        return $this->belongsToMany(User::class);
    }
}
