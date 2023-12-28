<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Patient;

use App\Models\Service;
use App\Models\Faq;
use App\Models\Doctor;

use App\Models\MedicalHistory;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;



class AdminController extends Controller
{
    //this function rendesr the rect page when admin is authenticated
    public function admin(){
        
        return Inertia::render('admin/admin_dashboard');
    }

    public function  welcome(){
        $faq = Faq::all();
        $service = Service::all();
        return Inertia::render('Welcome', [
            
            'service'=>$service,
            'faq' => $faq,
        ]);
    }
    
    //This function displays patient Panel to the Admin
    public function userAdmin(){
        return Inertia::render('admin/UserData');
    }
    //this function is used to render the doctor panel in admin dashboard
    public function doctorAdmin(){
        return Inertia::render('admin/DoctorData');
    }

    //this function is used to create user
    public function create(Request $request)
{
    // Create the User
    $user = User::create([
        'name' => $request->name,
        'email' => $request->email,
        'password' => $request->password,
        'role' => $request->role,
    ]);

    // Create the Patient and associate it with the User
    Patient::create([
        'user_id'=>$user->id,
        'address' => $request->address,
        'phone_no' => $request->phone_no,
        'cnic' => $request->cnic,
        'age' => $request->age,
        'blood_group' => $request->blood_group,
        'sex' => $request->sex,
        'married_status' => $request->married_status,
        'DOB' => $request->DOB,
        'registration_date' => now(),
    ]);
}


    public function show_mh(){
        return Inertia::render('admin/HistoryForm');
    }

    //this functino is used to logout the admin
    public function logout(Request $request){
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }


    public function treatment(Request $request)
    {
        
    
        // Check if the doctor and patient exist
        $doctor = Doctor::find($request->DoctorId);
        $patient = Patient::find($request->PatientId);
    
        if (!$doctor || !$patient) {
            // Handle the case where the doctor or patient is not found
            return response()->json(['message' =>'Error'], 404);
        }
    
        // Attach the patient to the doctor
        $doctor->patients()->attach($patient);
    
       
    }

    //this function is used to edit the data of the doctors

    public function editDoctorData(Request $request){
        $doctor = Doctor::find($request->Did);
    
        if (!$doctor) {
            // Handle the case where the doctor is not found
            return response()->json(['message' => 'Doctor not found'], 404);
        }
    
        $doctor->update([
            'specialization' => $request->specialization ?? $doctor->specialization,
            'experience' => $request->experience ?? $doctor->experience,
            'address' => $request->address ?? $doctor->address,
            'current_working_place' => $request->current_working_place ?? $doctor->current_working_place,
            'availability_time' => $request->availability_time ?? $doctor->availability_time,
            'charges_first_appointment' => $request->charges_first_appointment ?? $doctor->charges_first_appointment,
            'charges_follow_up' => $request->charges_follow_up ?? $doctor->charges_follow_up,
        ]);
    }
    
//add medical history
    public function add_mh(Request $request){
        MedicalHistory::create(
            [
                'patient_id'=>$request->pid,
                'patient_diseases'=>$request->issue,
                'family_problem'=>$request->history,
            ]
        );
    }

    //this function is used to edit the data of the Patient
    public function editPatientData(Request $request){
        $patient = Patient::find($request->pid);
    
        if (!$patient) {
            // Handle the case where the patient is not found
            return response()->json(['message' => 'Patient not found'], 404);
        }
    
        $patient->update([
            'address' => $request->address ?? $patient->address,
            'phone_no' => $request->phone_no ?? $patient->phone_no,
            'cnic' => $request->cnic ?? $patient->cnic,
            'age' => $request->age ?? $patient->age,
            'blood_group' => $request->blood_group ?? $patient->blood_group,
            'sex' => $request->sex ?? $patient->sex,
            'married_status' => $request->married_status ?? $patient->married_status,
            'DOB' => $request->DOB ?? $patient->DOB,
        ]);
    
    }

    public function show_Dr(){
        Inertia::render('admin/DoctorData');
    }
    

    //this function is used to display edit page
    public function show_edit(){
       return Inertia::render('admin/editUserData');
    }
    public function show_Dr_edit(){
        return Inertia::render('admin/editDoctorData');
     }

    public function createDoc(Request $request){
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => $request->password,
            'role' => $request->role,
        ]);
    
        // Create the Patient and associate it with the User
        Doctor::create([
            'user_id' => $user->id,
            'specialization' => $request->specialization,
            'experience' => $request->experience,
            'address' => 'pakistan',
            'current_working_place'=>$request->current_working_place,
            'availability_time' => $request->availability,
            'charges_first_appointment'=> $request->charges_first_appointment,
            'charges_follow_up'=> $request->charges_follow_up,
        ]);
    }


    public function ShowAllPatients(){
        
    }

    public function ShowAllDoctors(){

    }

    public function AllDoctorsViewPage(){
        return Inertia::render('admin/show_drs');

    }
    
    public function AllpatientsViewPage(){
        return Inertia::render('admin/show_patients');

    }




   }
