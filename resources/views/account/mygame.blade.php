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
                <table>
                    <thead>
                    <tr>
                        <th>Team home</th>
                        <th>Team Away</th>
                        <th>Choice</th>
                    </tr>
                    </thead>
                    <tbody>
                    @foreach($lotto_fixtures as $lotto)
                        @php
                            $fixture=\App\Helpers\Helpers::getFixture($lotto->fixture_id);
                              $team_home=\App\Helpers\Helpers::getTeamByID($fixture->team_home_id);
                          $team_away=\App\Helpers\Helpers::getTeamByID($fixture->team_away_id);

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
                        <td>
                            {{\App\Helpers\Helpers::getPlayingItem($item->id,$lotto->id)->value}}
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
