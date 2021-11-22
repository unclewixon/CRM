<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Transaction extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'user_id', 'trans_ref', 'type', 'status', 'amount', 'description'
    ];

    public function users()
    {
        return $this->belongsToMany(User::class);
    }
}
