<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //create user
        $user = User::create([
            'name' => 'Administrator',
            'email' => 'adminUmkmsemambungmakmur@gmail.com',
            'password' => bcrypt('UmkmSemambungmakmur'),
        ]);

        //create user
        $userCuss = User::create([
            'name' => 'Customer',
            'email' => 'customerUmkmsemambungmakmur@gmail.com',
            'password' => bcrypt('customerSemambungmakmur'),
        ]);

        //get all permissions
        $permissions = Permission::all();

        // Mendapatkan permission berdasarkan ID
        $permissionsCuss = Permission::whereIn('id', [1, 30, 31])->get();

        //get role admin
        $role = Role::find(1);

        //get role admin
        $roleCuss = Role::find(2);

        //assign permission to role
        $role->syncPermissions($permissions);

        //assign permission to role
        $roleCuss->syncPermissions($permissionsCuss);

        //assign role to user
        $user->assignRole($role);

        //assign role to user
        $userCuss->assignRole($roleCuss);
    }
}
