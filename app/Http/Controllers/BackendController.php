<?php


namespace App\Http\Controllers;


use App\Models\Fixture;
use App\Models\LottoFixture;
use App\Models\LottoFixtureItem;
use Carbon\Carbon;
use Illuminate\Http\Request;

class BackendController extends Controller
{
    public function lotto_fixture_list(Request $request)
    {
        if (is_null($request->get('date'))) {
            $date_ = Carbon::today()->format('Y-m-d');
            $timestamp = Carbon::today()->getTimestamp();
        } else {
            $date_ = $request->get('date');
            $date_ = Carbon::parse($date_)->format('Y-m-d');
        }
        $end_date=Carbon::parse($date_)->addDays(1)->format('Y-m-d');
        $data = LottoFixture::query()->whereBetween('end_time',[$date_,$end_date])->get();
        logger($data);
        return view('backend.fixture_list', [
            'lis_fixtures'=>$data,
            'route'=>"lis_fixtures",
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
        return view('backend.configuration', [
            "fixtures" => $data,
            'date' => $date_,
            'route'=>"configuration",
        ]);

    }
    public function result(Request $request,$id)
    {
        $lotto=LottoFixture::find($id);
        $list_items=LottoFixtureItem::query()->where(['lotto_fixture_id'=>$id])->get();
        return view('backend.result', [
            "list_items"=>$list_items,
            "lotto"=>$lotto,
            'route'=>"lis_fixtures",
        ]);
    }
}
