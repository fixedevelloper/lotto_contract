@extends('backend.backend')
@section('title') Looto resultats @endsection
@section('content')
    <div class="container">
        <h3 class="mt-3 text-white">Grille de match {{$lotto->title}}</h3>
    </div>
    <div class="card card_dark">
        <div class="card-body">
            <table class="table text-white">
                <thead>
                <tr>
                    <th>Date</th>
                    <th>Team home</th>
                    <th>Team away</th>
                    <th>Score</th>
                    <th>Value</th>
                </tr>
                </thead>
                <tbody>
                @foreach($list_items as $item)
                    @php
                        $fixture=\App\Helpers\Helpers::getFixture($item->fixture_id);

                         $team_home=\App\Helpers\Helpers::getTeamByID($fixture->team_home_id);
                         $team_away=\App\Helpers\Helpers::getTeamByID($fixture->team_away_id);
                    @endphp
                    <tr>
                        <td>{{\Illuminate\Support\Carbon::parse($fixture->date)}}</td>
                        <td>
                            <h6>
                                <img height="40" width="40"
                                     src="{{$team_home['logo']}}">
                                {{$team_home['name']}}
                            </h6>
                        </td>
                        <td>
                            <h6>
                                <img height="40" width="40"
                                     src="{{$team_away['logo']}}">
                                {{$team_away['name']}}
                            </h6>
                        </td>
                        <td>
                            {{$fixture->score_ft_home}}-
                            {{$fixture->score_ft_away}}
                        </td>
                        <td>
                            @if($fixture->st_short !="NS")
                                @if($fixture->team_home_winner)
                                    1
                                @elseif($fixture->team_away_winner)
                                    2
                                @else
                                    3
                                @endif
                            @else
                                -
                            @endif
                        </td>
                    </tr>
                @endforeach
                </tbody>
            </table>

        </div>
    </div>
    <div class="card card_dark mt-3 text-white">
        <div class="card-header">
            <h3>List winners</h3>
        </div>
        <div class="card-body">
            <table class="table text-white" id="table_conbinaison">
                <thead>
                <tr>
                    <th>User</th>
                    <th>Address</th>
                    <th>Match win</th>
                    <th>Detail</th>
                </tr>
                </thead>
                <tbody>
                @foreach($winners as $winner)
                    <tr>
                        <td>{{$winner['user']}}</td>
                        <td>{{$winner['address']}}</td>
                        <td>{{$winner['count']}}</td>
                        <td><a class="btn btn-success btn-sm" href="{{route("admin.winner_detail",['id'=>$winner['game_id']])}}">voir</a></td>
                    </tr>
                @endforeach

                </tbody>
            </table>

        </div>
    </div>
@endsection

