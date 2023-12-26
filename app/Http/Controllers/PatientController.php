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
    





        
        $userID = User::where('id',$id)->first();
        $userDetails = Patient::where('user_id',$id)->first();
        // return response()->json($userID);
        return Inertia::render('patient/patient_homepage',
        [
            'user' => [$userID],
            'userData'=> [$userDetails],
            
        
        'Sugar' =>$sugarData,
        'Bp' => $bpData,
        'prescriptions' => $prescriptionData,
        ]
    );
    }

}
