<?php

namespace App\Actions;

use App\Models\Transaction;
use App\Http\Resources\TransactionResource;
use Illuminate\Http\Request;

class TransactionAction
{

    public $model;

    public function __construct(Transaction $model)
    {
       $this->model = $model;
    }

    //get
    public function all()
    {
        $contacts = $this->model->where('user_id', auth()->user()->id)->latest()->paginate(20);
        return TransactionResource::collection($contacts);
    }

    //get
    public function get($id)
    {
      $data = $this->model->where('id', '=', $id)->exists();
      if ($data) {
          $contact = $this->model->find($id);
          return new TransactionResource($contact);
      }else {
           return response()->json([
               'message' => 'Sorry this data do not exist',
               'success' => false
           ], 400);
      }
    }

    public function create(Request $request)
    {
        $transaction = $this->model->create([

        ]);

        return new TransactionResource($transaction);
    }

    //delete
    public function delete($id)
    {
        $data = $this->model->where('id', '=', $id)->exists();
        if ($data) {
            try {
                $delete =  $this->model->find($id)->delete();
                return response()->json([
                    'message' => 'Transaction deleted successfully',
                    'data' => $delete,
                    'success' => true
                ], 200);
            } catch (\Throwable $th) {
                return response()->json([
                    'message' => 'Sorry unable to delete transaction',
                    'error' => $e->getMessage(),
                    'success' => false
                ], 400);
            }
        }else {
          return response()->json([
              'message' => 'Sorry this data do not exist',
              'success' => false
          ], 404);
        }
    }
}
