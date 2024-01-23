<?php


namespace App\Http\Controllers;


use App\Helpers\Helpers;
use App\Models\Country;
use App\Models\Fixture;
use App\Models\League;
use App\Models\LottoFixture;
use App\Models\LottoFixtureItem;
use App\Models\PlayingFixture;
use App\Models\Team;
use App\Models\User;
use App\Services\FootballAPIService;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Session;

class FrontController extends Controller
{

    public function home(Request $request)
    {
        if (is_null($request->get('date'))) {
            $date_ = Carbon::today()->format('Y-m-d');
            $timestamp = Carbon::today()->getTimestamp();
        } else {
            $date_ = $request->get('date');
            $timestamp = Carbon::parse($date_)->getTimestamp();
        }
        $data = LottoFixture::all();
        logger($data);
        return view('home', [
            "lotto_fixtures" => $data,
            'date' => $date_
        ]);
    }
    public function game(Request $request,$id)
    {
        $address=Session::get("address");
        $data = LottoFixtureItem::query()->where(['lotto_fixture_id'=>$id])->get();
        return view('game', [
            "fixtures" => $data,
            "address"=>$address
        ]);

    }
    public function configuration(Request $request)
    {
        if (is_null($request->get('date'))) {
            $date_ = Carbon::today()->format('Y-m-d');
            $timestamp = Carbon::today()->getTimestamp();
        } else {
            $date_ = $request->get('date');
            $timestamp = Carbon::parse($date_)->getTimestamp();
        }
        $data = Fixture::query()->where(['day_timestamp' => $timestamp])->whereNotIn("st_short", ["CANC", "PST"])
            ->distinct()->get();
        return view('configuration', [
            "fixtures" => $data,
            'date' => $date_
        ]);

    }
    public function login(){
        return view('next_login', []);
    }
    public function register(Request $request){
        $isLogged=false;
        $id= $request->get("id");
        return view('register', [
            "id"=>$id,
        ]);
    }
    function register_ajax(Request $request){
        $user=new User();
        $user->name=$request->get("id");
        $user->address=$request->get("address");
        $user->parain_address=$request->get("address_parent");
        $user->save();
        return response()->json(['data' =>  $user, 'status'=> true]);
    }
    function check_register(Request $request){
        $is_in=false;
        $address=$request->get("address");
        $user=User::query()->firstWhere(['address'=>$address]);
        if (!is_null($user)){
            $is_in=true;
        }
        return response()->json(['is_in' =>  $is_in, 'status'=> true]);
    }
    function login_next(Request $request){
        $id=$request->get("id");
        $address=$request->get("address");
        $user=User::query()->firstWhere(['address'=>$address]);
        if (!is_null($user)){
            if (is_null($user->id_contract)){
                $user->id_contract=$request->get("id");
                $user->save();
            }
            Session::put("id_connect",$id);
            Session::put("address_connect",$address);
            return response()->json(['data' =>  [], 'status'=> 200],200);
        }else{
            return response()->json(['data' =>  [], 'status'=> 405],405);
        }


    }
    public function postConbinaison(Request $request)
    {
        $data = json_decode($request->getContent(), true);
        $ob = $data['ob'];
        $loto_fixture=new LottoFixture();
        $loto_fixture->title=$data['title'];
        $end_time=$data['end_date'].' '.$data['end_time'];
        $loto_fixture->end_time=new \DateTime($end_time);
        $loto_fixture->save();

        for ($i = 0; $i < sizeof($ob); ++$i) {
            $item=new LottoFixtureItem();
            $item->fixture_id=$ob[$i]['id'];
            $item->lotto_fixture_id=$loto_fixture->id;
            $item->save();
        }
        return response()->json($ob);

    }
    public function postGame(Request $request)
    {
        $data = json_decode($request->getContent(), true);
        $ob = $data['ob'];
        $user=User::query()->firstWhere(['address'=>$data['address']]);
        for ($i = 0; $i < sizeof($ob); ++$i) {
            $item=new PlayingFixture();
            $item->value=$ob[$i]['value'];
            $item->user_id=$user->id;
            $item->loto_fixture_item_id=$ob[$i]['id'];
            $item->save();
        }
        return response()->json($ob);
    }
    public function getTeams(Request $request)
    {
        $data = json_decode($request->all(), true);
        $ob = $data['ob'];
        return response()->json($ob);

    }
}