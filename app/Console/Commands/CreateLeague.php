<?php

namespace App\Console\Commands;

use App\Models\Country;
use App\Models\League;
use App\Models\LeagueSeason;
use App\Models\Team;
use App\Services\FootballAPIService;
use Illuminate\Console\Command;

class CreateLeague extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:create-league';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        // $this->createCountry();
        $this->createLeagues();
        $season="2023";
/*       $leagueseasons = LeagueSeason::query()
            ->leftJoin('leagues','leagues.id','=','league_seasons.league_id')
            ->where(['leagues.type'=>'League','year'=>$season,'current'=>true])->get();*/
        $leagueseasons=League::all();
        foreach ($leagueseasons as $leagueseason) {
            $res = FootballAPIService::getTeams($leagueseason->league_id, $season);
            $data = $res->response;
            for ($i = 0; $i < sizeof($data); $i++) {
                $team = Team::query()->firstWhere(['team_id' => $data[$i]->team->id]);
                if (is_null($team)) {
                    $team = new Team();
                    $team->name = $data[$i]->team->name;
                    $team->team_id = $data[$i]->team->id;
                    $team->code = is_null($data[$i]->team->code) ? " " : $data[$i]->team->code;
                    $team->logo = $data[$i]->team->logo;
                    $team->country = $data[$i]->team->country;
                    $team->founded = is_null($data[$i]->team->founded) ? 2023 : $data[$i]->team->founded;
                    $team->national = $data[$i]->team->national;
                    $team->save();
                }
            }
        }

    }

    function createLeagues()
    {
        $res = FootballAPIService::getLeagues();
        $data = $res->response;
        for ($i = 0; $i < sizeof($data); $i++) {
            logger('****'.$i);
            $league = League::query()->firstWhere(['league_id' => $data[$i]->league->id]);
            if (is_null($league)) {
                $league = new League();
            }
            $league->name = $data[$i]->league->name;
            $league->league_id = $data[$i]->league->id;
            $league->type = $data[$i]->league->type;
            $league->logo = $data[$i]->league->logo;
            $league->country_code = $data[$i]->country->code;
            $league->save();
            $seasons = $data[$i]->seasons;
            for ($k = 0; $k < sizeof($seasons); $k++) {
                $season = LeagueSeason::query()->firstWhere(['league_id' => $league->id, 'year' => $seasons[$k]->year]);
                if (is_null($season)) {
                    $season = new LeagueSeason();

                }
                $season->league_id = $league->id;
                $season->year = $seasons[$k]->year;
                $season->start = $seasons[$k]->start;
                $season->end = $seasons[$k]->end;
                $season->current = $seasons[$k]->current;
                $season->save();
            }
        }

    }

    function createCountry()
    {
        $res = FootballAPIService::getCountries();
        $data = $res->response;
        for ($i = 0; $i < sizeof($data); $i++) {
            $country = Country::query()->firstWhere(['name' => $data[$i]->name]);
            if (is_null($country)) {
                $country = new Country();
                $country->country_id = $data[$i]->name;
            }
            $country->name = $data[$i]->name;
            $country->code = $data[$i]->code;
            $country->flag = $data[$i]->flag;
            $country->save();
        }

    }
}
