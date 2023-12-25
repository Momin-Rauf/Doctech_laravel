<?php
namespace Database\Seeders;


use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Factory as Faker;
use App\Models\Bp;
use App\Models\Patient;

class BpSeeder extends Seeder
{
    public function run()
    {
        $faker = Faker::create();

        // Get all patients
        $patients = Patient::all();

        foreach ($patients as $patient) {
            DB::table('bp')->insert([
                'patient_id' => $patient->id,
                'date' => $faker->date(),
                'time' => $faker->time(),
                'systolic' => $faker->numberBetween(80, 160),
                'diastolic' => $faker->numberBetween(50, 100),
            ]);
        }
    }
}
