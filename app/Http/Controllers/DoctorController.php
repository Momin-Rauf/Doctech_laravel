<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use App\Models\Sugar;
use Inertia\Response;
use Illuminate\Support\Facades\Auth;
use App\Models\Patient;
use App\Models\Doctor;

use App\Models\Prescription;
use App\Models\TestReport;
use App\Models\Bp;
use App\Models\Appointment;
use App\Models\User;
use Illuminate\Http\Request;
use DB;

class DoctorController extends Controller
{
    public function dr(){
        $Dr = User::where('id',auth()->user()->id)->first();
        $doctor_id = Doctor::where('user_id',auth()->user()->id)->first();
        $appointments = Appointment::where('doctor_id',$doctor_id->id)->get();
        $patient = Patient::all();
        $user = User::where('role','patient')->get();
        // return response()->json($patient);
        return Inertia::render('doctor/dr_homepage',['Dr'=>$Dr,'appointment'=>$appointments,'user'=>$user,'patientDetails'=>$patient,'doc'=>$doctor_id]);
    }

    

    public function searchPatient(Request $request)
{
    $doctor_id = Doctor::where('user_id', auth()->user()->id)->first();
    // Use Eloquent to find patients in the patient_doctor table
    $patient = DB::table('doctor_patient')
        ->where('patient_id', $request->pid)
        ->where('doctor_id', $doctor_id->id)
        ->get();

    $patientData = Patient::where('id', $patient[0]->patient_id)->first();
    $patients = DB::table('users')->where('id', $patientData->user_id)->first();

    if (!$patients) {
        return response()->json(['error' => 'Patient not found for the current doctor'], 404);
    }

    // Fetch additional data (sugar, prescriptions, tests, BP)
    $sugarData = Sugar::where('patient_id', $patientData->id)->get();
    $bpData = Bp::where('patient_id', $patientData->id)->get();
    $prescriptionData = Prescription::where('patient_id', $patientData->id)->get();
    $testData = TestReport::where('patient_id', $patientData->id)->get();

    $responseData = [
        'patient' => $patients,
        'pData' => $patientData,
        'Sugar' => $sugarData,
        'Bp' => $bpData,
        'prescriptions' => $prescriptionData,
        'testData' => $testData,
    ];
    return Inertia::render('doctor/dr_homepage',$responseData);
}

    

    public function patientPage(Request $request){
        
        $doctor_id = Doctor::where('user_id', auth()->user()->id)->first();
        // Use Eloquent to find patients in the patient_doctor table
        $patient = DB::table('doctor_patient')
        ->where('patient_id', $request->pid)
        ->where('doctor_id', $doctor_id->id)
        ->get();


        $patientData = Patient::where('id',$patient[0]->patient_id)->first();
        $patients = User::where('id',$patientData->user_id)->first();

        return Inertia::render('doctor/patientPage',[
            'patientData'=>$patients,
        ]);
    }
    
    }

