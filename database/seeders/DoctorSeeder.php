<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class DoctorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Example data for seeding
        $doctors = [
            [
                'user_id' => 1, // Replace with the user_id of the doctor
                'specialization' => 'Cardiologist',
                'experience' => 5,
                'address' => '123 Main Street',
                'current_working_place' => 'Hospital ABC',
                'availability_time' => '9 AM - 5 PM',
                'charges_first_appointment' => 100.00,
                'charges_follow_up' => 80.00,
            ],
            [
                'user_id' => 2, // Replace with the user_id of the doctor
                'specialization' => 'Cardiologist',
                'experience' => 5,
                'address' => '123 Main Street',
                'current_working_place' => 'Hospital ABC',
                'availability_time' => '9 AM - 5 PM',
                'charges_first_appointment' => 100.00,
                'charges_follow_up' => 80.00,
            ],

            // Add more doctors as needed
        ];

        // Insert data into the doctors table
        DB::table('doctors')->insert($doctors);
    }
}


