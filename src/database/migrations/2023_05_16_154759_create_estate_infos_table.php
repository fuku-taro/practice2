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
        Schema::create('estate_infos', function (Blueprint $table) {
            $table->id();
            $table->string('estate_id', 30)->comment('物件番号');
            $table->timestamp('register_at')->comment('登録日');
            $table->string('corporation', 30)->nullable()->comment('会員商号');
            $table->string('corp_tel', 30)->unique()->comment('会員電話番号');
            $table->string('event', 30)->comment('種目');
            $table->string('division', 30)->nullable()->comment('新築中古区分');
            // $table->unsignedBigInteger('address_id')->default(0);
            // $table->foreign('address_id')->references('id')->on('addresses');
            // $table->string('location_code', 30)->nullable()->comment('所在地コード');
            // $table->string('location1', 255)->default('');
            // $table->string('location2', 255)->default('');
            // $table->string('address', 255)->default('');
            $table->string('front_direction', 30)->nullable()->comment('間口方角');
            $table->string('front_direction_way', 30)->nullable()->comment('間口から接道までの距離');
            $table->enum('topography', ['rectangle', 'square', 'trapezoid', 'hill_higher', 'hill_lower'])->default('rectangle')->comment("地勢情報\nrectangle：長方形\nsquare：正方形\ntrapezoid：台形\nhill_higher：高台　高い\nhill_lower：高台　低い");
            $table->enum('vehicle', ['bus', 'monorail', 'train'])->default('bus')->comment("沿線・駅・交通");
            $table->timestamp('build_date')->comment('日付');
            $table->string('land_extention', 30)->nullable()->comment('敷地延長');
            
            $table->string('location1', 255)->comment('所在地名1');
            $table->string('location2', 255)->comment('所在地名2');
            $table->string('address', 255)->comment('番地');
            $table->string('es_name', 30)->nullable()->comment('建物名');
            $table->string('room_number', 30)->nullable()->comment('部屋番号');
            $table->string('nearest_line', 30)->nullable()->comment('最寄沿線');
            $table->string('station', 30)->nullable()->comment('最寄駅');
            $table->string('walk_meter', 10)->nullable()->comment('徒歩(m)');
            $table->string('walk_time', 10)->nullable()->comment('徒歩(分)');
            $table->string('bus', 30)->nullable()->comment('最寄バス');
            $table->string('bus_station', 30)->nullable()->comment('最寄バス停');
            $table->string('bus_meter', 10)->nullable()->comment('バス(m)');
            $table->string('bus_time', 10)->nullable()->comment('バス(分)');
            $table->string('child_school', 30)->comment('学区(小学校)');
            $table->string('middle_school', 30)->comment('学区(中学校)');
            $table->string('price', 10)->comment('価格');
            $table->string('tax_kind', 30)->nullable()->comment('消費税区分');
            $table->string('estate_deposit_month', 30)->nullable()->comment('敷金(カ月)');
            $table->string('estate_deposit_price', 30)->nullable()->comment('敷金(万円)');
            $table->string('tax_kind_month', 30)->nullable()->comment('礼金(カ月)');
            $table->string('tax_kind_price', 30)->nullable()->comment('礼金(万円)');
            $table->string('flooring_price', 30)->nullable()->comment('敷引(万円)');
            $table->string('flooring_month', 30)->nullable()->comment('敷引(カ月)');
            $table->string('flooring_real_price', 30)->nullable()->comment('敷引(実費)');
            $table->string('deposit_mounth', 30)->nullable()->comment('保証金(カ月)');
            $table->string('deposit_price', 30)->nullable()->comment('保証金(万円)');
            $table->string('deposit_redemption', 30)->nullable()->comment('保証金償却');
            $table->string('deposit_redemption_per', 30)->nullable()->comment('保証金償却(%)');
            $table->string('key_money', 30)->nullable()->comment('権利金(万円)');
            $table->string('trancefer_feature', 30)->nullable()->comment('造作譲渡(万円)');
            $table->string('management_fee', 30)->nullable()->comment('管理費');
            $table->string('reserve_fee', 30)->nullable()->comment('積立費');
            $table->string('common_service_fee', 30)->nullable()->comment('共益費');
            $table->string('sundry', 30)->nullable()->comment('雑費');
            $table->string('lease_fee', 30)->nullable()->comment('借地料');
            $table->double('tsubo_price',8,4)->comment('坪単価(万円)');
            $table->string('land_rights', 30)->comment('土地権利');
            $table->double('land_area', 8,2)->comment('土地面積');
            $table->string('driveway_area', 30)->nullable()->comment('私道面積');
            $table->string('measurement_method', 30)->nullable()->comment('計測方式');
            $table->double('building_ex_area', 8,2)->comment('建物専有面積');
            $table->string('balcony_area', 30)->nullable()->comment('バルコニー面積');
            $table->string('balcony_dir', 30)->nullable()->comment('バルコニー方向');
            $table->string('leasehold', 30)->comment('借地権種類');
            $table->string('building_lease_category', 30)->nullable()->comment('建物賃貸借区分');
            $table->string('building_const', 30)->comment('建物建造');
            $table->string('ground_level', 30)->nullable()->comment('地上階層');
            $table->string('underground_level', 30)->nullable()->comment('地下階層');
            $table->string('location_floor', 30)->nullable()->comment('所在階');
            $table->string('houses', 30)->nullable()->comment('戸数');
            $table->string('build_year', 30)->comment('築年月(年)');
            $table->string('build_mounth', 30)->comment('築年月(月)');
            $table->string('floor_plan', 30)->comment('間取り');
            $table->string('floor_plan_kind', 30)->nullable()->comment('間取り内訳');
            $table->string('building_ratio', 30)->nullable()->comment('建ぺい率');
            $table->string('floor_area_ratio', 30)->nullable()->comment('容積率');
            $table->string('landmark', 30)->nullable()->comment('地目');
            $table->string('city_plan', 30)->nullable()->comment('都市計画');
            $table->string('use_area', 30)->nullable()->comment('用途地域');
            $table->string('best_use', 30)->nullable()->comment('最適用途');
            $table->string('land_law', 30)->nullable()->comment('国土法');
            $table->string('current_situation', 30)->comment('現況');
            $table->string('delivery_time', 30)->comment('引渡し可能時期');
            $table->string('delivery_time_year', 30)->nullable()->comment('引渡し可能時期(年)');
            $table->string('delivery_time_mounth', 30)->nullable()->comment('引渡し可能時期(月)');
            $table->string('delivery_time_season', 30)->nullable()->comment('引渡し可能時期(旬)');
            $table->string('way1', 30)->nullable()->comment('接道1');
            $table->string('way2', 30)->nullable()->comment('接道2');
            $table->string('way3', 30)->nullable()->comment('接道3');
            $table->string('way_situation', 30)->nullable()->comment('接道状況');
            $table->string('parking', 30)->nullable()->comment('駐車場有無');
            $table->string('parking_price', 30)->nullable()->comment('駐車場料金(円)');
            $table->string('parking_month_price', 30)->nullable()->comment('駐車場料金(ヶ月)');
            $table->string('parking_10k_price', 30)->nullable()->comment('駐車場料金(万円)');
            $table->string('remarks', 30)->nullable()->comment('備考');
            $table->string('conditions', 30)->nullable()->comment('条件等');
            $table->string('building_confirm', 30)->nullable()->comment('建築確認');
            $table->string('notice1', 30)->nullable()->comment('特記事項1');
            $table->string('notice2', 30)->nullable()->comment('特記事項2');
            $table->string('notice3', 30)->nullable()->comment('特記事項3');
            $table->string('notice4', 30)->nullable()->comment('特記事項4');
            $table->string('notice5', 30)->nullable()->comment('特記事項5');
            $table->string('insurance', 30)->nullable()->comment('保険加入義務');
            $table->string('insurance_year', 30)->nullable()->comment('保険期間(年)');
            $table->string('insurance_price', 30)->nullable()->comment('保険期間(円)');
            $table->string('transaction', 30)->nullable()->comment('取引態様');
            $table->string('fee_landload', 30)->nullable()->comment('手数料負担(貸主)');
            $table->string('fee_borrower', 30)->nullable()->comment('手数料負担(借主)');
            $table->string('fee_allocation_origin', 30)->nullable()->comment('手数料配分(元付)');
            $table->string('fee_allocation_customer', 30)->nullable()->comment('手数料配分(客付)');
            $table->string('reward', 30)->nullable()->comment('報酬形態');
            $table->string('commission_per', 30)->nullable()->comment('手数料(率)');
            $table->string('commission_price', 30)->nullable()->comment('手数料(金額)');
            $table->string('contract_period', 30)->nullable()->comment('契約期間');
            $table->timestamp('closing_date')->nullable()->comment('成約日');
            $table->string('closing_price', 30)->nullable()->comment('成約価格');
            
            $table->json('images', 255)->nullable()->comment('画像');
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
        Schema::dropIfExists('estate_infos');
    }
};
