<?php

namespace App\Repositories\Contracts;

use Illuminate\Http\Request;

interface MergeTransactionRepositoryInterface
{

    public function allMergeTransactions();

    public function createMergeTransaction($request);

    public function showMergeTransaction($id);

    public function deleteMergeTransaction($id);
}
