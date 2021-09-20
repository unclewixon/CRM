<?php

namespace App\Actions;

use App\Models\Contact;
use App\Http\Resources\ContactResource;
use App\Models\Group;
use Illuminate\Http\Request;

class ContactAction
{

    public $model;
    public $group;

    public function __construct(Contact $model, Group $group)
    {
        $this->model = $model;
        $this->group = $group;
    }

    //create
    public function create($request)
    {
        $user = $this->model->create([
            'user_id' => auth()->user()->id,
            'surname' => $request->surname,
            'firstname' => $request->firstname,
            'email' => $request->email,
            'scheme' => $request->scheme,
            'gender' => $request->gender,
            'dob' => $request->dob,
            'phone_number' => $request->phone_number
        ]);
        if ($user) {
            return response()->json([
                'message' => 'Contact created successfully',
            ], 200);
        } else {
            return response()->json([
                'message' => 'Sorry unable to create contact'
            ], 400);
        }
    }

    //get
    public function all($request)
    {
        if (auth()->user()->role_id == 1) {
            $contacts = $this->model->with(['user', 'groups'])->latest()->paginate(20);
        } else {
            $contacts = $this->model->with('groups')->where('user_id', auth()->user()->id)->latest()->paginate($request->perPage, ['*'], 'page', $request->page);
        }

        return ContactResource::collection($contacts);
    }

    //add contacts to group
    public function addContactsToGroup($request)
    {
        $group = $this->group->where('id', '=', $request->group_id)->where('user_id', auth()->user()->id)->first();
        foreach ($request->contacts_id as $contact) {
            $contactPerson = $this->model->find($contact);
            $attach = $contactPerson->groups()->attach($group->id);
        }
        return response()->json([
            'message' => 'Contacts add to group successfully'
        ], 200);
    }

    //remove contacts to group
    public function removeContactsFromGroup($request)
    {
        $group = $this->group->where('id', '=', $request->group_id)->where('user_id', auth()->user()->id)->first();
        foreach ($request->contacts_id as $contact) {
            $contactPerson = $this->model->find($contact);
            $contactPerson->groups()->detach($group->id);
        }
        return response()->json([
            'message' => 'Contacts removed from group successfully'
        ], 200);
    }

    //add contacts to group
    public function addContactToGroup($request)
    {
        $group = $this->group->where('id', '=', $request->group_id)->where('user_id', auth()->user()->id)->first();
        $contactPerson = $this->model->find($request->contact_id);
        $contactPerson->groups()->attach($group->id);
        return response()->json([
            'message' => 'Contact add to group successfully'
        ], 200);
    }

    //remove contact to group
    public function removeContactFromGroup($request)
    {
        $group = $this->group->where('id', '=', $request->group_id)->where('user_id', auth()->user()->id)->first();
        $contactPerson = $this->model->find($request->contact_id);
        $detach = $contactPerson->groups()->detach($group->id);
        return response()->json([
            'message' => 'Contact removed from group successfully'
        ], 200);
    }

    //get
    public function get($id)
    {
        $data = $this->model->where('id', '=', $id)->exists();
        if ($data) {
            $contact = $this->model->find($id);
            return new ContactResource($contact);
        } else {
            return response()->json([
                'message' => 'Sorry this data do not exist'
            ], 400);
        }
    }

    //update
    public function update($request, $id)
    {
        $data = $this->model->where('id', '=', $id)->exists();
        if ($data) {
            $plan = $this->model->find($id);
            $update = $plan->update([
                'surname' => empty($request->surname) ? $plan->surname : $request->surname,
                'firstname' => empty($request->firstname) ? $plan->firstname : $request->firstname,
                'email' => empty($request->email) ? $plan->email : $request->email,
                'scheme' => empty($request->scheme) ? $plan->scheme : $request->scheme,
                'gender' => empty($request->gender) ? $plan->gender : $request->gender,
                'dob' => empty($request->dob) ? $plan->dob : $request->dob,
                'phone_number' => empty($request->phone_number) ? $plan->phone_number : $request->phone_number
            ]);
            if ($update) {
                return response()->json([
                    'message' => 'Contact updated successfully'
                ], 200);
            } else {
                return response()->json([
                    'message' => 'Sorry unable to update contact'
                ], 400);
            }
        } else {
            return response()->json([
                'message' => 'Sorry this data do not exist'
            ], 404);
        }
    }

    //delete
    public function delete($id)
    {
        $data = $this->model->where('id', '=', $id)->exists();
        if ($data) {
            $delete = $this->model->find($id)->delete();
            if ($delete) {
                return response()->json([
                    'message' => 'Contact deleted successfully'
                ], 200);
            } else {
                return response()->json([
                    'message' => 'Sorry unable to delete contact'
                ], 400);
            }
        } else {
            return response()->json([
                'message' => 'Sorry this contact do not exist'
            ], 404);
        }
    }

    public function analytics()
    {
        $result = (object)null;
        $result->total = $this->model->count();

        $series = (object)null;
        $series->name = 'Contacts';
        $series->data = [0, 0, 0, 0, 0];

        $result->series = $series;

        return response()->json([
            'result' => $result
        ], 200);
    }
}
