<?php

namespace App\Repositories\Contracts;

interface TransactionRepositoryInterface
{

    public function allTransactions();

    public function showTransaction($id);

    public function deleteTransaction($id);
}
