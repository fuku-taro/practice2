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
    public function getAllEstateInfos(Request $request)
    {
        $params = $request->all();

        Log::debug($params);
        
        $data = DB::table("estate_infos")
            // ->join("estate_infos","addresses.id","=","estate_infos.address_id")
            // ->where("addresses.location1","=",$params["location1"])
            // ->select("addresses.location1","addresses.location2","estate_infos.nearest_line")
            ->select('*')
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

    public function searchEstateInfos(Request $request, $labels)
    {
    // キーワード検索
    // if (empty($filter['inKeyword']) == false) {
    //     $query->where(function ($query) use ($filter) {
            // foreach ($labels as $keyword) {
            //     $query->orWhere('profile->skill->title', 'like', '%' . $this->escape_like($keyword) . '%')
            //         ->orWhere('profile->skill->suggest', 'like', '%' . $this->escape_like($keyword) . '%');
            //     }
        //     });
        // }
    }
    /**
     * like句をエスケープする
     */
    function escape_like(string $value, string $char = '\\'): string
    {
        return str_replace(
            [$char, '%', '_'],
            [$char . $char, $char . '%', $char . '_'],
            $value
        );
    }
    public function createEstateInfos(Request $request)
    {
        $params = $request->all();

        // モデルを使ってデータを登録
        $estateInfo = EstateInfo::create($params);

        // 登録が成功した場合の処理
        return response()->json(['message' => '登録が成功しました', 'data' => $estateInfo], 201);
    }
}
