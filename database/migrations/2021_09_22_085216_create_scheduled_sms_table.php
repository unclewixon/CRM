<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateScheduledSmsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('scheduled_sms', function (Blueprint $table) {
            $table->id();
            $table->foreignId('contact_id')->constrained();
            $table->longText('message')->nullable();
            $table->foreignId('scheduled_by')->constrained('users');
            $table->jsonb('response');
            $table->string('status')->default('pending');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('scheduled_sms');
    }
}
