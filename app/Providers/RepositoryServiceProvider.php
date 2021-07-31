<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
          //auth repository binding
        $this->app->bind(
            \App\Repositories\Contracts\AuthRepositoryInterface::class,
            \App\Repositories\AuthRepository::class
        );

        //email verification repository binding
        $this->app->bind(
            \App\Repositories\Contracts\EmailVerificationRepositoryInterface::class,
            \App\Repositories\EmailVerificationRepository::class
        );

        //password rest repository binding
        $this->app->bind(
            \App\Repositories\Contracts\ResetPasswordRepositoryInterface::class,
            \App\Repositories\ResetPasswordRepository::class
        );

        //plan repository binding
        $this->app->bind(
            \App\Repositories\Contracts\PlanRepositoryInterface::class,
            \App\Repositories\PlanRepository::class
        );

        //subscriber repository binding
        $this->app->bind(
            \App\Repositories\Contracts\SubscriberRepositoryInterface::class,
            \App\Repositories\SubscriberRepository::class
        );

        //unit repository binding
        $this->app->bind(
            \App\Repositories\Contracts\UnitRepositoryInterface::class,
            \App\Repositories\UnitRepository::class
        );

        //recharge repository binding
        $this->app->bind(
            \App\Repositories\Contracts\RechargeRepositoryInterface::class,
            \App\Repositories\RechargeRepository::class
        );

        //group repository binding
        $this->app->bind(
            \App\Repositories\Contracts\GroupRepositoryInterface::class,
            \App\Repositories\GroupRepository::class
        );

        //contats repository binding
        $this->app->bind(
            \App\Repositories\Contracts\ContactRepositoryInterface::class,
            \App\Repositories\ContactRepository::class
        );


    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
