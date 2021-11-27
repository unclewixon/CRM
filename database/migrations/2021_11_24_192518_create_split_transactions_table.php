<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSplitTransactionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('split_transactions', function (Blueprint $table) {
            $table->id();
            $table->string('emr_id')->references('emr_id')->on('contacts')->onDelete('cascade');
            $table->string('trans_ref')->unique();
            $table->string('type');
            $table->decimal('amount', 20, 2)->default(0);
            $table->boolean('status')->default(0);
            $table->softDeletes();
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
        Schema::dropIfExists('split_transactions');
    }
}
