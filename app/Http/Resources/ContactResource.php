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
            'id'        => $this->id,
            'sur_name'      => $general_helper->clean($this->sur_name),
            'first_name'  => $general_helper->clean($this->first_name),
            'email'    => $general_helper->clean($this->first_name),
            'scheme' => $general_helper->clean($this->scheme),
            'gender' => $general_helper->clean($this->gender),
            'dob'  => $this->dob,
            'user'     => new UserResource($this->whenLoaded('user')),
            'groups'     => GroupResource::collection($this->whenLoaded('groups')),
            'created_at'=> $this->created_at,
            'updated_at'=> $this->updated_at
        ];
    }
}
