<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    // 以下のように authenticated メソッドを login に変更します
    public function login(Request $request)
{
    // リクエストからemailとpasswordを取得
    $formData = $request->only(['email', 'password']);

    // メールアドレスとパスワードでユーザーを認証
    if (Auth::attempt($formData)) {
        // 認証成功の場合
        $user = Auth::user();

        // アクセストークンの生成と保存（Laravel Passportを使用）
        $token = $user->createToken('MyApp')->accessToken;

        // ログイン成功時のレスポンス
        return response()->json(['token' => $token, 'user' => $user]);
    } else {
        // 認証失敗の場合
        return response()->json(['error' => '認証に失敗しました'], 401); // エラーレスポンスを返す
    }
}
}
