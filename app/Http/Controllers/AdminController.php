<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function admin(){
        return Inertia::render('admin/admin_dashboard');
    }

}
