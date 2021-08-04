<?php
/**
 * @OA\Schema(
 *     title="EmailConfiguration",
 *     description="EmailConfiguration model",
 *     @OA\Xml(
 *         name="EmailConfiguration"
 *     )
 * )
 */
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class EmailConfiguration extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = ["user_id", "driver", "host", "port", "encryption","user_name" , "password",
        "sender_name", "sender_email"
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
     *      title="Driver",
     *      description="Enter email driver",
     *      example="smtp"
     * )
     *
     * @var string
     */
    protected $driver;

    /**
    * @OA\Property(
    *      title="Host",
    *      description="Enter email host",
    *      example="smtp.gmail.com"
    * )
    *
    * @var string
    */
    protected $host;

     /**
    * @OA\Property(
    *      title="Port",
    *      description="Enter email port",
    *      example="465"
    * )
    *
    * @var string
    */
    protected $port;

    /**
    * @OA\Property(
    *      title="Encryption",
    *      description="Enter email encyription",
    *      example="ssl"
    * )
    *
    * @var string
    */
    protected $encryption;

    /**
    * @OA\Property(
    *      title="Username",
    *      description="Enter email username",
    *      example="orutu1@gmail.com"
    * )
    *
    * @var string
    */
    protected $user_name;


    /**
    * @OA\Property(
    *      title="Password",
    *      description="Enter email password",
    *      example="password"
    * )
    *
    * @var string
    */
    protected $password;

    /**
    * @OA\Property(
    *      title="Sender Name",
    *      description="Enter email sender name",
    *      example="AgroTech"
    * )
    *
    * @var string
    */
    protected $sender_name;

     /**
    * @OA\Property(
    *      title="Sender Email",
    *      description="Enter sender email",
    *      example="orutu1@gmail.com"
    * )
    *
    * @var string
    */
    protected $sender_email;

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
