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
use App\Models\User;
use Illuminate\Http\Request;
use DB;

class PatientController extends Controller
{
    public function patient(){
        $id = auth()->user()->id;
        $patientID = Patient::where('user_id',$id)->first();
        $sugarData = Sugar::where('patient_id', $patientID->id)->get();
        $bpData = Bp::where('patient_id', $patientID->id)->get();
        $prescriptionData = Prescription::where('patient_id', $patientID->id)->get();
        $testData = TestReport::where('patient_id', $patientID->id)->get();
    




        $docData = Doctor::all();
        
        $userID = User::where('id',$id)->first();
        $userDetails = Patient::where('user_id',$id)->first();
        $doctor = User::where('role','=','doctor')->get();
        // return response()->json($doctor);
        return Inertia::render('patient/patient_homepage',
        [
            'user' => [$userID],
            'userData'=> [$userDetails],
            
        'doctor'=>$doctor,
        'Sugar' =>$sugarData,
        'Bp' => $bpData,
        'prescriptions' => $prescriptionData,
        'doctorData' => $docData,
        ]
    );
    }

    public function getId(Request $request){
        $patient = Patient::where('user_id',auth()->user()->id)->get();
        Appointment::create([
            'doctor_id'=> $request->id ,
            'patient_id'=>$patient,
            'appointment_date'=>now(),
        ]);
    }

    public function saveSugar(Request $request){
        $patient = Patient::where('user_id',auth()->user()->id)->first();
        
        Sugar::create([
            'patient_id'=>$patient->id,
            'sugar_level'=>$request->SugarValue,
            'time'=>$request->Time,
            'date'=>$request->SugarDate,
        ]);

}

    public function saveBp(Request $request){
        $patient = Patient::where('user_id',auth()->user()->id)->first();
        
        Bp::create([
            'patient_id'=>$patient->id,
            'systolic'=>$request->Systolic,
            'diastolic'=>$request->Diastolic,
            'time'=>$request->Time,
            'date'=>$request->BpDate,
        ]);
    }
}