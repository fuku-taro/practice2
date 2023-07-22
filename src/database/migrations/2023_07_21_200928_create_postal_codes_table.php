<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('postal_codes', function (Blueprint $table) {
            $table->increments('id');//オートインクリメントで連番
            $table->string('code');//郵便番号
            $table->unsignedInteger('first_code')->index();//郵便番号の始め（３桁）の部分
            $table->string('last_code');//郵便番号の後ろ（４桁）の部分
            $table->string('ken');//都道府県名
            $table->string('ken_furi');//都道府県名
            $table->string('city');//市区町村
            $table->string('city_furi');//市区町村
            $table->string('town');//市区町村
            $table->string('town_furi');//市区町村
            $table->string('azachoume');//市区町村
            $table->string('azachoume_furi');//市区町村
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('postal_codes');
    }
};
