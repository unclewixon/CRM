<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Models\EmailConfiguration;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Config;

class MailConfigProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        // get email view data in provider class
        view()->composer('email', function ($view) {

            if(isset(auth()->user()->id)) {

                $configuration = EmailConfiguration::where("user_id", auth()->user()->id)->first();

                if(!is_null($configuration)) {
                    $config = array(
                        'driver'     =>     $configuration->driver,
                        'host'       =>     $configuration->host,
                        'port'       =>     $configuration->port,
                        'username'   =>     $configuration->user_name,
                        'password'   =>     $configuration->password,
                        'encryption' =>     $configuration->encryption,
                        'from'       =>     array('address' => $configuration->sender_email, 'name' => $configuration->sender_name),
                    );
                    Config::set('mail', $config);
                }
            }
        });
    }
}
