<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\estateInfo; // 使用するモデルをインポート
use App\Http\Controllers\AddressController;
use App\Http\Controllers\EstateInfoController;

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
    $orderBy = request('order_by', 'price'); // クエリパラメーター "order_by" を取得し、デフォルトは "price"
    $orderDirection = request('order_direction', 'asc'); // クエリパラメーター "order_direction" を取得し、デフォルトは "asc"

    $data = estateInfo::orderBy($orderBy, $orderDirection)->get();

    foreach ($data as $d) {
        $d->images = json_decode($d->images);
    }

    return response()->json($data);
});
Route::get('/dataPriceASC', function () {
    $data = estateInfo::orderBy('price', 'ASC')->get();
    foreach($data as $d){
        $d->images = json_decode($d->images);;
    }
    return response()->json($data);
});

Route::get('/dataPriceDESC', function () {
    $data = estateInfo::orderBy('price', 'DESC')->get();
    foreach($data as $d){
        $d->images = json_decode($d->images);;
    }
    return response()->json($data);
});

Route::get('/dataLand_areaASC', function () {
    $data = estateInfo::orderBy('land_area', 'ASC')->get();
    foreach($data as $d){
        $d->images = json_decode($d->images);;
    }
    return response()->json($data);
});

Route::get('/dataLand_areaDESC', function () {
    $data = estateInfo::orderBy('land_area', 'DESC')->get();
    foreach($data as $d){
        $d->images = json_decode($d->images);;
    }
    return response()->json($data);
});

Route::get('/dataBuilding_ex_areaASC', function () {
    $data = estateInfo::orderBy('building_ex_area', 'ASC')->get();
    foreach($data as $d){
        $d->images = json_decode($d->images);;
    }
    return response()->json($data);
});

Route::get('/dataBuilding_ex_areaDESC', function () {
    $data = estateInfo::orderBy('building_ex_area', 'DESC')->get();
    foreach($data as $d){
        $d->images = json_decode($d->images);;
    }
    return response()->json($data);
});

Route::get('/dataRregister_atASC', function () {
    $data = estateInfo::orderBy('register_at', 'ASC')->get();
    foreach($data as $d){
        $d->images = json_decode($d->images);;
    }
    return response()->json($data);
});

Route::get('/dataRegister_atDESC', function () {
    $data = estateInfo::orderBy('register_at', 'DESC')->get();
    foreach($data as $d){
        $d->images = json_decode($d->images);;
    }
    return response()->json($data);
});

Route::get('/getEstateInfos', [AddressController::class, 'getEstateInfos']);
Route::get('/getFukuokaAreaAddresses', [AddressController::class, 'getFukuokaAreaAddresses']);
Route::post('/getFukuokaAreaAddresses', [AddressController::class, 'getFukuokaAreaAddresses']);
Route::get('/getKitakyusyuAreaAddresses', [AddressController::class, 'getKitakyusyuAreaAddresses']);
Route::post('/getKitakyusyuAreaAddresses', [AddressController::class, 'getKitakyusyuAreaAddresses']);
Route::get('/getChikuhouAreaAddresses', [AddressController::class, 'getChikuhouAreaAddresses']);
Route::post('/getChikuhouAreaAddresses', [AddressController::class, 'getChikuhouAreaAddresses']);
Route::get('/getChikugoAreaAddresses', [AddressController::class, 'getChikugoAreaAddresses']);
Route::post('/getChikugoAreaAddresses', [AddressController::class, 'getChikugoAreaAddresses']);
Route::get('/getHokubuAreaAddresses', [AddressController::class, 'getHokubuAreaAddresses']);
Route::post('/getHokubuAreaAddresses', [AddressController::class, 'getHokubuAreaAddresses']);
Route::get('/getChubuAreaAddresses', [AddressController::class, 'getChubuAreaAddresses']);
Route::post('/getChubuAreaAddresses', [AddressController::class, 'getChubuAreaAddresses']);
Route::get('/getNanbuAreaAddresses', [AddressController::class, 'getNanbuAreaAddresses']);
Route::post('/getNanbuAreaAddresses', [AddressController::class, 'getNanbuAreaAddresses']);
Route::get('/getRitouAreaAddresses', [AddressController::class, 'getRitouAreaAddresses']);
Route::post('/getRitouAreaAddresses', [AddressController::class, 'getRitouAreaAddresses']);

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

