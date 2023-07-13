<?php

namespace App\Http\Controllers;

use App\Models\estateInfo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class EstateInfoController extends Controller
{
    public function getEstateInfos(Request $request)
    {
        $params = $request->all();

        Log::debug($params);
        
        $data = DB::table("estate_infos")
            ->join("estate_infos","addresses.id","=","estate_infos.address_id")
            ->where("addresses.location1","=",$params["location1"])
            ->select("addresses.location1","addresses.location2","estate_infos.nearest_line")
            ->get();
            
            return response()->json([
                'result' => false,
                'data' => $data,
            ]);
            
        // すべての住所データを取得する例
        $estateInfo = estateInfo::all();
        // 住所データをビューに渡して表示する例
        // return view('Result', compact('addresses'));
    }

    public function showEstateInfos($id)
    {
        // 特定の住所データを取得する例
        $address = estateInfo::find($id);

        // 住所データをビューに渡して表示する例
        return view('Estate', compact('estateInfo'));
    }
}
