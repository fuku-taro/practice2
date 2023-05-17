<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

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
        $location1 = [
            "福岡市　東区",
            "福岡市　西区",
            "福岡市　南区",
            "福岡市　城南区"
        ];
        return [
            'id'=>fake()->numberBetween($min=90000000,$max=99999999),
            'register_at'=>fake()->dateTime,
            'corp_tel'=>fake()->phoneNumber(),
            'event'=>"売一戸建て住宅等　中古一戸建",
            'current_situation'=>"空家",
            'delivery_time'=>"相談",
            'build_year'=>fake()->numberBetween($min=1900,$max=2023),
            'build_mounth'=>fake()->numberBetween($min=0,$max=80),
            'floor_plan'=>"市街化区域",
            'building_const'=>"木造", 
            'leasehold'=>"所有権",
            'building_ex_area'=>fake()->numberBetween($min=4.0000,$max=100.0000),
            'tsubo_price'=>fake()->numberBetween($min=4.0000,$max=100.0000),
            'land_rights'=>"所有権", 
            'land_area'=>fake()->numberBetween($min=4.0000,$max=100.0000),
            'price'=>fake()->numberBetween($min=100,$max=1000),
            'child_school'=>"小学校",
            'middle_school'=>"中学校",
            'location1'=>fake()->randomElement($location1),
            'location2'=>fake()->address,
            'address'=>fake()->address,
        ];
    }
}
