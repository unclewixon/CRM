<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use App\Models\Concerns\UsesUuid;
use Illuminate\Database\Eloquent\SoftDeletes;
use Cviebrock\EloquentSluggable\Sluggable;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Dyrynda\Database\Support\CascadeSoftDeletes;

class User extends Authenticatable implements MustVerifyEmail, JWTSubject
{
    use HasFactory, SoftDeletes, UsesUuid, Notifiable, Sluggable, CascadeSoftDeletes;

    protected $fillable = ['name','email','phone','organization_name','office_address','is_subscribed','unit', 'password', 'email_verified_at'];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    protected $cascadeDeletes = ['roles'];

    public function getJWTIdentifier() {
        return $this->getKey();
    }

    public function getJWTCustomClaims() {
        return [];
    }

    public function roles() {
        return $this->belongsToMany(Role::class);
    }

    public function groups() {
        return $this->hasMany(Group::class);
    }

    public function contacts() {
        return $this->hasMany(Contact::class);
    }

    public function recharges() {
        return $this->hasMany(Recharge::class);
    }

    public function subscription() {
        return $this->belongsTo(Subscriber::class);
    }

    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'name'
            ]
        ];
    }
}
