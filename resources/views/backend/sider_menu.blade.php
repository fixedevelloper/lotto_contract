<div class="col-xxl-3 col-xl-3 col-lg-4">
    <div class="dashboard__side__bar">
        <ul class="account__menu">
            <li>
                <a href="{{route("admin.lotto_fixture_list")}}" @if($route=="lis_fixtures") class="active" @endif>
                                    <span class="icons">
                                        <i class="icon-pcontact"></i>
                                    </span>
                    <span>
                                       List Grilles
                                    </span>
                </a>
            </li>
            <li>
                <a href="dashboard.html" @if($route=="account") class="active" @endif>
                                    <span class="icons">
                                        <i class="icon-user"></i>
                                    </span>
                    <span>
                                        Account Settings
                                    </span>
                </a>
            </li>
            <li>
                <a href="{{route("admin.configuration")}}" @if($route=="configuration") class="active" @endif>
                                    <span class="icons">
                                        <i class="icon-casino"></i>
                                    </span>
                    <span>
                                      Configure grilles
                                    </span>
                </a>
            </li>
            <li>
                <a href="javascript:void(0);">
                                    <span class="icons">
                                        <i class="icon-bonus"></i>
                                    </span>
                    <span>
                                       List participates
                                    </span>
                </a>
            </li>
            <li>
                <a href="{{route("logout")}}">
                                    <span class="icons">
                                        <i class="icon-logout"></i>
                                    </span>
                    <span>
                                       Logout
                                    </span>
                </a>
            </li>
        </ul>
    </div>
</div>
