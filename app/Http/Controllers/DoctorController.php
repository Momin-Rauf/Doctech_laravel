<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;

class DoctorController extends Controller
{
    public function dr(){
        return Inertia::render('doctor/dr_homepage');
    }

}
