<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Helpers\General;

class UserResource extends JsonResource
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
            'name'      => $general_helper->clean($this->name),
            'email'     => $general_helper->clean($this->email),
            'phone'     => $general_helper->clean($this->phone),
            'organization_name'  => $general_helper->clean($this->organization_name),
            'sender_id'  => $general_helper->clean($this->sender_id),
            'office_address'=> $general_helper->clean($this->office_address),
            'slug'      => $general_helper->clean($this->slug),
            'roles'   =>  $this->whenLoaded('roles'),
            'created_at'=> $this->created_at,
            'updated_at'=> $this->updated_at
        ];
    }
}
