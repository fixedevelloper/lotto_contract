@extends('backend.backend')
@section('title') Looto resultats @endsection
@section('content')
    <div class="container">
        <h3 class="mt-3 text-white">Payement  {{$lotto->title}} du {{\Carbon\Carbon::parse($lotto->end_time)->format("d/m/Y")}}</h3>
    </div>
    <div class="card card_dark mt-3 text-white">
        <div class="card-header">
            <h3>List winners</h3>
        </div>
        <div class="card-body">
            <table class="table text-white" id="table_payment">
                <thead>
                <tr>
                    <th></th>
                    <th>User</th>
                    <th>Address</th>
                    <th>Match win</th>
                    <th>Gain</th>
                </tr>
                </thead>
                <tbody>
                @foreach($winners as $winner)
                    <tr>
                        <td><input type="checkbox"></td>
                        <td>{{$winner['user']}}</td>
                        <td>{{$winner['address']}}</td>
                        <td>{{$winner['count']}} / {{$count_items}}</td>
                        <td><input type="number" placeholder="10000000" id="py_{{$loop->index}}"></td>
                    </tr>
                @endforeach

                </tbody>
            </table>

        </div>
        <div class="card-footer">
            <div class="d-grid gap-2">
            <button onclick="lotto.sendPayement()" class="btn btn-outline-warning"><i class="fa fa-spinner fa-spin" id="send_payment"></i>Envoyer</button>
            </div>
        </div>
    </div>
@endsection

