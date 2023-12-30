<?php

// use App\Http\Controllers\ProfileController;
// use Illuminate\Foundation\Application;
// use Illuminate\Support\Facades\Route;
// use App\Http\Controllers\AdminController;
// use App\Http\Controllers\PatientController;
// use App\Http\Controllers\DoctorController;
// use App\Http\Middleware\Role;
// use Inertia\Inertia;

// /*
// |--------------------------------------------------------------------------
// | Web Routes
// |--------------------------------------------------------------------------
// |
// | Here is where you can register web routes for your application. These
// | routes are loaded by the RouteServiceProvider within a group which
// | contains the "web" middleware group. Now create something great!
// |
// */

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

// Route::middleware(['auth','role:admin'])->group(function(){
//     Route::get('/admin',[AdminController::class,'admin'])->name('admin.dashboard');
//     Route::post('/admin/update',[AdminController::class,'editPatientData'])->name('admin.updateData');
//     Route::post('/admin/logout',[AdminController::class,'logout'])->name('Logout');
//     Route::get('/admin/mh',[AdminController::class,'show_mh'])->name('admin.show_mh');
//     Route::get('/admin/Dredit',[AdminController::class,'show_Dr_edit'])->name('show_dr_edit');
//     Route::get('/admin/Dr',[AdminController::class,'show_Dr'])->name('show_dr_page');
//     Route::get('/admin/edit',[AdminController::class,'show_edit'])->name('admin.show_edit');
//     Route::post('/admin/ad_mh',[AdminController::class,'add_mh'])->name('admin.add_mh');
//     Route::post('/admin/edit',[AdminController::class,'editDoctorData'])->name('admin.updateDoctor');
//     Route::post('/admin/create',[AdminController::class,'create'])->name('admin.create');
//     Route::post('/admin/createDoc',[AdminController::class,'createDoc'])->name('admin.createDoc');
//     Route::get('/admin/user',[AdminController::class,'userAdmin'])->name('userAdmin');
//     Route::post('/admin/treatment',[AdminController::class,'treatment'])->name('treatment');
//     Route::get('/admin/dr',[AdminController::class,'doctorAdmin'])->name('doctorAdmin');

//     Route::get('/admin/patents',[AdminController::class,'ShowAllPatients'])->name('admin.ShowAllPatients');
//     Route::get('/admin/view',[AdminController::class,'ShowAllDoctors'])->name('admin.ShowAllDoctors');
//     Route::get('/admin/view',[AdminController::class,'AllDoctorsViewPage'])->name('admin.AllDoctorsViewPage');
//     Route::get('/admin/doctors',[AdminController::class,'AllpatientsViewPage'])->name('admin.AllpatientsViewPage');




// });


// Route::middleware(['auth','role:patient'])->group(function(){
//     Route::get('/patient',[PatientController::class,'patient'])->name('patient.dashboard');

// });



// Route::middleware(['auth','role:doctor'])->group(function(){
//     Route::get('/doctor',[DoctorController::class,'dr'])->name('dr.dashboard');
//     Route::post('/doctor/patient',[DoctorController::class,'patientPage'])->name('patientPage');
//     Route::post('/doctor/patientPage/fetch',[DoctorController::class,'fetch'])->name('fetch');
//     Route::get('/doctor/patientPage',[DoctorController::class,'show_all_patients'])->name('dr.showPatients');

// });


// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

// require __DIR__.'/auth.php';


use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\PatientController;
use App\Http\Controllers\DoctorController;
use App\Http\Middleware\Role;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/',[AdminController::class,'welcome'])->name('welcome');
Route::middleware(['auth','role:admin'])->group(function(){
    Route::get('/admin',[AdminController::class,'admin'])->name('admin.dashboard');
    Route::post('/admin/update',[AdminController::class,'editPatientData'])->name('admin.updateData');
    Route::post('/admin/logout',[AdminController::class,'logout'])->name('Logout');
    Route::get('/admin/mh',[AdminController::class,'show_mh'])->name('admin.show_mh');
    Route::get('/admin/Dredit',[AdminController::class,'show_Dr_edit'])->name('show_dr_edit');
    Route::get('/admin/Dr',[AdminController::class,'show_Dr'])->name('show_dr_page');
    Route::get('/admin/edit',[AdminController::class,'show_edit'])->name('admin.show_edit');
    Route::post('/admin/ad_mh',[AdminController::class,'add_mh'])->name('admin.add_mh');
    Route::post('/admin/edit',[AdminController::class,'editDoctorData'])->name('admin.updateDoctor');
    Route::post('/admin/create',[AdminController::class,'create'])->name('admin.create');
    Route::post('/admin/createDoc',[AdminController::class,'createDoc'])->name('admin.createDoc');
    Route::get('/admin/user',[AdminController::class,'userAdmin'])->name('userAdmin');
    Route::post('/admin/treatment',[AdminController::class,'treatment'])->name('treatment');
    Route::get('/admin/dr',[AdminController::class,'doctorAdmin'])->name('doctorAdmin');
    Route::get('/admin/patents',[AdminController::class,'ShowAllPatients'])->name('admin.ShowAllPatients');
    Route::get('/admin/view',[AdminController::class,'ShowAllDoctors'])->name('admin.ShowAllDoctors');
    Route::get('/admin/view',[AdminController::class,'AllDoctorsViewPage'])->name('admin.AllDoctorsViewPage');
    Route::get('/admin/doctors',[AdminController::class,'AllpatientsViewPage'])->name('admin.AllpatientsViewPage');




});


Route::middleware(['auth','role:patient'])->group(function(){
    Route::get('/patient',[PatientController::class,'patient'])->name('patient.dashboard');
    // Route::get('/patient/profile',[PatientController::class,'userprofile'])->name('user-profile');
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::post('/sugar', [PatientController::class, 'saveSugar'])->name('sugar');
    Route::post('/bp', [PatientController::class, 'saveBp'])->name('Bp');
    Route::post('/appoint', [PatientController::class, 'getId'])->name('appoint');
    Route::get('/appointments', [PatientController::class, 'showAppointment'])->name('showAppointment');
    Route::get('/admin/logout',[PatientController::class,'logout'])->name('Logout');
    
    


});



Route::middleware(['auth','role:doctor'])->group(function(){
    Route::get('/doctor',[DoctorController::class,'dr'])->name('dr.dashboard');
    // Route::post('/doctor/patient',[DoctorController::class,'patientPage'])->name('doc.patientPage');
    // Route::post('/doctor/patient',[DoctorController::class,'patientPage'])->name('patientPage');
    Route::post('/doctor',[DoctorController::class,'searchPatient'])->name('doctor.searchPatient');
});


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
