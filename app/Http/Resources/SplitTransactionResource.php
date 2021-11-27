<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Helpers\General;

class SplitTransactionResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $general_helper = new General();
        return [
            'id'        => $this->id,
            'trans_ref'      => $general_helper->clean($this->trans_ref),
            'type'  => $general_helper->clean($this->type),
            'status'    => $this->status,
            'amount' => $this->amount,
            'description'  => $general_helper->clean($this->description),
            'patient'     => new ContactResource($this->whenLoaded('contact')),
            'created_at'=> $this->created_at,
            'updated_at'=> $this->updated_at
        ];
    }
}
