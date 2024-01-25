@extends('backend.backend')
@section('title') Looto resultats @endsection
@section('content')
    <div class="container">
        <h3 class="mt-3 text-white">Liste des grilles de matchs</h3>
    </div>
    <div class="row">
        <div class="col-md-12 mt-5">
            <div class="card card_dark">
                <div class="card-body">
                    <table class="table text-white" id="table_conbinaison">
                        <thead>
                        <tr>
                            <th>Date End</th>
                            <th>Title</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        @foreach($lis_fixtures as $fixture)
                          <tr>
                              <td>{{$fixture->end_time}}</td>
                              <td>{{$fixture->title}}</td>
                              <td><a class="btn btn-outline-primary" href="{{route('admin.result',['id'=>$fixture->id])}}">Detail</a></td>
                          </tr>
                        @endforeach
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    </div>
@endsection

