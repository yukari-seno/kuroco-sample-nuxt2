<template>
    <div>
        <header class="header">
            <div class="header__innner">
                <div class="header__sticky">
                    <div class="header__container">
                        <h1>JTB、るるぶトラベルのクーポン、ふるさと納税宿泊クーポンならたびゲーター</h1> <!-- TODO 文言 -->
                        <div class="flex">
                            <tvg-logo />
                            <div class="header-action pc-only">
                                <ul class="header-action__sns">
                                    <li class="header-action__item"><a href="https://app.tavigator.co.jp/magazine/register"  target="_self" title="メルマガ" class="header-action__link"><i class="fa-solid fa-envelope" style="color:#486C71;"></i><p>メルマガ</p></a></li>
                                    <li class="header-action__item"><a href="https://twitter.com/tavigator" target="_self" title="Twitter" class="header-action__link"><i class="fa-brands fa-twitter" style="color:#1DA1F2;"></i><p>Twitter</p></a></li>
                                    <li class="header-action__item"><a href="https://www.tavigator.co.jp/web/line" target="_self" title="LINE" class="header-action__link"><i class="fa-brands fa-line" style="color:#00B900;"></i><p>LINE</p></a></li>
                                </ul>
                                <ul class="header-action__items">
                                    <li class="header-action__item"><a href="https://www.tavigator.co.jp/web/help/oshirase" target="_self" title="お知らせ" class="news-link header-action__link"><i class="fa-solid fa-info"></i><p>お知らせ<!--span>999</span--></p></a></li> <!-- max999件想定 -->
                                    <li class="header-action__item"><a href="https://www.tavigator.co.jp/web/help#anchor04" target="_self" title="予約確認・取り消し" class="header-action__link"><i class="fa-solid fa-calendar-check"></i><p>予約確認・取り消し</p></a></li>
                                    <li class="header-action__item"><a href="https://www.tavigator.co.jp/web/help" target="_self" title="ヘルプ" class="header-action__link"><i class="fa-solid fa-question"></i><p>ヘルプ</p></a></li>
                                    <!-- 1次では非表示 -->
                                    <!-- <li class="header-action__item"> -->
                                        <!-- ログイン後はフルネーム表示 -->
                                        <!-- <div class="login-btn">
                                            <a href="#" title="会員登録・ログイン" class="header-action__link"><i class="fa-solid fa-user-large"></i><p>会員登録/ログイン</p></a>
                                        </div>
                                        <ul>
                                            <li><a href="#" target="_self" title="マイページ" class="header-action__link"><p>マイページ</p></a></li>
                                            <li><a href="#" target="_self" title="登録情報の確認・変更" class="header-action__link"><p>登録情報の確認・変更</p></a></li>
                                            <li><a href="#" target="_self" title="メールマガジンの配信・停止" class="header-action__link"><p>メールマガジンの配信・停止</p></a></li>
                                            <li><a href="#" target="_self" title="退会" class="header-action__link"><p>退会</p></a></li>
                                        </ul>
                                    </li> -->
                                    <!-- //1次では非表示 -->
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <nav class="header-menu pc-only">
                    <div class="header__container">
                        <ul class="header-menu__items">
                            <li class="header-menu__item header-menu__lists-btn" title="国内旅行">国内旅行<i class="fa-solid fa-angle-down"></i>
                                <ul>
                                    <li><a href="https://hotel.tavigator.co.jp/search/" target="_self" title="国内旅行_国内旅行" class="header-submenu__link">国内旅行_国内旅行</a></li>
                                    <li><a href="https://mdp.tour-list.com/dp/tavigator/" target="_self" title="航空券+宿泊_国内旅行" class="header-submenu__link">航空券+宿泊_国内旅行</a></li>
                                </ul>
                            </li>
                            <!-- 1次では非表示 -->
                            <!-- <li class="header-menu__item header-menu__lists-btn" target="_self" title="目的から探す旅">目的から探す旅<i class="fa-solid fa-angle-down"></i>
                                <ul>
                                    <li><a href="#" target="_self" title="テキスト" class="header-submenu__link">テキストテキストテキストテキストテキ20</a></li>
                                    <li><a href="#" target="_self" title="テキスト" class="header-submenu__link">テキスト</a></li>
                                    <li><a href="#" target="_self" title="テキスト" class="header-submenu__link">テキスト</a></li>
                                </ul>
                            </li> -->
                            <!-- //1次では非表示 -->
                            <li class="header-menu__item"><a href="#" target="_self" title="ふるさと納税" class="header-menu__link">ふるさと納税</a></li> <!-- TODO link -->
                            <li class="header-menu__item"><a href="#" target="_self" title="契約保養所システム" class="header-menu__link">契約保養所システム</a></li> <!-- TODO link -->
                            <li class="header-menu__item"><a href="#" target="_self" title="遊び・体験" class="header-menu__link">遊び・体験</a></li> <!-- TODO link -->
                            <li class="header-menu__item"><a href="#" target="_self" title="観光ガイド" class="header-menu__link">観光ガイド</a></li> <!-- TODO link -->
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
        <hamburger-menu />
    </div>
</template>

<script>
import TvgLogo from '~/components/TvgLogo'
import HamburgerMenu from '~/components/HamburgerMenu'
export default {
  name: 'CommonHeader',
  components: {
    TvgLogo,
    HamburgerMenu
  }
}
</script>
