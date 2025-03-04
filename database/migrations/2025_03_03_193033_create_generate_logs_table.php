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
        Schema::create('generate_logs', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->text('form')->nullable();
            $table->text('prompt')->nullable();
            $table->text('response')->nullable();
            $table->text('result')->nullable();
            $table->integer('text_req_token')->default(0);
            $table->integer('text_res_token')->default(0);
            $table->text('character')->nullable();
            $table->text('images')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('generate_logs');
    }
};
