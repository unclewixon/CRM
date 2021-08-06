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

class User extends Authenticatable implements MustVerifyEmail, JWTSubject
{
    use HasFactory, SoftDeletes, UsesUuid, Notifiable, Sluggable;

    protected $fillable = ['name','email','phone','organization_name','office_address','role_id','is_subscribed','unit', 'password',];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function getJWTIdentifier() {
        return $this->getKey();
    }

    public function getJWTCustomClaims() {
        return [];
    }

    public function role() {
        return $this->BelongsTo(Role::class, 'role_id');
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

    public function subscriptions() {
        return $this->hasMany(Subscriber::class);
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
