<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Sugar extends Model
{
    protected $fillable = [
        'patient_id', 'sugar_level', 'date', 'time',
    ];

    // Define relationships if needed
    public function patient()
    {
        return $this->belongsTo(Patient::class);
    }
}
