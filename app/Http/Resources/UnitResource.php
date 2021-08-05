<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Helpers\General;

class UnitResource extends JsonResource
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
            'id'  => $this->id,
            'name'  => $general_helper->clean($this->name),
            'description'  => $general_helper->clean($this->description),
            'unit'  => $general_helper->clean($this->unit),
            'cost'  => $general_helper->clean($this->cost_per_unit),
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at
        ];
    }
}
