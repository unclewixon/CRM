<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Helpers\General;
use Illuminate\Support\Facades\DB;

class GroupResource extends JsonResource
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
            'description'     => $general_helper->clean($this->description),
            'slug'  => $general_helper->clean($this->slug),
            'user'     => new UserResource($this->whenLoaded('user')),
            'contact_count'     => DB::table('contact_group')->where('group_id', $this->id)->count(),
            'contacts'     => ContactResource::collection($this->whenLoaded('contacts')),
            'created_at'=> $this->created_at,
            'updated_at'=> $this->updated_at
        ];
    }
}
