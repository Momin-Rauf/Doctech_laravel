<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('doctors', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id')->unique();
            $table->string('specialization');
            $table->integer('experience');
            $table->string('address');
            $table->string('current_working_place');
            $table->string('availability_time');
            $table->decimal('charges_first_appointment', 10, 2);
            $table->decimal('charges_follow_up', 10, 2);
            $table->timestamps();

            // Define foreign key relationship
            $table->foreign('user_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('doctors');
    }
};
