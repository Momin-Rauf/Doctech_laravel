<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class MedicalInformation extends Model
{
    protected $fillable = [
        'patient_id', 'doctor_id', 'bp', 'sugar_level',
    ];

    // Define relationships if needed
    public function patient()
    {
        return $this->belongsTo(Patient::class);
    }

    public function doctor()
    {
        return $this->belongsTo(Doctor::class);
    }
}
