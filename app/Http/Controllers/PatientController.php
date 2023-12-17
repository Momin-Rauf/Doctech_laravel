<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;

class PatientController extends Controller
{
    public function patient(){
        return Inertia::render('patient/patient_homepage');
    }

}
