<?php

namespace App\Repositories\Contracts;

use Illuminate\Http\Request;

interface TransactionRepositoryInterface
{

    public function allTransactions();

    public function create(Request $request);

    public function showTransaction($id);

    public function deleteTransaction($id);
}
