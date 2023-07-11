<template>
    <div id="nav-wrapper" class="drawer-toggle sp-only">
        <div class="hamburger sp-only" id="js-hamburger">
            <button class="drawer-btn"><span></span><span></span><span></span></button>
        </div>
        <nav class="sp-nav">
            <div class="nav-list-wrap">
                <ul class="nav-list">
                    <li><a href="https://app.tavigator.co.jp/magazine/register" target="_self" title="メルマガ" class="header-action__link"><i
                                class="fa-solid fa-envelope"
                                style="color:#486C71;"></i>
                            <p>メルマガ</p>
                        </a></li>
                    <li><a href="https://twitter.com/tavigator"
                            target="_self"
                            title="Twitter"
                            class="header-action__link"><i class="fa-brands fa-twitter" style="color:#1DA1F2;"></i>
                            <p>Twitter</p>
                        </a></li>
                    <li><a href="https://www.tavigator.co.jp/web/line" target="_self" title="LINE" class="header-action__link"><i
                                class="fa-brands fa-line"
                                style="color:#00B900;"></i>
                            <p>LINE</p>
                        </a></li>
                </ul>
                <ul class="nav-list">
                    <li><a href="https://www.tavigator.co.jp/web/help/oshirase"
                        target="_self"
                        title="お知らせ"
                        class="news-link header-action__link"><i class="fa-solid fa-info"></i>
                            <p>お知らせ<!-- ログイン時のみ表示 ><span>999</span>< //ログイン時のみ表示 --></p>
                        </a></li>
                    <li><a href="https://www.tavigator.co.jp/web/help#anchor04" target="_self" title="予約確認・取り消し" class="header-action__link"><i class="fa-solid fa-calendar-check"></i>
                            <p>予約確認・取り消し</p>
                        </a></li>
                    <li><a href="https://www.tavigator.co.jp/web/help" target="_self" title="ヘルプ" class="header-action__link"><i
                                class="fa-solid fa-question"></i>
                            <p>ヘルプ</p>
                        </a></li>
                </ul>
                <ul class="nav-list">
                    <li class="header-menu__alist">
                        <p title="国内旅行" class="header-menu__lists-btn">国内旅行</p>
                        <ul>
                            <li><a href="https://hotel.tavigator.co.jp/search/"
                                target="_self"
                                title="国内旅行_国内旅行"
                                class="header-submenu__link">
                                    <p>国内旅行_国内旅行</p>
                                </a></li>
                            <li><a href="https://mdp.tour-list.com/dp/tavigator/"
                                target="_self"
                                title="航空券+宿泊_国内旅行"
                                class="header-submenu__link">
                                    <p>航空券+宿泊_国内旅行</p>
                                </a></li>
                        </ul>
                    </li>
                    <!-- 1次では非表示 -->
                    <!-- <li class="header-menu__alist">
                        <p title="目的から探す" class="header-menu__lists-btn">目的から探す</p>
                        <ul>
                            <li><a href="#" target="_self" title="テキスト" class="header-submenu__link">
                                    <p>テキスト</p>
                                </a></li>
                            <li><a href="#" target="_self" title="テキスト" class="header-submenu__link">
                                    <p>テキスト</p>
                                </a></li>
                            <li><a href="#" target="_self" title="テキスト" class="header-submenu__link">
                                    <p>テキスト</p>
                                </a></li>
                        </ul>
                    </li> -->
                    <!-- //1次では非表示 -->
                    <li><a href="#" target="_self" title="ふるさと納税" class="header-menu__link">
                            <p>ふるさと納税</p>
                        </a></li> <!-- TODO link -->
                    <li><a href="#" target="_self" title="契約保養所システム" class="header-menu__link">
                            <p>契約保養所システム</p>
                        </a></li> <!-- TODO link -->
                    <li><a href="#" target="_self" title="遊び・体験" class="header-menu__link">
                            <p>遊び・体験</p>
                        </a></li> <!-- TODO link -->
                    <li><a href="#" target="_self" title="観光ガイド" class="header-menu__link">
                            <p>観光ガイド</p>
                        </a></li> <!-- TODO link -->
                </ul>
                <!-- 1次では非表示 -->
                <!-- ログイン時のみ表示 -->
                <!-- <ul class="nav-list">
                    <li><a href="#" target="_self" title="マイページ" class="header-action__link">
                            <p>マイページ</p>
                        </a></li>
                    <li><a href="#" target="_self" title="登録情報の確認・変更" class="header-action__link">
                            <p>登録情報の確認・変更</p>
                        </a></li>
                    <li><a href="#" target="_self" title="メールマガジンの配信・停止" class="header-action__link">
                            <p>メールマガジンの配信・停止</p>
                        </a></li>
                    <li><a href="#" target="_self" title="退会" class="header-action__link">
                            <p>退会</p>
                        </a></li>
                </ul> -->
                <!-- //ログイン時のみ表示 -->
                <!-- //1次では非表示 -->
            </div>
            <!-- 1次では非表示 -->
            <!-- 未ログイン時のみ -->
            <!-- <div class="nav-login-btn">
                <div class="login-btn"><a href="#" target="_self" title="会員登録・ログイン" class="header-action__link"><i
                            class="fa-solid fa-user-large"></i>会員登録/ログイン</a></div>
            </div> -->
            <!-- //未ログイン時のみ -->
            <!-- //1次では非表示 -->
        </nav>
    <div class="black-bg" id="js-black-bg"></div>
    </div>
</template>

<script>
export default {
  name: 'HamburgerMenu'
}
</script>
