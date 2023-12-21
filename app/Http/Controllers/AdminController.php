<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Patient;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;



class AdminController extends Controller
{
    public function admin(){
        return Inertia::render('admin/admin_dashboard');
    }

    public function storePatientData(Request $request)
    {
        // Validate the request data
        $request->validate([
            'medical_history' => 'required|string',
            'address' => 'required|string',
            'phone_no' => 'required|string',
            'cnic' => 'required|string',
            'age' => 'required|integer',
            'blood_group' => 'required|string',
            'sex' => 'required|in:male,female,other',
            'current_issue' => 'required|string',
            'married_status' => 'required|in:single,married,divorced,widowed',
            'DOB' => 'required|date',
        ]);

        // Get the authenticated user
        $user = Auth::user();

        // Create a new patient record
        $patient = Patient::create([
            'user_id' => $user->id,
            'medical_history' => $request->input('medical_history'),
            'address' => $request->input('address'),
            'phone_no' => $request->input('phone_no'),
            'cnic' => $request->input('cnic'),
            'age' => $request->input('age'),
            'blood_group' => $request->input('blood_group'),
            'sex' => $request->input('sex'),
            'current_issue' => $request->input('current_issue'),
            'married_status' => $request->input('married_status'),
            'DOB' => $request->input('DOB'),
            'registration_date' => now(),
        ]);

        // Redirect to the Welcome page
        return redirect()->route('welcome');
}}
