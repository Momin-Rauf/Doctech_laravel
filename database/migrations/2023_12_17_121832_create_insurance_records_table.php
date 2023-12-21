<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInsuranceRecordsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('insurance_records', function (Blueprint $table) {
            $table->id();
            $table->string('insurance_company');
            $table->string('insurance_id');
            $table->unsignedBigInteger('patient_id');
            $table->string('policy_holder_name');
            $table->timestamps();

            // Define foreign key relationship
            $table->foreign('patient_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('insurance_records');
    }
}
