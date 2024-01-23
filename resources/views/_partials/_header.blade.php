<!--Header Here-->
<header class="header-section">
    <div class="container-fluid p-0">
        <div class="header-wrapper">
            <div class="menu__left__wrap">
                <div class="logo-menu px-2">
                    <a href="{{route('home')}}" class="logo">
                        <img src="{{asset('images/logo.png')}}" alt="logo">
                    </a>
                </div>
                <div class="lang d-flex align-items-center px-2">
                    <div class="language__wrap">
                        <div class="flag">
                            <img src="{{asset('img/header/uk.png')}}" alt="flag">
                        </div>
                        <select name="flag" id="flag-img1">
                            <option value="1">
                                En
                            </option>
                            <option value="1">
                                Cy
                            </option>
                            <option value="1">
                                Et
                            </option>
                        </select>
                    </div>
                    <div class="header-bar d-lg-none">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <ul class="main-menu">
                    <li>
                        <a href="{{route('home')}}">
                            <span>Live</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="mneu-btn-grp">

                <a href="{{route("login")}}" class="cmn--btn">
                    <span>Sign In</span>
                </a>
                @if(is_null(! \Illuminate\Support\Facades\Session::get("user")))
                <a href="{{route("nextregister")}}" class="cmn--btn2">
                    <span class="rela">Sign Up</span>
                </a>
                @endif<w3m-core-button></w3m-core-button>

            </div>
        </div>
    </div>
</header>
<!--Header End-->
