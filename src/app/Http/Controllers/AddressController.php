<?php

namespace App\Http\Controllers;

use App\Models\PostalCode;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class AddressController extends Controller
{
    // JSONデータをstorageフォルダに保存するメソッド
    private function saveHokubuJsonData($data)
    {
        // JSONデータをエンコードしてファイルに保存
        $jsonData = json_encode($data, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
        $filename = 'hokubuAreaData.json';
        $filepath = storage_path('app/' . $filename);

        try {
            file_put_contents($filepath, $jsonData);
            Log::info('JSON data saved successfully.');
        } catch (\Exception $e) {
            Log::error('Failed to save JSON data: ' . $e->getMessage());
        }
    }

    // JSONデータをstorageフォルダに保存するメソッド
    private function saveChubuJsonData($data)
    {
        // JSONデータをエンコードしてファイルに保存
        $jsonData = json_encode($data, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
        $filename = 'chubuAreaData.json';
        $filepath = storage_path('app/' . $filename);

        try {
            file_put_contents($filepath, $jsonData);
            Log::info('JSON data saved successfully.');
        } catch (\Exception $e) {
            Log::error('Failed to save JSON data: ' . $e->getMessage());
        }
    }

    // JSONデータをstorageフォルダに保存するメソッド
    private function saveNanbuJsonData($data)
    {
        // JSONデータをエンコードしてファイルに保存
        $jsonData = json_encode($data, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
        $filename = 'nanbuAreaData.json';
        $filepath = storage_path('app/' . $filename);

        try {
            file_put_contents($filepath, $jsonData);
            Log::info('JSON data saved successfully.');
        } catch (\Exception $e) {
            Log::error('Failed to save JSON data: ' . $e->getMessage());
        }
    }

    // JSONデータをstorageフォルダに保存するメソッド
    private function saveRitouJsonData($data)
    {
        // JSONデータをエンコードしてファイルに保存
        $jsonData = json_encode($data, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
        $filename = 'ritouAreaData.json';
        $filepath = storage_path('app/' . $filename);

        try {
            file_put_contents($filepath, $jsonData);
            Log::info('JSON data saved successfully.');
        } catch (\Exception $e) {
            Log::error('Failed to save JSON data: ' . $e->getMessage());
        }
    }

    public function getHokubuAreaAddresses(Request $request)
    {
        // JavaScriptから送信されたJSONデータを受け取る
        $hokubuAreaJson = $request->input('hokubuAreaJson');
        // Log::debug($hokubuAreaJson);

        // JSONデータをPHPの配列にデコードする
        $hokubuArea = json_decode($hokubuAreaJson, true);
        // Log::debug($hokubuArea);

        
        // kitakyusyuCityとotherCityの全てのcityNameを取得
        $allCityNames = [];
        foreach ($hokubuArea as $area) {
            Log::debug($area);
            foreach ($area as $cities) {
                foreach ($cities as $city) {
                    if (isset($city)) {
                        $allCityNames[] = $city;
                    }
                }
            }
        }

        // cityNameが空の場合はエラー処理
        if (empty($allCityNames)) {
            Log::error('City names not found in hokubuArea');
            return response()->json(['error' => 'City names not found in hokubuArea']);
        }
        // fukuokaCityとotherCityごとにクエリを実行し、結果を別々の配列に格納
        $queryResults = [];
        foreach ($hokubuArea as $area) {
            foreach ($area as $cities) {
                foreach ($cities as $city) {
                    if (isset($city)) {
                        $cityName = $city;
                        // 「市」「町」「村」「島」を空文字列に置換してクエリに使う
                        $cityNameForQuery = str_replace(['市', '町', '村', '島'], '', $cityName);
                        $data = DB::table('postal_codes')
                                    ->select('postal_codes.town as townNames')
                                    ->where('postal_codes.city', 'LIKE', '%'.$cityNameForQuery.'%')
                                    ->where('postal_codes.town', '!=', '以下に掲載がない場合')
                                    ->orderBy('postal_codes.town_furi', 'ASC')
                                    ->get();
                        $queryResults[] = [
                            'cityName' => $cityName,
                            'data' => $data,
                        ];
                    }
                }
            }
        }

        // JSONデータをstorageフォルダに保存する
        // $this->saveHokubuJsonData($queryResults);

        return response()->json([
            'result' => true,
            'data' => $queryResults,
        ]);
    }

    public function getChubuAreaAddresses(Request $request)
    {
        // JavaScriptから送信されたJSONデータを受け取る
        $chubuAreaJson = $request->input('chubuAreaJson');
        // Log::debug($chubuAreaJson);

        // JSONデータをPHPの配列にデコードする
        $chubuArea = json_decode($chubuAreaJson, true);
        // Log::debug($chubuArea);

        
        // kitakyusyuCityとotherCityの全てのcityNameを取得
        $allCityNames = [];
        foreach ($chubuArea as $area) {
            Log::debug($area);
            foreach ($area as $cities) {
                foreach ($cities as $city) {
                    if (isset($city)) {
                        $allCityNames[] = $city;
                    }
                }
            }
        }

        // cityNameが空の場合はエラー処理
        if (empty($allCityNames)) {
            Log::error('City names not found in chubuArea');
            return response()->json(['error' => 'City names not found in chubuArea']);
        }
        // fukuokaCityとotherCityごとにクエリを実行し、結果を別々の配列に格納
        $queryResults = [];
        foreach ($chubuArea as $area) {
            foreach ($area as $cities) {
                foreach ($cities as $city) {
                    if (isset($city)) {
                        $cityName = $city;
                        // 「市」「町」「村」「島」を空文字列に置換してクエリに使う
                        $cityNameForQuery = str_replace(['市', '町', '村', '島'], '', $cityName);
                        $data = DB::table('postal_codes')
                                    ->select('postal_codes.town as townNames')
                                    ->where('postal_codes.city', 'LIKE', '%'.$cityNameForQuery.'%')
                                    ->where('postal_codes.town', '!=', '以下に掲載がない場合')
                                    ->orderBy('postal_codes.town_furi', 'ASC')
                                    ->get();
                        $queryResults[] = [
                            'cityName' => $cityName,
                            'data' => $data,
                        ];
                    }
                }
            }
        }

        // JSONデータをstorageフォルダに保存する
        // $this->saveChubuJsonData($queryResults);

        return response()->json([
            'result' => true,
            'data' => $queryResults,
        ]);
    }

    public function getNanbuAreaAddresses(Request $request)
    {
        // JavaScriptから送信されたJSONデータを受け取る
        $nanbuAreaJson = $request->input('nanbuAreaJson');
        // Log::debug($nanbuAreaJson);

        // JSONデータをPHPの配列にデコードする
        $nanbuArea = json_decode($nanbuAreaJson, true);
        // Log::debug($nanbuArea);

        
        // kitakyusyuCityとotherCityの全てのcityNameを取得
        $allCityNames = [];
        foreach ($nanbuArea as $area) {
            Log::debug($area);
            foreach ($area as $cities) {
                foreach ($cities as $city) {
                    if (isset($city)) {
                        $allCityNames[] = $city;
                    }
                }
            }
        }

        // cityNameが空の場合はエラー処理
        if (empty($allCityNames)) {
            Log::error('City names not found in nanbuArea');
            return response()->json(['error' => 'City names not found in nanbuArea']);
        }
        // fukuokaCityとotherCityごとにクエリを実行し、結果を別々の配列に格納
        $queryResults = [];
        foreach ($nanbuArea as $area) {
            foreach ($area as $cities) {
                foreach ($cities as $city) {
                    if (isset($city)) {
                        $cityName = $city;
                        // 「市」「町」「村」「島」を空文字列に置換してクエリに使う
                        $cityNameForQuery = str_replace(['市', '町', '村', '島'], '', $cityName);
                        $data = DB::table('postal_codes')
                                    ->select('postal_codes.town as townNames')
                                    ->where('postal_codes.city', 'LIKE', '%'.$cityNameForQuery.'%')
                                    ->where('postal_codes.town', '!=', '以下に掲載がない場合')
                                    ->orderBy('postal_codes.town_furi', 'ASC')
                                    ->get();
                        $queryResults[] = [
                            'cityName' => $cityName,
                            'data' => $data,
                        ];
                    }
                }
            }
        }

        // JSONデータをstorageフォルダに保存する
        // $this->saveNanbuJsonData($queryResults);

        return response()->json([
            'result' => true,
            'data' => $queryResults,
        ]);
    }

    public function getRitouAreaAddresses(Request $request)
    {
        // JavaScriptから送信されたJSONデータを受け取る
        $ritouAreaJson = $request->input('ritouAreaJson');
        // Log::debug($ritouAreaJson);

        // JSONデータをPHPの配列にデコードする
        $ritouArea = json_decode($ritouAreaJson, true);
        // Log::debug($ritouArea);

        
        // kitakyusyuCityとotherCityの全てのcityNameを取得
        $allCityNames = [];
        foreach ($ritouArea as $area) {
            Log::debug($area);
            foreach ($area as $cities) {
                foreach ($cities as $city) {
                    if (isset($city)) {
                        $allCityNames[] = $city;
                    }
                }
            }
        }

        // cityNameが空の場合はエラー処理
        if (empty($allCityNames)) {
            Log::error('City names not found in ritouArea');
            return response()->json(['error' => 'City names not found in ritouArea']);
        }
        // fukuokaCityとotherCityごとにクエリを実行し、結果を別々の配列に格納
        $queryResults = [];
        foreach ($ritouArea as $area) {
            foreach ($area as $cities) {
                foreach ($cities as $city) {
                    if (isset($city)) {
                        $cityName = $city;
                        // 「市」「町」「村」「島」を空文字列に置換してクエリに使う
                        $cityNameForQuery = str_replace(['市', '町', '村', '島'], '', $cityName);
                        $data = DB::table('postal_codes')
                                    ->select('postal_codes.town as townNames')
                                    ->where('postal_codes.city', 'LIKE', '%'.$cityNameForQuery.'%')
                                    ->where('postal_codes.town', '!=', '以下に掲載がない場合')
                                    ->orderBy('postal_codes.town_furi', 'ASC')
                                    ->get();
                        $queryResults[] = [
                            'cityName' => $cityName,
                            'data' => $data,
                        ];
                    }
                }
            }
        }

        // JSONデータをstorageフォルダに保存する
        // $this->saveRitouJsonData($queryResults);

        return response()->json([
            'result' => true,
            'data' => $queryResults,
        ]);
    }

}
