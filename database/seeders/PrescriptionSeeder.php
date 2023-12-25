<?php
namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Factory as Faker;
use App\Models\Prescription;
use App\Models\Patient;

class PrescriptionSeeder extends Seeder
{
    public function run()
    {
        $faker = Faker::create();

        // Get all patients
        $patients = Patient::all();

        foreach ($patients as $patient) {
            DB::table('prescriptions')->insert([
                'patient_id' => $patient->id,
                'medicine_name' => $faker->word,
                'dose' => $faker->word,
                'frequency' => $faker->numberBetween(1, 3),
                'done' => $faker->boolean,
            ]);
        }
    }
}
