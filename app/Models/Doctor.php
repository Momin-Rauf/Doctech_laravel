<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Doctor extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'specialization',
        'experience',
        'address',
        'current_working_place',
        'availability_time',
        'charges_first_appointment',
        'charges_follow_up',
    ];


    public function patients()
    {
        return $this->belongsToMany(Patient::class);
    }
}
