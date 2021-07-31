<?php

namespace App\Actions;

use App\Models\Role;
use App\Models\User;
use App\Helpers\Token;
use App\Http\Resources\UserResource;
use Illuminate\Auth\Events\Registered;
use \Cviebrock\EloquentSluggable\Services\SlugService;

class UserAction
{

    public $model;
    public $token;
    public $role;

    public function __construct(User $model, Token $token, Role $role)
    {
       $this->model = $model;
       $this->token = $token;
       $this->role = $role;
    }

    //create
    public function create($request)
    {
        $user = $this->model->create([
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
            'organization_name' => $request->organization_name,
            'office_address' => $request->office_address,
            'role_id' =>  $this->role->where('name', 'User')->first()->id,
            'password' => bcrypt($request->password),
            'slug' => SlugService::createSlug($this->model, 'slug', $request->name)
        ]);
        if ($user) {
            event(new Registered($user));
            $token =  auth()->login($user, true);
            return response()->json([
                'message' => 'Account created successfully',
                'token' => $this->token->createNewToken($token)
            ], 200);
        }else {
           return response()->json([
               'message' => 'Sorry unable to create accounnt'
           ], 400);
        }
    }

    //get
    public function all()
    {
      $users = $this->model->latest()->paginate(20);
      if (count($users) < 1) {
        return response()->json([
            'message' => 'Sorry no user found'
        ], 400);
      }else {
          return UserResource::collection($users);
      }
    }

    //get
    public function get($id)
    {
      $data = $this->model->where('id', '=', $id)->exists();
      if ($data) {
          $user = $this->model->find($id);
          return new UserResource($user);
      }else {
           return response()->json([
               'message' => 'Sorry this user do not exist'
           ], 400);
      }
    }

    //get
    public function authUser()
    {
       return new UserResource(auth()->user());
    }

    //update
    public function update($request, $id)
    {
        $data = $this->model->where('id', '=', $id)->exists();
        if ($data) {
           $user = $this->model->find($id);
           $user->slug = null;
           $update = $user->update([
             'name' => empty($request->name) ? $user->name : $request->name,
             'phone' =>   empty($request->phone) ? $user->phone : $request->phone,
             'organization_name' =>  empty($request->organization_name) ? $user->organization_name : $request->organization_name,
             'office_address' =>  empty($request->toffice_address) ? $user->office_address : $request->office_address
           ]);
           if ($update) {
             return response()->json([
                 'message' => 'Profile updated successfully'
             ], 200);
           }else {
              return response()->json([
                  'message' => 'Sorry unable to update profile'
              ], 400);
           }
        }else {
          return response()->json([
              'message' => 'Sorry this data do not exist'
          ], 404);
        }
    }

    //update user can_inspect
    public function isSubscribed($id, $value)
    {
        $data = $this->model->where('id', '=', $id)->exists();
        if ($data) {
            $user = $this->model->find($id)->update([
                'is_subscribed' => $value
            ]);
            if ($user) {
              return true;
            }else {
              return false;
            }
        }else {
            return response()->json([
                'message' => 'Sorry this data do not exist'
            ], 404);
        }
    }

    //add up unit
    public function addUpUnit($id, $unit)
    {
        $data = $this->model->where('id', '=', $id)->exists();
        if ($data) {
            $user = $this->model->find($id)->update([
                'unit' => $unit
            ]);
            if ($user) {
              return true;
            }else {
              return false;
            }
        }else {
            return response()->json([
                'message' => 'Sorry this data do not exist'
            ], 404);
        }
    }

    //reset user password
    public function password($request, $id)
    {
         $data = $this->model->where('id', '=', $id)->exists();
         if ($data) {

                 $user = $this->model->find($id);
                 $hashedPassword = $user->password;

                 if (Hash::check($request->old_password , $hashedPassword)) {

                     if (!Hash::check($request->password , $hashedPassword)) {

                         try {

                             $user->update([
                                 'password' => empty($request->password) ? $user->password : bcrypt($request->password),
                             ]);
                             return response()->json([
                                 'message' => 'User password reset successful'
                             ], 200);

                         }catch (\Exception $e) {
                             return response()->json([
                                 'message' => 'Sorry the password reset process failed'
                             ], 400);
                         }

                     }else {
                         return response()->json([
                             'message' => 'Sorry new password can not be the old password!'
                         ], 401);
                     }
                 }else {
                     return response()->json([
                         'message' => 'Sorry old password doesnt matched'
                     ], 402);
                 }
         }else {
             return response()->json([
                 'message' => 'Sorry this user do not exist'
             ], 404);
         }
    }

    //delete
    public function delete($id)
    {
        $data = $this->model->where('id', '=', $id)->exists();
        if ($data) {
            $delete =  $this->model->find($id)->delete();
            if ($delete) {
              return response()->json([
                   'message' => 'User deleted successfully'
               ], 200);
            }else {
               return response()->json([
                   'message' => 'Sorry unable to delete user'
               ], 400);
            }
        }else {
          return response()->json([
              'message' => 'Sorry this user do not exist'
          ], 404);
        }
    }
}
