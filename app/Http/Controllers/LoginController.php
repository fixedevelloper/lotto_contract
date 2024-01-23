<?php


namespace App\Http\Controllers;



use App\Http\Requests\LoginRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;

class LoginController extends Controller
{
    public function deposit(Request $request)
    {
        $user_id=Session::get('register_id');
        if ($request->method()=="POST"){
            $user=User::query()->find($user_id);
            $user->activate=true;
            $user->save();
            Session::remove('register_id');
            return redirect()->route('login');
        }
        return view('login.deposit', []);

    }
    public function destroy(Request $request)
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }
    public function login(LoginRequest $loginRequest)
    {
        $loginRequest->authenticate();
        $bool = $loginRequest->authorize();
        if (!Auth::user()->activate){
         return  redirect()->route('deposit');
        }
        $loginRequest->session()->regenerate();
            return redirect()->route('dashboard');

    }
    public function register(Request $request)
    {
        if ($request->method()=="POST"){
            $user=new User();
            $user->name=$request->name;
            $user->email=$request->email;
            $user->password=bcrypt($request->get('password'));
            $user->save();
            Session::put('register_id',$user->id);
        }
        return redirect()->route('deposit');

    }
}
