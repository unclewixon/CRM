<?php

namespace App\Repositories;

use App\Actions\TransactionAction;
use App\Repositories\Contracts\TransactionRepositoryInterface;
use Illuminate\Http\Request;


class TransactionRepository implements TransactionRepositoryInterface
{
    private $action;

    public function __construct(TransactionAction $action)
    {
        $this->action = $action;
    }

    //all
    public function allTransactions()
    {
        return $this->action->all();
    }

    //create
    public function create(Request $request)
    {
        return $this->action->create($request);
    }

    //show
    public function showTransaction($id)
    {
        return $this->action->get($id);
    }

    //delete
    public function deleteTransaction($id)
    {
        return $this->action->delete($id);
    }
}
