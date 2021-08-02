<?php
/**
 * @OA\Schema(
 *     title="Group",
 *     description="Group model",
 *     @OA\Xml(
 *         name="Group"
 *     )
 * )
 */
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

    public function groups() {
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

    /**
     * @OA\Property(
     *     title="ID",
     *     description="ID",
     *     format="int64",
     *     example=1
     * )
     *
     * @var integer
     */
    private $id;

    /**
     * @OA\Property(
     *      title="Name",
     *      description="Name of the group",
     *      example="All Staff"
     * )
     *
     * @var string
     */
    protected $name;

    /**
    * @OA\Property(
    *      title="Description",
    *      description="Description of the group",
    *      example="This is for cars and truck description"
    * )
    *
    * @var string
    */
    protected $description;

   /**
    * @OA\Property(
    *     title="Created at",
    *     description="Created at",
    *     example="2020-01-27 17:50:45",
    *     format="datetime",
    *     type="string"
    * )
    *
    * @var \DateTime
    */
   private $created_at;

   /**
    * @OA\Property(
    *     title="Updated at",
    *     description="Updated at",
    *     example="2020-01-27 17:50:45",
    *     format="datetime",
    *     type="string"
    * )
    *
    * @var \DateTime
    */
   private $updated_at;

   /**
    * @OA\Property(
    *     title="Slug",
    *     description="Slug",
    *     example="all-staff",
    *     type="string"
    * )
    *
    * @var \string
    */
   protected $slug;
}
