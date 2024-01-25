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
                    <div class=" d-lg-none mr-1">
                        <w3m-core-button></w3m-core-button>
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
                @if(is_null(\Illuminate\Support\Facades\Session::get("address_connect")))
                <a href="javascript:void(0);" onclick="lotto.login()" id="login_id" class="cmn--btn">
                    <span>Sign In</span>
                </a>
                @endif
                @if(is_null(\Illuminate\Support\Facades\Session::get("address_connect")))
                <a href="{{route("nextregister")}}" class="cmn--btn2">
                    <span class="rela">Sign Up</span>
                </a>
                @endif
                <w3m-core-button></w3m-core-button>

            </div>
        </div>
    </div>
</header>
<!--Header End-->
