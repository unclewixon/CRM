<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Helpers\General;

class TransactionResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $general_helper = new General();
        return [
            'id'        => $this->id,
            'trans_ref'      => $general_helper->clean($this->trans_ref),
            'type'  => $general_helper->clean($this->type),
            'status'    => $general_helper->clean($this->paid),
            'user'     => new UserResource($this->whenLoaded('user')),
            'created_at'=> $this->created_at,
            'updated_at'=> $this->updated_at
        ];
    }
}
