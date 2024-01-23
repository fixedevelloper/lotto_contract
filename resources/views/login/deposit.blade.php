@extends('login.login_base')

@section('content')
    <div class="dashboard__body__wrap p-5">
        <h3 class="account__head2 mb__30">
            Deposit
        </h3>
        <div class="payment__cart__check">
            <div class="row g-4">
                <div class="col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-6">
                    <div class="card card_d">
                        <div class="card-body card_body_dark">
                            <div class="payment__cart__items">
                                <input class="form-check-input" name="deposit" type="radio" id="deposit1">
                                <label class="form-check-label" for="deposit1">
                                  Started:  200€/Month
                                </label>

                            </div>
                            <div class="mt-3">
                                <ul class="list-group">
                                    <li class="list-group-item"><i class="fa fa-check-square"></i>+200 Pronostics/Day</li>
                                    <li class="list-group-item"><i class="fa fa-check-square"></i>Support 24H/7</li>
                                    <li class="list-group-item"><i class="fa fa-check-square"></i>+100 Live pronostics</li>
                                    <li class="list-group-item"><i class="fa fa-check-square"></i>Pay by Month</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-6">
                    <div class="card card_d">
                        <div class="card-body card_body_dark">
                            <div class="payment__cart__items">
                                <input class="form-check-input" checked name="deposit" type="radio" id="deposit2">
                                <label class="form-check-label" for="deposit2">
                                    One time free:  1379€/year
                                </label>

                            </div>
                            <div class="mt-3">
                                <ul class="list-group">
                                    <li class="list-group-item"><i class="fa fa-check-square"></i>+250 Pronostics/Day</li>
                                    <li class="list-group-item"><i class="fa fa-check-square"></i>Support 24H/7</li>
                                    <li class="list-group-item"><i class="fa fa-check-square"></i>+100 Live pronostics</li>
                                    <li class="list-group-item"><i class="fa fa-check-square"></i>Pay one time free</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-6">
                    <div class="card card_d">
                        <div class="card-body card_body_dark">
                            <div class="payment__cart__items">
                                <input class="form-check-input" name="deposit" type="radio" id="deposit3">
                                <label class="form-check-label" for="deposit3">
                                    Premuim:  custom
                                </label>

                            </div>
                            <div class="mt-3">
                                <ul class="list-group">
                                    <li class="list-group-item"><i class="fa fa-check-square"></i>Pronostics/Day :Custom</li>
                                    <li class="list-group-item"><i class="fa fa-check-square"></i>Support 24H/7</li>
                                    <li class="list-group-item"><i class="fa fa-check-square"></i>+100 Live pronostics :custom</li>
                                    <li class="list-group-item"><i class="fa fa-check-square"></i>Pay by Month</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="deposit__complate">
            <h3>
                Complete Your Deposit
            </h3>
            <div class="row">
                <dl class="text-white text-start">
                    <dt>IBAN (International Bank Account Number)</dt>
                    <dd>FR76 1659 8000 0140 0000 3727 486</dd>
                    <dt>BIC/Swift</dt>
                    <dd>FPELFR21XXX</dd>
                    <dt>Titulaire</dt>
                    <dd>MR DONALD EBVOUNDI</dd>
                    <dt></dt>
                    <dd></dd>
                </dl>
            </div>
            <p class="mb-3 text-white">download proof of deposit</p>
            <form method="POST">
                @csrf
                <div class="single-input mb__20">
                    <input type="file" id="dAmount" placeholder="download proof of deposit" value="$20.00" autocomplete="off">
                </div>
                <div class="btn-area">
                    <button type="submit" class="cmn--btn">
                        <span>Deposit</span>
                    </button>
                </div>
            </form>
        </div>
    </div>
@endsection
