<?php

namespace App\Http\Controllers;

use App\Models\PostalCode;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class AddressController extends Controller
{
    public function getFukuokaAreaAddresses(Request $request)
    {
        // JavaScriptから送信されたJSONデータを受け取る
        $fukuokaAreaJson = $request->input('fukuokaAreaJson');
        // Log::debug($fukuokaAreaJson);

        // JSONデータをPHPの配列にデコードする
        $fukuokaArea = json_decode($fukuokaAreaJson, true);
        // Log::debug($fukuokaArea);

        // JSONデータからcityNameを取得
        // if (isset($fukuokaArea[0]['fukuokaCity'][0]['cityName'])) {
        //     $cityName = $fukuokaArea[0]['fukuokaCity'][0]['cityName'];
        // } else {
        //     // エラー処理
        //     Log::error('City name not found in fukuokaArea');
        //     return response()->json(['error' => 'City name not found in fukuokaArea']);
        // }

        // fukuokaCityとotherCityの全てのcityNameを取得
        $allCityNames = [];
        foreach ($fukuokaArea as $area) {
            foreach ($area as $cities) {
                foreach ($cities as $city) {
                    if (isset($city['cityName'])) {
                        $allCityNames[] = $city['cityName'];
                    }
                }
            }
        }

        // cityNameが空の場合はエラー処理
        if (empty($allCityNames)) {
            Log::error('City names not found in fukuokaArea');
            return response()->json(['error' => 'City names not found in fukuokaArea']);
        }
        // fukuokaCityとotherCityごとにクエリを実行し、結果を別々の配列に格納
        $queryResults = [];
        foreach ($fukuokaArea as $area) {
            foreach ($area as $cities) {
                foreach ($cities as $city) {
                    if (isset($city['cityName'])) {
                        $cityName = $city['cityName'];
                        $data = DB::table('postal_codes')
                            ->select(DB::raw("CONCAT(town, azachoume) AS townNames"))
                            ->where('city', $cityName)
                            ->where('town', '!=', '')
                            ->orderBy('town_furi', 'asc')
                            ->orderBy('azachoume', 'asc')
                            ->get();
                        // Log::debug($data);
                        // 空白のデータをフィルタリング
                        // $data = $data->filter(function ($item) {
                        //     return trim($item->townNames) !== '';
                        // });
                        $queryResults[] = [
                            'cityName' => $cityName,
                            'data' => $data,
                        ];
                    }
                }
            }
        }

        // JSONデータをstorageフォルダに保存する
        // $this->saveFukuokaJsonData($queryResults);

        return response()->json([
            'result' => true,
            'data' => $queryResults,
        ]);
    }

    // JSONデータをstorageフォルダに保存するメソッド
    private function saveFukuokaJsonData($data)
    {
        // JSONデータをエンコードしてファイルに保存
        $jsonData = json_encode($data, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
        $filename = 'fukuokaAreaData.json';
        $filepath = storage_path('app/' . $filename);

        try {
            file_put_contents($filepath, $jsonData);
            Log::info('JSON data saved successfully.');
        } catch (\Exception $e) {
            Log::error('Failed to save JSON data: ' . $e->getMessage());
        }
    }

    // JSONデータをstorageフォルダに保存するメソッド
    private function saveKitakyusyuJsonData($data)
    {
        // JSONデータをエンコードしてファイルに保存
        $jsonData = json_encode($data, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
        $filename = 'kitakyusyuAreaData.json';
        $filepath = storage_path('app/' . $filename);

        try {
            file_put_contents($filepath, $jsonData);
            Log::info('JSON data saved successfully.');
        } catch (\Exception $e) {
            Log::error('Failed to save JSON data: ' . $e->getMessage());
        }
    }

    // JSONデータをstorageフォルダに保存するメソッド
    private function savechikuhouJsonData($data)
    {
        // JSONデータをエンコードしてファイルに保存
        $jsonData = json_encode($data, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
        $filename = 'chikuhouAreaData.json';
        $filepath = storage_path('app/' . $filename);

        try {
            file_put_contents($filepath, $jsonData);
            Log::info('JSON data saved successfully.');
        } catch (\Exception $e) {
            Log::error('Failed to save JSON data: ' . $e->getMessage());
        }
    }

    // JSONデータをstorageフォルダに保存するメソッド
    private function saveChikugoJsonData($data)
    {
        // JSONデータをエンコードしてファイルに保存
        $jsonData = json_encode($data, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
        $filename = 'chikugoAreaData.json';
        $filepath = storage_path('app/' . $filename);

        try {
            file_put_contents($filepath, $jsonData);
            Log::info('JSON data saved successfully.');
        } catch (\Exception $e) {
            Log::error('Failed to save JSON data: ' . $e->getMessage());
        }
    }

    public function getKitakyusyuAreaAddresses(Request $request)
    {
        // JavaScriptから送信されたJSONデータを受け取る
        $kitakyusyuAreaJson = $request->input('kitakyusyuAreaJson');
        // Log::debug($kitakyusyuAreaJson);

        // JSONデータをPHPの配列にデコードする
        $kitakyusyuArea = json_decode($kitakyusyuAreaJson, true);
        // Log::debug($kitakyusyuArea);

        
        // kitakyusyuCityとotherCityの全てのcityNameを取得
        $allCityNames = [];
        foreach ($kitakyusyuArea as $area) {
            foreach ($area as $cities) {
                foreach ($cities as $city) {
                    if (isset($city['cityName'])) {
                        $allCityNames[] = $city['cityName'];
                    }
                }
            }
        }

        // cityNameが空の場合はエラー処理
        if (empty($allCityNames)) {
            Log::error('City names not found in kitakyusyuArea');
            return response()->json(['error' => 'City names not found in kitakyusyuArea']);
        }
        // fukuokaCityとotherCityごとにクエリを実行し、結果を別々の配列に格納
        $queryResults = [];
        foreach ($kitakyusyuArea as $area) {
            foreach ($area as $cities) {
                foreach ($cities as $city) {
                    if (isset($city['cityName'])) {
                        $cityName = $city['cityName'];
                        $data = DB::table('postal_codes')
                            ->select(DB::raw("CONCAT(town, azachoume) AS townNames"))
                            ->where('city', $cityName)
                            ->where('town', '!=', '')
                            ->orderBy('town_furi', 'asc')
                            ->orderBy('azachoume', 'asc')
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
        // $this->saveKitakyusyuJsonData($queryResults);

        return response()->json([
            'result' => true,
            'data' => $queryResults,
        ]);
    }

    public function getChikuhouAreaAddresses(Request $request)
    {
        // JavaScriptから送信されたJSONデータを受け取る
        $chikuhouAreaJson = $request->input('chikuhouAreaJson');
        // Log::debug($chikuhouAreaJson);

        // JSONデータをPHPの配列にデコードする
        $chikuhouArea = json_decode($chikuhouAreaJson, true);
        // Log::debug($chikuhouArea);

        
        // kitakyusyuCityとotherCityの全てのcityNameを取得
        $allCityNames = [];
        foreach ($chikuhouArea as $area) {
            foreach ($area as $cities) {
                foreach ($cities as $city) {
                    if (isset($city['cityName'])) {
                        $allCityNames[] = $city['cityName'];
                    }
                }
            }
        }

        // cityNameが空の場合はエラー処理
        if (empty($allCityNames)) {
            Log::error('City names not found in chikuhouArea');
            return response()->json(['error' => 'City names not found in chikuhouArea']);
        }
        // fukuokaCityとotherCityごとにクエリを実行し、結果を別々の配列に格納
        $queryResults = [];
        foreach ($chikuhouArea as $area) {
            foreach ($area as $cities) {
                foreach ($cities as $city) {
                    if (isset($city['cityName'])) {
                        $cityName = $city['cityName'];
                        $data = DB::table('postal_codes')
                            ->select(DB::raw("CONCAT(town, azachoume) AS townNames"))
                            ->where('city', $cityName)
                            ->where('town', '!=', '')
                            ->orderBy('town_furi', 'asc')
                            ->orderBy('azachoume', 'asc')
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
        // $this->saveChikuhouJsonData($queryResults);

        return response()->json([
            'result' => true,
            'data' => $queryResults,
        ]);
    }

    public function getChikugoAreaAddresses(Request $request)
    {
        // JavaScriptから送信されたJSONデータを受け取る
        $chikugoAreaJson = $request->input('chikugoAreaJson');
        // Log::debug($chikugoAreaJson);

        // JSONデータをPHPの配列にデコードする
        $chikugoArea = json_decode($chikugoAreaJson, true);
        // Log::debug($chikugoArea);

        
        // kitakyusyuCityとotherCityの全てのcityNameを取得
        $allCityNames = [];
        foreach ($chikugoArea as $area) {
            foreach ($area as $cities) {
                foreach ($cities as $city) {
                    if (isset($city['cityName'])) {
                        $allCityNames[] = $city['cityName'];
                    }
                }
            }
        }

        // cityNameが空の場合はエラー処理
        if (empty($allCityNames)) {
            Log::error('City names not found in chikugoArea');
            return response()->json(['error' => 'City names not found in chikugoArea']);
        }
        // fukuokaCityとotherCityごとにクエリを実行し、結果を別々の配列に格納
        $queryResults = [];
        foreach ($chikugoArea as $area) {
            foreach ($area as $cities) {
                foreach ($cities as $city) {
                    if (isset($city['cityName'])) {
                        $cityName = $city['cityName'];
                        $data = DB::table('postal_codes')
                            ->select(DB::raw("CONCAT(town, azachoume) AS townNames"))
                            ->where('city', $cityName)
                            ->where('town', '!=', '')
                            ->orderBy('town_furi', 'asc')
                            ->orderBy('azachoume', 'asc')
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
        // $this->saveChikugoJsonData($queryResults);

        return response()->json([
            'result' => true,
            'data' => $queryResults,
        ]);
    }
}
