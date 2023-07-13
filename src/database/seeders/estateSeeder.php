<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\estateInfo;
class estateSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
                // Address テーブルのデータを先に生成するため、AddressSeeder を呼び出す
                // $this->call(AddressSeeder::class);

        // EstateInfo テーブルのデータを生成する
        estateInfo::factory(100)->create();
        // \App\Models\estateInfo::create([
        //     'id' => 1,
        //     'register_at'=>now(),
        //     'corp_tel'=>"05898797",
        //     'event'=>"売一戸建て住宅等　中古一戸建",
        //     'current_situation'=>"空家",
        //     'delivery_time'=>"相談",
        //     'build_year'=>"10",
        //     'build_mounth'=>"12",
        //     'floor_plan'=>"市街化区域",
        //     'building_const'=>"木造", 
        //     'leasehold'=>"所有権",
        //     'building_ex_area'=>"42.23",
        //     'tsubo_price'=>"200.98",
        //     'land_rights'=>"所有権", 
        //     'land_area'=>"100.01",
        //     'price'=>"100",
        //     'child_school'=>"小学校",
        //     'middle_school'=>"中学校",
        //     'location1'=>"福岡市　東区",
        //     'location2'=>"若宮１丁目",
        //     'address'=>"14-9"
        // ]);
    }
}
