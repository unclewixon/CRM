<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSplitAccountsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('split_accounts', function (Blueprint $table) {
            $table->id();
            $table->string('business_name');
            $table->string('bank_code');
            $table->string('account_number');
            $table->integer('percentage_charge');
            $table->string('split_code');
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
        Schema::dropIfExists('split_accounts');
    }
}
