<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Repositories\Contracts\UnitRepositoryInterface;

class UnitController extends Controller
{

    private $unitRepository;

    public function __construct(UnitRepositoryInterface $unitRepository)
    {
        $this->unitRepository = $unitRepository;
        $this->middleware('auth:api');
         $this->middleware('admin', ['except' => ['index', 'show']]);
    }

    //all units
    public function index()
    {
        $units = $this->unitRepository->allUnits();
        return $units;
    }

    //create-buy
    public function store(Request $request)
    {
        $unit = $this->unitRepository->createUnit($request);
        return $unit;
    }

    //show
    public function show($id)
    {
        $units = $this->unitRepository->showUnit($id);
        return $units;
    }

    //update
    public function update(Request $request, $id)
    {
        $units = $this->unitRepository->updateUnit($request, $id);
        return $units;
    }

    //delete
    public function destroy($id)
    {
      $units = $this->unitRepository->deleteUnit($id);
      return $units;
    }
}
