<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Rating extends Model
{
    protected $fillable = [
        'doctor_id', 'rating',
    ];

    // Define relationships if needed
    public function doctor()
    {
        return $this->belongsTo(Doctor::class);
    }
}
