@extends('login.login_base')

@section('content')
    <div class="dashboard__body__wrap p-5">
        <div class="container">
            <div class="row align-items-center g-4">
                <div class="col-lg-6">
                    <div class="modal__left">
                        <img src="assets/img/modal/modal.png" alt="modal">
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="modal__right">
                        <ul class="nav nav-tabs" id="myTab2" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link " id="home-tab1" data-bs-toggle="tab" data-bs-target="#home2" type="button" role="tab" aria-selected="true">Sign Up</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="contact-tab3" data-bs-toggle="tab" data-bs-target="#contact2" type="button" role="tab" aria-selected="false">Sign In</button>
                            </li>
                        </ul>
                        <div class="tab-content" id="myTabContent2">
                            <div class="tab-pane fade " id="home2" role="tabpanel">
                                <div class="form__tabs__wrap">
                                    <div class="focus__icon">
                                        <p>
                                            or registration via social media accounts
                                        </p>
                                        <div class="social__head">
                                            <ul class="social">
                                                <li>
                                                    <a href="#0">
                                                        <i class="fa-brands fa-facebook-f"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#0">
                                                        <i class="fab fa-twitter"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#0">
                                                        <i class="fa-brands fa-linkedin-in"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <form action="#0">
                                        <div class="form__grp">
                                            <label for="emailsign">Email</label>
                                            <input type="email" id="emailsign" placeholder="Email Your">
                                        </div>
                                        <div class="form__grp">
                                            <label for="toggle-password3">Password</label>
                                            <input id="toggle-password3" type="password" placeholder="Your Password">
                                            <span id="#toggle-password3" class="fa fa-fw fa-eye field-icon toggle-password3"></span>
                                        </div>
                                        <div class="login__signup">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" id="remem">
                                                <label class="form-check-label" for="remem">
                                                    Remember me
                                                </label>
                                            </div>
                                            <a href="#0">
                                                Forgot Password
                                            </a>
                                        </div>
                                        <div class="create__btn">
                                            <a href="#0" class="cmn--btn">
                                                <span>Sign Up</span>
                                            </a>
                                        </div>
                                        <p>
                                            Do you have an account? <a href="#0">Registration</a>
                                        </p>
                                    </form>
                                </div>
                            </div>
                            <div class="tab-pane fade show active" id="contact2" role="tabpanel">
                                <div class="form__tabs__wrap">
                                    <div class="focus__icon">
                                        <p>
                                            or registration via social media accounts
                                        </p>
                                        <div class="social__head">
                                            <ul class="social">
                                                <li>
                                                    <a href="#0">
                                                        <i class="fa-brands fa-facebook-f"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#0">
                                                        <i class="fab fa-twitter"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#0">
                                                        <i class="fa-brands fa-linkedin-in"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <form action="#0">
                                        <div class="form__grp">
                                            <label for="email34">Email</label>
                                            <input type="email" id="email34" placeholder="Email Your">
                                        </div>
                                        <div class="form__grp">
                                            <label for="toggle-password10">Password</label>
                                            <input id="toggle-password10" type="password" placeholder="Your Password">
                                            <span id="#toggle-password10" class="fa fa-fw fa-eye field-icon toggle-password10"></span>
                                        </div>
                                        <div class="form__grp">
                                            <label for="toggle-password9">Confrim</label>
                                            <input id="toggle-password9" type="password" placeholder="Password">
                                            <span id="#toggle-password9" class="fa fa-fw fa-eye field-icon toggle-password9"></span>
                                        </div>
                                        <div class="create__btn">
                                            <a href="#0" class="cmn--btn">
                                                <span>Sign Up</span>
                                            </a>
                                        </div>
                                        <p>
                                            Do you have an account? <a href="#0">Login</a>
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
