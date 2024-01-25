<?php


namespace App\Http\Controllers;


use App\Models\GamePlay;
use App\Models\LottoFixture;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;

class DashboardController extends Controller
{

    public function dashboard(Request $request)
    {
        $address=Session::get("address_connect");
        return view('account.dashboard', [
            "address"=>$address,
            'route'=>"dashboard"
        ]);
    }
    public function myGame(Request $request)
    {
        $address=Session::get("address_connect");
        $user=User::query()->firstWhere(['address'=>$address]);
        $mygames=GamePlay::query()->where(['user_id'=>$user->id])->get();
        return view('account.mygame', [
            "address"=>$address,
            'mygames'=>$mygames,
            'route'=>"mygame"
        ]);
    }
    public function identity(Request $request)
    {
        $address=Session::get("address_connect");
        return view('account.identity', [
            "address"=>$address,
            'route'=>"dashboard"
        ]);
    }
    public function logout(Request $request)
    {
        Session::remove("address_connect");
        Session::remove("id_connect");
        return redirect("/");
    }
}
