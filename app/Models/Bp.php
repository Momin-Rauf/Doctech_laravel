<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Bp extends Model
{
    protected $fillable = [
        'patient_id', 'date', 'time', 'systolic', 'diastolic',
    ];

    // Define relationships if needed
    public function patient()
    {
        return $this->belongsTo(Patient::class);
    }
}
