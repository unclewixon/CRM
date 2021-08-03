<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Helpers\General;

class EmailConfigurationResoucrce extends JsonResource
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
            'driver'      => $general_helper->clean($this->driver),
            'host'  => $general_helper->clean($this->host),
            'port'    => $general_helper->clean($this->port),
            'encryption' => $general_helper->clean($this->encryption),
            'user_name' => $general_helper->clean($this->user_name),
            'sender_name'  => $general_helper->clean($this->sender_name),
            'sender_email'  => $general_helper->clean($this->sender_email),
            'user'     => new UserResource($this->whenLoaded('user')),
        ];
    }
}
