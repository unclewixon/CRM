<?php

namespace App\Actions;

use App\Models\Role;
use App\Models\User;
use App\Http\Resources\UserResource;
use App\Models\VerificationToken;
use App\Mail\VerificationMail;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;

class UserAction
{

    public $model;
    public $verification_token;
    public $role;

    public function __construct(User $model, VerificationToken $verification_token, Role $role)
    {
       $this->model = $model;
       $this->verification_token = $verification_token;
       $this->role = $role;
    }

    //create
    public function create($request)
    {
        try {
            $user = $this->model->create([
                'name' => $request->name,
                'email' => $request->email,
                'phone' => $request->phone,
                'organization_name' => $request->organization_name,
                'sender_id' => $request->sender_id,
                'office_address' => $request->office_address,
                'password' => bcrypt($request->password)
            ]);
            $roleAttach =  $this->role->where('name', 'SuperAdmin')->first();
            $user->roles()->attach($roleAttach->id);
            $this->emailWalker($user->email);
            return response()->json([
                'message' => 'Account created successfully',
                'data' => $user,
                'success' => true
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Sorry unable to create accounnt',
                'error' => $e->getMessage(),
                'success' => false
            ], 400);
        }
    }

    //email walker
    public function emailWalker($email)
    {
        $token = Str::random(32);
        $create_token =  $this->verification_token->create([
            'email' => $email,
            'token' => $token
        ]);
        $data = array(
            'title' => 'Reset Password Notification',
            'body' => 'You are receiving this email because we received a password reset request for your account.',
            'token' => $token
        );
        Mail::to($email)->send(new VerificationMail($data));
    }

    //get
    public function all()
    {
      $users = $this->model->latest()->paginate(20);
      if (count($users) < 1) {
        return response()->json([
            'message' => 'Sorry no user found',
            'success' => false
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
               'message' => 'Sorry this user do not exist',
               'success' => false
           ], 400);
      }
    }

    //get
    public function authUser()
    {
        $user = $this->model->with(['roles' => function($query) {
            $query->select(['name']);
        } ])->find(auth()->user()->id);
        return new UserResource($user);
    }

    //update
    public function update($request, $id)
    {
        $data = $this->model->where('id', '=', $id)->exists();
        if ($data) {
           $user = $this->model->find($id);
           $user->slug = null;
           try {
                $update = $user->update([
                    'name' => empty($request->name) ? $user->name : $request->name,
                    'phone' =>   empty($request->phone) ? $user->phone : $request->phone,
                    'organization_name' =>  empty($request->organization_name) ? $user->organization_name : $request->organization_name,
                    'sender_id' =>  empty($request->sender_id) ? $user->sender_id : $request->sender_id,
                    'office_address' =>  empty($request->toffice_address) ? $user->office_address : $request->office_address
                ]);
                return response()->json([
                    'message' => 'Profile updated successfully',
                    'data' => $update,
                    'success' => true
                ], 200);
           } catch (\TException $e) {
                return response()->json([
                    'message' => 'Sorry unable to update profile',
                    'error' => $e->getMessage(),
                    'success' => false
                ], 400);
           }
        }else {
          return response()->json([
              'message' => 'Sorry this data do not exist',
              'success' => false
          ], 404);
        }
    }

    //add up unit
    public function addUpUnit($id, $unit)
    {
        $data = $this->model->where('id', '=', $id)->exists();
        if ($data) {
            $user = $this->model->find($id);
            $user->unit = $user->unit + $unit;
            $user->save();
            return true;
        }else {
            return response()->json([
                'message' => 'Sorry this data do not exist',
                'success' => false
            ], 404);
        }
    }

    //subtract unit
    public function subtractUnit($id, $charge)
    {
        $data = $this->model->where('id', '=', $id)->exists();
        if ($data) {
            $user = $this->model->find($id);
            $user->unit = $user->unit - $charge;
            $user->save();
            return true;
        }else {
            return response()->json([
                'message' => 'Sorry this data do not exist',
                'success' => false
            ], 404);
        }
    }

    //update user can_inspect
    public function isSubscribed($id, $value)
    {
        $user = User::find($id)->update([
             'is_subscribed' => $value
        ]);
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
                                 'message' => 'User password reset successful',
                                 'data' => $user,
                                 'success' => true
                             ], 200);

                         }catch (\Exception $e) {
                             return response()->json([
                                 'message' => 'Sorry the password reset process failed',
                                 'error' => $e->getMessage(),
                                 'success' => false
                             ], 400);
                         }

                     }else {
                         return response()->json([
                             'message' => 'Sorry new password can not be the old password!',
                             'success' => false
                         ], 401);
                     }
                 }else {
                     return response()->json([
                         'message' => 'Sorry old password doesnt matched',
                         'success' => false
                     ], 402);
                 }
         }else {
             return response()->json([
                 'message' => 'Sorry this user do not exist',
                 'success' => false
             ], 404);
         }
    }

    //delete
    public function delete($id)
    {
        $data = $this->model->where('id', '=', $id)->exists();
        if ($data) {
            try {
                $delete =  $this->model->find($id)->delete();
                return response()->json([
                    'message' => 'User deleted successfully',
                    'delete' => $delete,
                    'success' => true
                ], 200);
            } catch (\Exception $e) {
                return response()->json([
                    'message' => 'Sorry unable to delete user',
                    'error' => $e->getMessage(),
                    'success' => false
                ], 400);
            }
        }else {
          return response()->json([
              'message' => 'Sorry this user do not exist',
              'success' => false
          ], 404);
        }
    }
}
