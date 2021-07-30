<?php
/**
 * @OA\Schema(
 *     title="Plan",
 *     description="Plan model",
 *     @OA\Xml(
 *         name="Plan"
 *     )
 * )
 */
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Cviebrock\EloquentSluggable\Sluggable;

class Plan extends Model
{
    use HasFactory, Sluggable;

    protected $fillable = [
        'name', 'description', 'duration', 'cost', 'slug'
    ];

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
       *      description="Name of the category",
       *      example="Cars and Trucks"
       * )
       *
       * @var string
       */
      protected $name;

      /**
       * @OA\Property(
       *      title="Duration",
       *      description="Enter duration of this plan",
       *      example="One Month"
       * )
       *
       * @var string
       */
      protected $duration;

      /**
       * @OA\Property(
       *      title="Cost",
       *      description="Enter the cost of this plan",
       *      example="1000"
       * )
       *
       * @var string
       */
      protected $cost;


      /**
      * @OA\Property(
      *      title="Description",
      *      description="Description of the category",
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
      *     example="cars-and-trucks",
      *     type="string"
      * )
      *
      * @var \string
      */
     protected $slug;

    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'name'
            ]
        ];
    }
}
