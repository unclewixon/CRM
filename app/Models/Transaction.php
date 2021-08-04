<?php
/**
 * @OA\Schema(
 *     title="Transaction",
 *     description="Transaction model",
 *     @OA\Xml(
 *         name="Transaction"
 *     )
 * )
 */
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id', 'trans_ref', 'type', 'paid'
    ];

    public function users() {
        return $this->belongsToMany(User::class);
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
     *      title="Transactoin ref",
     *      description="Payment transaction reference",
     *      example="128439"
     * )
     *
     * @var string
     */
    protected $trans_ref;

    /**
    * @OA\Property(
    *      title="Transaction Type",
    *      description="Transaction type",
    *      example="Unit"
    * )
    *
    * @var string
    */
    protected $type;

     /**
    * @OA\Property(
    *      title="Payment status",
    *      description="User payment status",
    *      example="paid"
    * )
    *
    * @var string
    */
    protected $paid;

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
