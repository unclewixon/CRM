<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ScheduledSms extends Model
{
    use HasFactory;

    protected $fillable = [
        'contact_id', 'message', 'scheduled_by',  'response', 'status', 'message_id', 'delivered_at'
    ];
}
