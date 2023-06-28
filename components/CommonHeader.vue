<!-- Please remove this file from your project -->
<template>
  <header class="header">
    <div class="header__sticky" data-header-sticky="">
      <div class="header__container">
        <h1>国内旅行のホテル・旅館の宿泊予約サイト－たびゲーター</h1>
        <tvg-logo />
        <nav class="header-menu">
          <ul class="header-menu__items">
            <li class="header-menu__item header-menu__item--search_hotel">
              <a href="/search/#searchbox" title="ホテル・旅館を探す" class="header-menu__link">ホテル・旅館を探す</a>
            </li>
            <li class="header-menu__item header-menu__item--search_area">
              <a href="/search/area" title="エリアから探す" class="header-menu__link">エリアから探す</a>
            </li>
            <li class="header-menu__item header-menu__item--search_coupon">
              <a href="/search/couponListTransfer" title="クーポンを探す" class="header-menu__link" target="_blank">クーポンを探す</a>
            </li>
            <li class="header-menu__item header-menu__item--news">
              <a href="/search/informationlist?partner=htl&amp;informationtype=S&amp;page=1" title="お知らせ" class="header-menu__link">お知らせ</a>
            </li>
          </ul>
        </nav>
        <div class="header-action">
          <ul class="header-action__items">
            <li class="header-action__item header-action__item--faq">
              <a href="https://www.tavigator.co.jp/help/yoyaku_index" title="ヘルプ" class="header-action__link" target="_blank">ヘルプ</a>
            </li>
            <li class="header-action__item header-action__item--favorite">
              <a href="/search/favoritelist" title="お気に入り" class="header-action__link">お気に入り</a>
            </li>
            <li class="header-action__item header-action__item--reserve">
              <a href="/search/reservelist" title="予約確認・取り消し" class="header-action__link">
                予約確認<span class="only--pc">・取り消し</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import TvgLogo from '~/components/TvgLogo'
export default {
  name: 'CommonHeader',
  components: {
    TvgLogo
  }
}
</script>

<style>
/*
.headerWrapper2 nav ul li:nth-of-type(1) a {
  color: #008742;
  border-bottom: 2px solid #008742;
}
.headerWrapper {
  margin: 0 0 10px;
}
#area0 > div > div {
  width: 100%;
}
*/
</style>
