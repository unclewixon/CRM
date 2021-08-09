<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Helpers\General;

class SubscriberResource extends JsonResource
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
            'id'    => $this->id,
            'from'   => $general_helper->clean($this->from),
            'to'     => $general_helper->clean($this->to),
            'user' => $general_helper->clean($this->whenLoaded('user')),
            'plan'  => $general_helper->clean($this->whenLoaded('plan')),
            'days_remaining' => $general_helper->subCalculator($this->to),
            'created_at'=> $this->created_at,
            'updated_at'=> $this->updated_at
        ];
    }
}
