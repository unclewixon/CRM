<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Repositories\Contracts\EmailConfigurationRepositoryInterface;

class EmailConfigurationController extends Controller
{
    private $emailConfigurationRepository;

    public function __construct(EmailConfigurationRepositoryInterface $emailConfigurationRepository)
    {
        $this->emailConfigurationRepository = $emailConfigurationRepository;
        $this->middleware('auth:api');
    }

    //all email configuration
    public function index()
    {
        $configuration = $this->emailConfigurationRepository->allConfiguration();
        return $configuration;
    }

    //create email configuration
    public function store(Request $request)
    {
        $configuration = $this->emailConfigurationRepository->createConfiguration($request);
        return $configuration;
    }

    //show configuration details
    public function show($id)
    {
        $configuration = $this->emailConfigurationRepository->showConfiguration($id);
        return $configuration;
    }

    //update configuration
    public function update(Request $request, $id)
    {
        $configuration = $this->emailConfigurationRepository->updateConfiguration($request, $id);
        return $configuration;
    }

    //delete email configuration
    public function destroy($id)
    {
        $configuration = $this->emailConfigurationRepository->deleteConfiguration($id);
        return $configuration;
    }
}
