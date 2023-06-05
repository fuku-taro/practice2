<?php

namespace App\Http\Controllers;

use App\Models\Address;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;


class AddressController extends Controller
{
    public function getAddresses(Request $request)
    {
        $params = $request->all();

        Log::debug($params);
        
        $data = DB::table("addresses")
            ->join("estate_infos","addresses.id","=","estate_infos.address_id")
            ->where("addresses.location1","=",$params["location1"])
            ->select("addresses.location1","addresses.location2","estate_infos.nearest_line")
            ->get();
            
            return response()->json([
                'result' => false,
                'data' => $data,
            ]);
            
        // すべての住所データを取得する例
        $addresses = Address::all();
        // 住所データをビューに渡して表示する例
        // return view('Result', compact('addresses'));
    }

    public function showAddresses($id)
    {
        // 特定の住所データを取得する例
        $address = Address::find($id);

        // 住所データをビューに渡して表示する例
        return view('Estate', compact('address'));
    }

    // 他のアクションやメソッドを追加することもできます
}
