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
        // $params = $request->only([
        //     'id',
        //     'estate_id',
        //     "closing_date",// 成約日
        //     "closing_price",// 成約価格
        //     "location1",// 所在地
        //     "location2",// 所在地
        //     "station",// 所在地モノレール
        //     "vehicle",// バス停
        //     "floor_plan",// 間取り
        //     "floor_plan_kind",// 間取り内訳
        //     "land_area",// 土地面積
        //     "driveway_area",// 私道面積
        //     "building_ex_area",// 建物面積
        //     "child_school",// 小学校
        //     "middle_school",//　中学校
        //     "ground_level",//階建て
        //     "land_rights",//土地権利
        //     "lease_fee",//借地代
        //     "lease_span",//借地期間
        //     "deposit_price",//保証金
        //     "key_money",//権利金
        //     "build_year",// 築年月
        //     "building_const",//建物建造
        //     "parking",//駐車場
        //     "parking_price", //駐車場料金
        //     "city_plan",// 都市計画
        //     "landmark",// 地目
        //     //２列目
        //     "building_ratio",// 建・要率
        //     "topography",//地勢
        //     "slope_area",//傾斜地面積
        //     "way_situation",//接道状況詳細
        //     "building_number",//建築番号
        //     "land_law",//国土法
        //     "law_limit",//法令制限
        //     "current_situation",//現況
        //     "conditions",//条件
        //     "re_building",//再構築
        //     "land_shape",//土地形状
        //     "land_extention",//敷地延長
        //     "incidental_rights",//付帯権利
        //     "possible_delivery_date",//引渡し可能時期
        //     "sale_overview",//分譲概要
        //     "facility",//設備
        //     "special_features",//特記態様
        //     "transaction",//特記態様
        //     "salesman",//担当者
        //     "salesman_tel",//担当者連絡先
        //     "other_lump_payments",//その他一時金
        //     "other_expenses",//その他費用
        //     "remarks",//備考
        // ]);
        //$params = $request->all();
        $params = $request->all();
        log::debug($request->all());
        $estate = $params['estate'];
        if(!isset($estate['vehicle']))$estate['vehicle'] = 'bus';

        if(!isset($estate['topography']))$estate['topography'] = 'square';

        if ($estate['topography'] == '台形'){
            $estate['topography'] = 'trapezoid';
        }
        if ($estate['topography'] == '正方形'){
            $estate['topography'] = 'square';
        }
        if ($estate['topography'] == '長方形'){
            $estate['topography'] = 'rectangle';
        }
        if ($estate['topography'] == '高台'){
            $estate['topography'] = 'hill_higher';
        }

        // モデルを使ってデータを登録
        $estateInfo = estateInfo::create($estate);

        // 登録が成功した場合の処理
        return response()->json(['message' => '登録が成功しました', 'data' => $estateInfo], 201);
    }
}
