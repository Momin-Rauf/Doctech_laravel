<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class PatientSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Seed data for patients
        $patientsData = [
           
            [
                'user_id' => 3, // Replace with the user_id for the patient
                'medical_history' => 'Another medical history',
                'address' => '456 Oak St, Town',
                'phone_no' => '9876543210',
                'cnic' => '9876543215',
                'age' => 25,
                'blood_group' => 'A-',
                'sex' => 'female',
                'current_issue' => 'Allergies',
                'married_status' => 'single',
                'DOB' => '1998-05-22', // Date of Birth
                'registration_date' => now(),
            ],
            [
                'user_id' => 4,
                'medical_history' => 'Medical history for user_id 4',
                'address' => '789 Pine St, Village',
                'phone_no' => '5554443333',
                'cnic' => '4444333321',
                'age' => 35,
                'blood_group' => 'B+',
                'sex' => 'male',
                'current_issue' => 'Chronic pain',
                'married_status' => 'married',
                'DOB' => '1988-11-10',
                'registration_date' => now(),
            ],
            [
                'user_id' => 5,
                'medical_history' => 'Medical history for user_id 5',
                'address' => '987 Elm St, Hamlet',
                'phone_no' => '9998887777',
                'cnic' => '3333222200',
                'age' => 28,
                'blood_group' => 'AB-',
                'sex' => 'female',
                'current_issue' => 'Migraines',
                'married_status' => 'single',
                'DOB' => '1995-07-03',
                'registration_date' => now(),
            ],
            [
                'user_id' => 6,
                'medical_history' => 'Medical history for user_id 6',
                'address' => '654 Birch St, Township',
                'phone_no' => '7776665555',
                'cnic' => '2222111199',
                'age' => 40,
                'blood_group' => 'O-',
                'sex' => 'male',
                'current_issue' => 'Allergies',
                'married_status' => 'divorced',
                'DOB' => '1982-04-18',
                'registration_date' => now(),
            ],
            [
                'user_id' => 7,
                'medical_history' => 'Medical history for user_id 7',
                'address' => '321 Cedar St, Suburb',
                'phone_no' => '3332221111',
                'cnic' => '111100088',
                'age' => 22,
                'blood_group' => 'A+',
                'sex' => 'female',
                'current_issue' => 'Allergies',
                'married_status' => 'single',
                'DOB' => '2001-09-08',
                'registration_date' => now(),
            ],
            // Add data for users with user_id 8, 9, 10, as needed
        ];

        // Insert data into the patients table
        DB::table('patients')->insert($patientsData);
    }
}
