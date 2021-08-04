<?php
/**
 * @OA\Schema(
 *     title="Recharge",
 *     description="Recharge model",
 *     @OA\Xml(
 *         name="Recharge"
 *     )
 * )
 */
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Recharge extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id', 'unit_id', 'number', 'amount'
    ];

    public function user() {
      return $this->belongsTo(User::class, 'user_id');
    }

    public function unit() {
      return $this->belongsTo(Unit::class, 'unit_id');
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
     *      title="User ID",
     *      description="User id ",
     *      example="id"
     * )
     *
     * @var string
     */
    protected $user_id;

    /**
    * @OA\Property(
    *      title="Unit Id",
    *      description="Unit id",
    *      example="1"
    * )
    *
    * @var string
    */
    protected $unit_id;

     /**
    * @OA\Property(
    *      title="Number",
    *      description="Number of unit",
    *      example="100"
    * )
    *
    * @var string
    */
    protected $number;

     /**
    * @OA\Property(
    *      title="Amount",
    *      description="Unit amount",
    *      example="1000"
    * )
    *
    * @var string
    */
    protected $amount;

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
