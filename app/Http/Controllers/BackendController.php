<?php


namespace App\Http\Controllers;


use App\Models\Fixture;
use App\Models\GamePlay;
use App\Models\LottoFixture;
use App\Models\LottoFixtureItem;
use App\Models\PlayingFixture;
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
        $end_date = Carbon::parse($date_)->addDays(1)->format('Y-m-d');
        $data = LottoFixture::query()->whereBetween('end_time', [$date_, $end_date])->get();
        return view('backend.fixture_list', [
            'lis_fixtures' => $data,
            'route' => "lis_fixtures",
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
            'route' => "configuration",
        ]);

    }
    public function winner_detail(Request $request, $id)
    {
        $lists = PlayingFixture::query()->where(['game_play_id' => $id])->get();
        return view('backend.winner_detail', [
            "list_items" => $lists,
            "lotto" => $id,
            'route' => "lis_fixtures",
        ]);
    }
    public function payment(Request $request, $id)
    {
        $lotto = LottoFixture::find($id);
        $count_items = LottoFixtureItem::query()->where(['lotto_fixture_id' => $id])->count();
        $games = GamePlay::query()->where(['lotto_fixture_id' => $id])->get();
        $winners = [];
        foreach ($games as $game) {
            $count = 0;
            $choices=[];
            $lists = PlayingFixture::query()->where(['game_play_id' => $game->id])->get();
            foreach ($lists as $list) {
                $fixture = Fixture::query()->firstWhere(['fixture_id' => $list->lotto_fixture_item->fixture_id]);
                if ($fixture->team_home_winner && $list->value == 1) {
                    $count++;
                } elseif ($fixture->team_away_winner && $list->value == 2) {
                    $count++;
                } elseif (!$fixture->team_home_winner && !$fixture->team_away_winner && $list->value == 3) {
                    $count++;
                }
            }
            $winners[] = [
                "game_id" => $game->id,
                "user" => $game->user->id,
                "address" => $game->user->address,
                "count" => $count,

            ];
        }
        $volume  = array_column($winners, 'count');
        array_multisort($volume, SORT_DESC, $winners);
        return view('backend.payment', [
            "lotto" => $lotto,
            "winners"=>$winners,
            'route' => "lis_fixtures",
            "count_items"=>$count_items
        ]);
    }
    public function result(Request $request, $id)
    {
        $lotto = LottoFixture::find($id);
        $list_items = LottoFixtureItem::query()->where(['lotto_fixture_id' => $id])->get();
        $games = GamePlay::query()->where(['lotto_fixture_id' => $id])->get();
        $winners = [];

        foreach ($games as $game) {
            $count = 0;
            $choices=[];
            $lists = PlayingFixture::query()->where(['game_play_id' => $game->id])->get();
            foreach ($lists as $list) {
                $fixture = Fixture::query()->firstWhere(['fixture_id' => $list->lotto_fixture_item->fixture_id]);
                if ($fixture->team_home_winner && $list->value == 1) {
                    $count++;
                } elseif ($fixture->team_away_winner && $list->value == 2) {
                    $count++;
                } elseif (!$fixture->team_home_winner && !$fixture->team_away_winner && $list->value == 3) {
                    $count++;
                }
            }
            $winners[] = [
                "game_id" => $game->id,
                "user" => $game->user->id,
                "address" => $game->user->address,
                "count" => $count,
            ];
        }
        $volume  = array_column($winners, 'count');
        array_multisort($volume, SORT_DESC, $winners);
        return view('backend.result', [
            "list_items" => $list_items,
            "lotto" => $lotto,
            "winners"=>$winners,
            'route' => "lis_fixtures",
        ]);
    }
}
