<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Address;
use Illuminate\Support\Facades\Storage; // ファイルにアクセスするためにStorageファサードをインポート
use Illuminate\Support\Arr;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\estateInfo>
 */
class estateInfoFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {

        // JSONファイルからデータを読み込む
        // $fukuokaAreaData = Storage::get('fukuokaAreaData.json');
        // $chikugoAreaData = Storage::get('chikugoAreaData.json');
        // $chikuhouAreaData = Storage::get('chikuhouAreaData.json');
        // $kitakyusyuAreaData = Storage::get('kitakyusyuAreaData.json');
        $chubuAreaData = Storage::get('chubuAreaData.json');
        $hokubuAreaData = Storage::get('hokubuAreaData.json');
        $nanbuAreaData = Storage::get('nanbuAreaData.json');
        $ritouAreaData = Storage::get('ritouAreaData.json');
        // $fukuokaAreaData = json_decode($fukuokaAreaData, true);
        // $chikugoAreaData = json_decode($chikugoAreaData, true);
        // $chikuhouAreaData = json_decode($chikuhouAreaData, true);
        // $kitakyusyuAreaData = json_decode($kitakyusyuAreaData, true);
        $hokubuAreaData = json_decode($hokubuAreaData, true);
        $chubuAreaData = json_decode($chubuAreaData, true);
        $nanbuAreaData = json_decode($nanbuAreaData, true);
        $ritouAreaData = json_decode($ritouAreaData, true);

        // 2つのデータを結合して新しい配列を作成
        // $combinedData = array_merge($fukuokaAreaData, $kitakyusyuAreaData, $chikuhouAreaData, $chikugoAreaData);
        $combinedData = array_merge($hokubuAreaData, $chubuAreaData, $nanbuAreaData, $ritouAreaData);

        // 市名データを抽出
        $allCityNames = Arr::pluck($combinedData, 'cityName');

        // すべての町名データを取得
        $allTownNames = [];
        foreach ($combinedData as $cityData) {
            $townNames = Arr::pluck($cityData['data'], 'townNames');
            $allTownNames = array_merge($allTownNames, $townNames);
        }

        $nearest_line = [
            // "西日本鉄道貝塚線",
            // "七隈線",
            // "西鉄天神大牟田線",
            // "空港線",
            "モノレール",
            "バス",
        ];
        $station = [
            "那覇空港",
            "県庁前",
            "おもろまち",
            "石嶺",
            "北谷",
            // "金山",
            // "姪浜",
            // "唐の原",
            // "六本松",
            // "三苫",
            // "西鉄平尾",
            // "金山",
        ];
        $use_area = [
            "一種住居",
            "一種中高層",
            "一種低層",
            "",
        ];
        $location1 = [
            "福岡市東区",
            "福岡市西区",
            "福岡市南区",
            "福岡市城南区"
        ];
        $location2 = [
            "若宮５丁目",
            "大字脇山",
            "大楠１丁目",
            "東油山５丁目",
            "姪の浜２丁目",
            "和白４丁目",
            "六本松１丁目",
        ];
        $address = [
            "24-1",
            "13-10",
            "36-5",
            "4-3",
        ];
        $images = [
            "image000.jpg",
            "image001.jpg",
            "image002.jpg",
            "image003.jpg",
            "image004.jpg",
            "image005.jpg",
            "image006.jpg"
        ];
        shuffle($images);
        // Create a new Address record and get its ID
        $addressId = Address::factory()->create()->id;
        return [
            'estate_id'=>fake()->unique()->numberBetween($min=90000000,$max=99999999),
            'register_at'=>fake()->dateTime,
            'corp_tel'=>fake()->phoneNumber(),
            'event'=>"売一戸建て住宅等　中古一戸建",
            'current_situation'=>"空家",
            'delivery_time'=>"相談",
            'build_date'=>fake()->date(),
            'build_year'=>fake()->numberBetween($min=1900,$max=2023),
            'build_mounth'=>fake()->numberBetween($min=0,$max=80),
            'floor_plan'=>"2SDK",
            'building_const'=>"木造", 
            'leasehold'=>"所有権",
            'building_ex_area'=>fake()->numberBetween($min=4.0000,$max=100.0000),
            'tsubo_price'=>fake()->numberBetween($min=4.0000,$max=100.0000),
            'land_rights'=>"所有権", 
            'land_area'=>fake()->numberBetween($min=4.0000,$max=100.0000),
            'price'=>fake()->numberBetween($min=1000,$max=10000),
            'child_school'=>"小学校",
            'middle_school'=>"中学校",
            'nearest_line'=>fake()->randomElement($nearest_line),
            'station'=>fake()->randomElement($station),
            'use_area'=>fake()->randomElement($use_area),
            'walk_time'=>fake()->numberBetween($min=1,$max=30),
            'location1'=>fake()->randomElement($allCityNames),
            'location2'=>fake()->randomElement($allTownNames),
            'address'=>fake()->randomElement($address),

            'images'=>json_encode($images),

            // 'address_id' => $addressId
        ];
    }
}
