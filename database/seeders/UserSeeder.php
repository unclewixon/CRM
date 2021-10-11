<?php

namespace Database\Seeders;

use App\Models\Role;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = User::create([
            'name' => 'Admin',
            'email' => 'admin@sms.com',
            'phone' => '08063352837',
            'organization_name' => 'Deda Hospital',
            'sender_id' => 'DEDAHOSPITL',
            'office_address' => 'DEDA',
            'password' => bcrypt('admin'),
            'email_verified_at' => Carbon::now()->format('Y-m-d H:m:s'),
        ]);
        $roleAttach =  Role::where('name', 'SuperAdmin')->first();
        $user->roles()->attach($roleAttach->id);
    }
}
