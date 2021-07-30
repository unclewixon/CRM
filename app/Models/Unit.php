<?php
/**
 * @OA\Schema(
 *     title="Unit",
 *     description="Unit model",
 *     @OA\Xml(
 *         name="Unit"
 *     )
 * )
 */
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Unit extends Model
{
    use HasFactory;

    protected $fillable = [
        'name', 'description', 'unit', 'cost_per_unit'
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
           *      description="One",
           *      example="ONe unit"
           * )
           *
           * @var string
           */
          protected $name;

          /**
           * @OA\Property(
           *      title="Unit",
           *      description="Enter the range",
           *      example="1 to 1999"
           * )
           *
           * @var string
           */
          protected $duration;

          /**
           * @OA\Property(
           *      title="Cost Per Unit",
           *      description="Enter the cost per unit",
           *      example="1000"
           * )
           *
           * @var string
           */
          protected $cost_per_unit;


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

}
