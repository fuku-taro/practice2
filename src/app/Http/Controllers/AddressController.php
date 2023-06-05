<?php

namespace App\Http\Controllers;

use App\Models\Address;
use Illuminate\Http\Request;

class AddressController extends Controller
{
    public function getAddresses()
    {
        // すべての住所データを取得する例
        $addresses = Address::all();

        // 住所データをビューに渡して表示する例
        return view('Result', compact('addresses'));
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
