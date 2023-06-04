<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Address;
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

        $nearest_line = [
            "福岡市空港線",
            "西日本鉄道貝塚線",
            "福岡市七隈線",
            "西鉄天神大牟田線",
        ];
        $station = [
            "姪浜",
            "唐の原",
            "六本松",
            "三苫",
            "西鉄平尾",
            "金山",
        ];
        $use_area = [
            "一種住居",
            "一種中高層",
            "一種低層",
            "",
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
            'build_year'=>fake()->numberBetween($min=1900,$max=2023),
            'build_mounth'=>fake()->numberBetween($min=0,$max=80),
            'floor_plan'=>"2SDK",
            'building_const'=>"木造", 
            'leasehold'=>"所有権",
            'building_ex_area'=>fake()->numberBetween($min=4.0000,$max=100.0000),
            'tsubo_price'=>fake()->numberBetween($min=4.0000,$max=100.0000),
            'land_rights'=>"所有権", 
            'land_area'=>fake()->numberBetween($min=4.0000,$max=100.0000),
            'price'=>fake()->numberBetween($min=100,$max=1000),
            'child_school'=>"小学校",
            'middle_school'=>"中学校",
            'nearest_line'=>fake()->randomElement($nearest_line),
            'station'=>fake()->randomElement($station),
            'use_area'=>fake()->randomElement($use_area),
            'walk_time'=>fake()->numberBetween($min=1,$max=30),

            'images'=>json_encode($images),

            'address_id' => $addressId
        ];
    }
}
