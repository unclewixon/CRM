<?php

namespace App\Repositories;

use App\Actions\EmailConfigurationAction;
use Illuminate\Support\Facades\Validator;
use App\Repositories\Contracts\EmailConfigurationRepositoryInterface;

class EmailConfigurationRepository implements EmailConfigurationRepositoryInterface
{
    private $action;

    public function __construct(EmailConfigurationAction $action)
    {
        $this->action = $action;
    }

    //creati
    public function createConfiguration($request)
    {

    }

    public function allConfiguration()
    {

    }

    public function showConfiguration($id)
    {

    }

    public function updateConfiguration($request, $id)
    {

    }

    public function deleteConfiguration($id)
    {

    }


}