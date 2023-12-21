<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class InsuranceRecordSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Seed data for insurance records
        $insuranceRecordsData = [
            [
                'insurance_company' => 'ABC Insurance',
                'insurance_id' => 'ABC123',
                'patient_id' => 4, // Replace with the actual patient_id
                'policy_holder_name' => 'John Doe',
            ],
            // Add more insurance records as needed
        ];

        // Insert data into the insurance_record table
        DB::table('insurance_records')->insert($insuranceRecordsData);
    }
}
