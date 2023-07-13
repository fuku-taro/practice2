<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\estateInfo; // 使用するモデルをインポート
use App\Http\Controllers\AddressController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
// データの取得
Route::get('/data', function () {
    $data = estateInfo::all();
    foreach($data as $d){
        $d->images = json_decode($d->images);;
    }
    return response()->json($data);
});

Route::get('/getEstateInfos', [AddressController::class, 'getEstateInfos']);
Route::get('/getAddresses', [AddressController::class, 'getAddresses']);

// データの作成
Route::post('/data', function (Request $request) {
    $data = new estateInfo;
    $data->column1 = $request->input('column1');
    $data->column2 = $request->input('column2');
    // 他のカラムも追加
    $data->save();
    return response()->json(['message' => 'Data created successfully']);
});

// データの更新
Route::put('/data/{id}', function (Request $request, $id) {
    $data = estateInfo::find($id);
    $data->column1 = $request->input('column1');
    $data->column2 = $request->input('column2');
    // 他のカラムも更新
    $data->save();
    return response()->json(['message' => 'Data updated successfully']);
});

// データの削除
Route::delete('/data/{id}', function ($id) {
    $data = estateInfo::find($id);
    $data->delete();
    return response()->json(['message' => 'Data deleted successfully']);
});

