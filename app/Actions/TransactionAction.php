<?php

namespace App\Actions;

use App\Models\Transaction;
use App\Http\Resources\TransactionResource;

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
        $user_roles = auth()->user()->roles->pluck('name');
        if ($user_roles->contains('SuperAdmin')) {
            $contacts = $this->model->with(['user'])->latest()->paginate(20);
        }else {
            $contacts = $this->model->where('user_id', auth()->user()->id)->latest()->paginate(20);
        }
        if (count($contacts) < 1) {
            return response()->json([
                'message' => 'Sorry no transaction found'
            ], 400);
        }else {
            return TransactionResource::collection($contacts);
        }
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
               'message' => 'Sorry this data do not exist'
           ], 400);
      }
    }

    //delete
    public function delete($id)
    {
        $data = $this->model->where('id', '=', $id)->exists();
        if ($data) {
            $delete =  $this->model->find($id)->delete();
            if ($delete) {
              return response()->json([
                   'message' => 'Transaction deleted successfully'
               ], 200);
            }else {
               return response()->json([
                   'message' => 'Sorry unable to delete transaction'
               ], 400);
            }
        }else {
          return response()->json([
              'message' => 'Sorry this data do not exist'
          ], 404);
        }
    }
}
