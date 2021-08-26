<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Cviebrock\EloquentSluggable\Sluggable;

class Group extends Model
{
    use HasFactory, SoftDeletes, Sluggable;

    protected $fillable = [
       'user_id',  'name',  'description', 'slug'
    ];

    public function user() {
      return $this->belongsTo(User::class, 'user_id');
    }

    public function contacts() {
        return $this->belongsToMany(Contact::class);
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
