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
    //this function rendesr the react page when admin is authenticated
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
    // Validation
    $request->validate([
        'name' => 'required|string|max:255',
        'email' => 'required|string|email|max:255|unique:users',
        'password' => 'required|string|min:8',
        'role' => 'required|string',
        'address' => 'required|string|max:255',
        'phone_no' => 'required|string|max:15',
        'cnic' => 'required|string|max:15',
        'age' => 'required|integer|min:0',
        'blood_group' => 'required|string|max:3',
        'sex' => 'required|string|max:6',
        'married_status' => 'required|string|max:10',
        'DOB' => 'required|date',
    ]);

    // Create the User
    $user = User::create([
        'name' => $request->name,
        'email' => $request->email,
        'password' => bcrypt($request->password),
        'role' => $request->role,
    ]);

    // Create the Patient and associate it with the User
    Patient::create([
        'user_id' => $user->id,
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
    // Validation
    $request->validate([
        'DoctorId' => 'required|exists:doctors,id',
        'PatientId' => 'required|exists:patients,id',
    ]);

    // Check if the doctor and patient exist
    $doctor = Doctor::find($request->DoctorId);
    $patient = Patient::find($request->PatientId);

    if (!$doctor || !$patient) {
        // Handle the case where the doctor or patient is not found
        return response()->json(['message' => 'Error'], 404);
    }

    // Attach the patient to the doctor
    $doctor->patients()->attach($patient);
}
    

    //this function is used to edit the data of the doctors

    public function editDoctorData(Request $request)
    {
        // Validation
        $request->validate([
            'Did' => 'required|exists:doctors,id',
            'specialization' => 'nullable|string|max:255',
            'experience' => 'nullable|integer|min:0',
            'address' => 'nullable|string|max:255',
            'current_working_place' => 'nullable|string|max:255',
            'availability_time' => 'nullable|string|max:255',
            'charges_first_appointment' => 'nullable|numeric|min:0',
            'charges_follow_up' => 'nullable|numeric|min:0',
        ]);
    
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
    
    public function add_mh(Request $request)
    {
        // Validation
        $request->validate([
            'pid' => 'required|exists:patients,id',
            'issue' => 'required|string|max:255',
            'history' => 'nullable|string|max:255',
        ]);
    
        MedicalHistory::create([
            'patient_id' => $request->pid,
            'patient_diseases' => $request->issue,
            'family_problem' => $request->history,
        ]);
    }
    

    //this function is used to edit the data of the Patient
    public function editPatientData(Request $request)
{
    // Validation
    $request->validate([
        'pid' => 'required|exists:patients,id',
        'address' => 'nullable|string|max:255',
        'phone_no' => 'nullable|string|max:15',
        'cnic' => 'nullable|string|max:15',
        'age' => 'nullable|integer|min:0',
        'blood_group' => 'nullable|string|max:3',
        'sex' => 'nullable|string|max:6',
        'married_status' => 'nullable|string|max:10',
        'DOB' => 'nullable|date',
    ]);

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

     public function createDoc(Request $request)
     {
         // Validation
         $request->validate([
             'name' => 'required|string|max:255',
             'email' => 'required|email|unique:users,email',
             'password' => 'required|string|min:8|confirmed',
             'role' => 'required|string|in:doctor',
             'specialization' => 'required|string|max:255',
             'experience' => 'required|integer|min:0',
             'current_working_place' => 'required|string|max:255',
             'availability' => 'required|string|max:255',
             'charges_first_appointment' => 'required|numeric|min:0',
             'charges_follow_up' => 'required|numeric|min:0',
         ]);
     
         // Create the User
         $user = User::create([
             'name' => $request->name,
             'email' => $request->email,
             'password' => bcrypt($request->password),
             'role' => $request->role,
         ]);
     
         // Create the Doctor and associate it with the User
         Doctor::create([
             'user_id' => $user->id,
             'specialization' => $request->specialization,
             'experience' => $request->experience,
             'address' => 'Pakistan', // Consider using dynamic data if applicable
             'current_working_place' => $request->current_working_place,
             'availability_time' => $request->availability,
             'charges_first_appointment' => $request->charges_first_appointment,
             'charges_follow_up' => $request->charges_follow_up,
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
        $patientsdata = Patient::all();
        $userdata = User::all();
        return Inertia::render('admin/show_patients', [
            
            'patientsdata'=>$patientsdata,
            'userdata'=>$userdata,
            
        ]);
       
    }


    




   }
