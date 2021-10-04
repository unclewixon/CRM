<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Helpers\General;

class ContactResource extends JsonResource
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
            'id'   => $this->id,
            'name'  => $general_helper->clean($this->firstname).' '.$general_helper->clean($this->surname),
            'email'  => $general_helper->clean($this->email),
            'scheme' => $general_helper->clean($this->scheme),
            'gender' => $general_helper->clean($this->gender),
            'address' => $general_helper->clean($this->address),
            'emr_id' => $general_helper->clean($this->emr_id),
            'phone_number' => $general_helper->clean($this->phone_number),
            'dob'  => $this->dob,
            'user'  => new UserResource($this->whenLoaded('user')),
            'groups'  => GroupResource::collection($this->whenLoaded('groups')),
            'created_at'=> $this->created_at,
            'updated_at'=> $this->updated_at
        ];
    }
}
