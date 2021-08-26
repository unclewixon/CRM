<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Repositories\Contracts\TransactionRepositoryInterface;

class TransactionController extends Controller
{
    private $transactionRepository;

    public function __construct(TransactionRepositoryInterface $transactionRepository)
    {
        $this->transactionRepository = $transactionRepository;
        $this->middleware('auth:api');
    }

    //all transactoin
    public function index()
    {
        $transactions = $this->contactGroupRepository->allTransactions();
        return $transactions;
    }

    //show details
    public function show($id)
    {
        $transaction = $this->contactGroupRepository->showTransaction($id);
        return $transaction;
    }

    //delete
    public function destroy($id)
    {
        $transaction = $this->contactGroupRepository->deleteTransaction($id);
        return $transaction;
    }
}
