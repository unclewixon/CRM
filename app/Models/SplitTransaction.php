<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SplitTransaction extends Model
{
    use HasFactory;

    protected $fillable = [
        'emr_id', 'trans_ref', 'type', 'status', 'amount', 'description'
    ];

    public function contact() {
        return $this->belongsTo(Contact::class, 'emr_id');
    }
}
