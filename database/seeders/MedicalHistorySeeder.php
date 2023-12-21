<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MedicalHistorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Example data for seeding
        $medicalHistories = [
            [
                'patient_id' => 4,
                'patient_diseases' => 'Hypertension, Asthma',
                'family_problem' => 'Heart disease',
            ],

            [
                'patient_id' => 5,
                'patient_diseases' => 'Diabetes, Migraine',
                'family_problem' => 'Diabetes',
            ],

            [
                'patient_id' => 6,
                'patient_diseases' => 'Allergies',
                'family_problem' => 'Asthma',
            ],

            // Add more medical histories as needed
        ];

        // Insert data into the medical_histories table
        DB::table('medical_histories')->insert($medicalHistories);
    }
}
