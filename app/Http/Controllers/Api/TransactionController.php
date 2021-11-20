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
        $transactions = $this->transactionRepository->allTransactions();
        return $transactions;
    }

    //create transaction
    public function store(Request $request)
    {
        $transaction = $this->transactionRepository->create($request);
        return $transaction;
    }

    //show details
    public function show($id)
    {
        $transaction = $this->transactionRepository->showTransaction($id);
        return $transaction;
    }

    //delete
    public function destroy($id)
    {
        $transaction = $this->transactionRepository->deleteTransaction($id);
        return $transaction;
    }
}
