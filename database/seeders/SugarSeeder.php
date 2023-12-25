<?php
namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Factory as Faker;
use App\Models\Sugar;
use App\Models\Patient;

class SugarSeeder extends Seeder
{
    public function run()
    {
        $faker = Faker::create();

        // Get all patients
        $patients = Patient::all();

        foreach ($patients as $patient) {
            DB::table('sugar')->insert([
                'patient_id' => $patient->id,
                'sugar_level' => $faker->randomFloat(2, 70, 200), // Assuming sugar level is a float
                'date' => $faker->date(),
                'time' => $faker->time(),
            ]);
        }
    }
}
