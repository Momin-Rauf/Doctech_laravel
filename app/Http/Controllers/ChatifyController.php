<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\DoctorPatient;
use App\Models\Doctor; // Make sure to import the Doctor model
use Illuminate\Support\Facades\View;
use Illuminate\Support\Facades\DB; // Import DB facade

class ChatifyController extends Controller
{
    public function index()
    {
        $user = auth()->user();

        // Check the user type (doctor or patient)
        $doctor = Doctor::where('user_id', $user->id)->first();

        if ($user->role === 'doctor' && $doctor) {
            // If the user is a doctor and is linked to a doctor record, fetch patients linked with the doctor in the doctor_patient table
            $patients = DB::table('doctor_patient')
                ->select('patient_id')
                ->where('doctor_id', $doctor->id)
                ->get();

            $chatData = [
                'user' => [
                    'id' => $user->id,
                    'name' => $user->name,
                ],
                'users' => $patients,
            ];
        } elseif ($user->role === 'patient' && $doctor) {
            // If the user is a patient and is linked to a doctor record, fetch the doctor linked with the patient in the doctor_patient table
            $doctors = DB::table('doctor_patient')
                ->select('doctor_id')
                ->where('patient_id', $user->id)
                ->get();

            $chatData = [
                'user' => [
                    'id' => $user->id,
                    'name' => $user->name,
                ],
                'users' => $doctors,
            ];
        } else {
            // Handle other user types or cases where the user is not linked to a doctor record
            $chatData = [];
        }

        return view('chatify', compact('chatData'));
    }
}
