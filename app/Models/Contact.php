<?php
/**
 * @OA\Schema(
 *     title="Contact",
 *     description="Contact model",
 *     @OA\Xml(
 *         name="Contact"
 *     )
 * )
 */
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Contact extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
      'user_id', 'sur_name', 'first_name', 'email', 'scheme', 'gender', 'dob'
    ];

    public function user() {
      return $this->belongsTo(User::class, 'user_id');
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
     *      title="Sur Name",
     *      description="Sur name of the contact person",
     *      example="Orutu"
     * )
     *
     * @var string
     */
    protected $sur_name;

    /**
    * @OA\Property(
    *      title=First Name",
    *      description="Frist name of the contact person",
    *      example="Akposieyefa"
    * )
    *
    * @var string
    */
    protected $first_name;

    /**
    * @OA\Property(
    *      title=Email",
    *      description="Email of the contact person",
    *      example="orutu1@gmail.com"
    * )
    *
    * @var string
    */
    protected $email;

     /**
    * @OA\Property(
    *      title=Scheme",
    *      description="Scheme of the contact person",
    *      example="NHIS"
    * )
    *
    * @var string
    */
    protected $scheme;

    /**
    * @OA\Property(
    *      title=Gender",
    *      description="Gender of the contact person",
    *      example="Male"
    * )
    *
    * @var string
    */
    protected $gender;

     /**
    * @OA\Property(
    *      title=DOB",
    *      description="Date of birth the contact person",
    *      example="2020-01-27"
    * )
    *
    * @var string
    */
    protected $dob;

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
