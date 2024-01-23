
@extends('base')

@section('content')
    <div class="row justify-content-center">
            <div class="col-md-6">
                <h2 class="text-white">Register</h2>
                <div class="mt-5">
                    <ul class="list-group">
                        <span hidden id="user_id"></span>
                        <li class="list-group-item list-group-item-danger" id="wallet_connect">Wallet not connected</li>
                        <li class="list-group-item list-group-item-danger" id="network_approuve">Network</li>
                        <li class="list-group-item list-group-item-success">Registration Available</li>
                    </ul>
                </div>
                <div class="mat-div" hidden>
                    <label class="mat-label">New user</label>
                    <input placeholder="EX: 10" type="text" class="mat-input" id="newuserID" readonly>
                </div>
                <div class="mt-3">
                    <label class="text-white mb-1">Your upline</label>
                    <input placeholder="EX: 10" type="text" value="{{$id}}" class="form-control" id="referralid">
                </div>
                <div class="mt-3">
                  <button type="button" onclick="lotto.register()" class="btn btn-outline-primary" value="REGISTER"><i class="fa fa-spinner fa-spin" id="spinner_register"></i> Register</button>

                </div>

            </div>
    </div>

@endsection
@push('script')
    <script src="{{ asset('contract/lotterie.js') }}"></script>
@endpush
