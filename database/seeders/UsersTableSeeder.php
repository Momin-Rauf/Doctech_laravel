<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Example data for seeding
        $user = [
            [
                'name'=>'umer',
                'email'=>'umer@gmail.com',
                'password' =>Hash::make('umer123'),
                'role' => 'doctor',
            ],
            
            [
                'name'=>'Ali',
                'email'=>'Ali@gmail.com',
                'password' =>Hash::make('Ali123'),
                'role' => 'doctor',
            ],
            [
                'name'=>'Admin',
                'email'=>'admin@gmail.com',
                'password' =>Hash::make('admin123'),
                'role' => 'admin',

            ],

        ];

        // Insert data into the doctors table
        DB::table('users')->insert($user);
    }
}
            //admin 
            