<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePatientsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('patients', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id')->unique();
            $table->text('medical_history');
            $table->string('address');
            $table->string('phone_no', 20);
            $table->string('cnic', 15);
            $table->integer('age');
            $table->string('blood_group', 10);
            $table->enum('sex', ['male', 'female', 'other']);
            $table->text('current_issue');
            $table->enum('married_status', ['single', 'married', 'divorced', 'widowed']);
            $table->date('DOB');
            $table->date('registration_date');
            $table->timestamps();

            // Define foreign key relationship
            $table->foreign('user_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('patients');
    }
}
