<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Address>
 */
class AddressFactory extends Factory
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
        return [
            //
            'location1'=>fake()->randomElement($location1),
            'location2'=>fake()->randomElement($location2),
            'address'=>fake()->randomElement($address),
        ];
    }
}
