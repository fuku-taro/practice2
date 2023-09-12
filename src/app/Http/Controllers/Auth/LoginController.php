<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;

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

    protected function authenticated(Request $request, $user)
{
    // トークンの生成と保存（Laravel Passportを使用）
    $token = $user->createToken('MyApp')->accessToken;

    // ログイン成功時のレスポンス
    return response()->json(['token' => $token, 'user' => $user]);
}

    // public function login()
    // {
        
    // }

    public function login (Request $request){
        $validator = Validator::make($request->all(), [
        'email' => '',
        'password' => '',
        ]);
        
        if($validator->fails())
        {
        return response()->json([
        'validation_errors' =>$validator->messages(),
        ]);
        }
        else
        {
        $user = User::where('email', $request->email)->first();
        
        if(!$user || !Hash::check($request->password,$user->password))
        {
        return response()->json([
        'status'=>401,
        'message'=>'Invalid Credentials',
        ]);
        }
        else
        {
        if($user->role_as == 1) //1 = admin
        {
        $role = 'admin';
        $token = $user->createToken($user->email.'_AdminToken',['server:admin'])->plainTextToken;
        }
        else
        {
        $role = '';
        $token = $user->createToken($user->email.'_Token', [''])->plainTextToken;
        }
        return response()->json([
        'status' =>200,
        'username' =>$user->name,
        'token' =>$token,
        'message' =>'Logged In Successfully',
        'role'=>$role,
        ]);
        }
        }
        }
}
