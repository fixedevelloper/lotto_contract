@extends('account.layout')

@section('content')
    <div class="accordion" id="accordionExample">
        @foreach($mygames as $item)
    <div class="accordion-item">
        <h2 class="accordion-header" id="{{$loop->index}}">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#col{{$item->id}}"
                    aria-expanded="false" aria-controls="{{$item->id}}">
                {{$item->lotto_fixture->title}}
            </button>
        </h2>
        <div id="col{{$item->id}}" class="accordion-collapse collapse" aria-labelledby="{{$loop->index}}" data-bs-parent="#accordionExample">
            <div class="accordion-body text-black-50">
            @php
            $lotto_fixtures=\App\Helpers\Helpers::getLottofixtureItem($item->lotto_fixture->id)
            @endphp
                <table class="table">
                    <thead>
                    <tr>
                        <th>Team home</th>
                        <th>Team Away</th>
                        <th>Choice</th>
                        <th>Score</th>
                    </tr>
                    </thead>
                    <tbody>
                    @foreach($lotto_fixtures as $lotto)
                        @php
                            $fixture=\App\Helpers\Helpers::getFixture($lotto->fixture_id);
                              $team_home=\App\Helpers\Helpers::getTeamByID($fixture->team_home_id);
                          $team_away=\App\Helpers\Helpers::getTeamByID($fixture->team_away_id);
                          $value=\App\Helpers\Helpers::getPlayingItem($item->id,$lotto->id)->value;

                          if ($fixture->team_away_winner){
                              $result=2;
                          }elseif ($fixture->team_home_winner){
                               $result=1;
                          }else{
                               $result=3;
                          }
                        @endphp
                    <tr>
                        <td>
                           <h6><img height="40" width="40"
                                 src="{{$team_home['logo']}}">
                            {{$team_home['name']}}</h6>

                        </td>
                        <td><h6><img height="40" width="40"
                                       src="{{$team_away['logo']}}">
                            {{$team_away['name']}}</h6></td>
                        <td @if($result===$value) class="bg-success" @else class="bg-danger" @endif>
                            {{\App\Helpers\Helpers::getPlayingItem($item->id,$lotto->id)->value}}
                        </td>
                        <td>
                            {{$fixture->score_ft_home}}-{{$fixture->score_ft_away}}
                         {{--   <button class="btn btn-sm btn-success">
                                <span class="fa @if($result===$value) fa-check-double@else fa-times  @endif"></span>
                            </button>--}}

                        </td>
                    </tr>

                    @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </div>
        @endforeach
    </div>
@endsection
