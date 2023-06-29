<template>
  <footer class="footer"> <!-- TODO href,target未確定 -->
    <div class="pagetop" data-pagetop data-pagetop-custom=".footer"><a href="#top"
         title="このページの先頭へ"
         class="pagetop__link"><span>このページの先頭へ</span></a></div>
    <div class="ft-contents-wrap">
      <div class="ft-contents pc-only">
        <div class="ft-content">
          <p>たびゲーター人気コンテンツ</p>
          <ul>
            <li><a href="https://travel.yahoo.co.jp/promo/coupon/list/tvg" target="_blank">お得なクーポン</a></li>
            <li><a href="https://www.tavigator.co.jp/plus/bargain">バーゲン宿泊プラン</a></li>
            <li><a href="https://www.tavigator.co.jp/plus/roten">露天風呂付き客室</a></li>
            <li><a href="https://www.tavigator.co.jp/plus/asoberu">一日中遊べる宿</a></li>
            <li><a href="https://www.tavigator.co.jp/plus/disney">東京ディズニーリゾート（R）</a></li>
            <li><a href="https://travel.yahoo.co.jp/special/wh_list/" target="_blank">テーマ、目的別&emsp;旅のおすすめ特集</a></li>
          </ul>
        </div>
        <div class="ft-content">
          <p>たびゲーターサービス</p>
          <ul>
            <li><a href="https://www.tavigator.co.jp/web/furusato">ふるさと納税</a></li>
            <li><a href="https://www.tavigator.co.jp/plus">Myたびプラス</a></li>
            <li><a href="https://www.tavigator.co.jp/web/line">公式LINE</a></li>
            <li><a href="https://app.tavigator.co.jp/magazine/register" target="_blank">お得なメールマガジン</a></li>
            <li><a href="https://www.tavigator.co.jp/business.html">法人向けサービス</a></li>
          </ul>
        </div>
        <div class="ft-content">
          <p>サポート</p>
          <ul>
            <li><a href="https://www.tavigator.co.jp/web/help">ヘルプ・チャットボット</a></li>
            <li><a href="https://www.tavigator.co.jp/help/user_env/pc.html">推奨環境</a></li>
          </ul>
        </div>
        <div class="ft-content">
          <p>たびゲーターについて</p>
          <ul>
            <li><a href="https://www.tavigator.co.jp/company.html">会社案内</a></li>
          </ul>
        </div>
      </div>
      <div class="ft-secondary">
        <p>たびゲーターは「JTB」、「Zホールディングス」、「ソフトバンクグループ」のグループ会社です。<br>（ヤフー（株）はZホールディングス（株）に商号変更し、持株会社になりました）</p>
      </div>
      <div class="ft-secondary">
        <img src="~/assets/images/ft_image.jpg" width="150" height="98" alt="dummy">
        <div class="ft-secondary-text">
          <p>たびゲーターはISMS（情報セキュリティマネジメントシステム）の国際規格「ISO/IEC 27001:2013」と<br>国内規格「JIS Q 27001:2014」の認証を取得しています。</p>
          <div class="btn--more pc-only"><a href="https://www.tavigator.co.jp/policy/isms.html">詳しくはこちら</a></div>
          <div class="view-more hotel-sec__more sp-only"><a
              href="https://www.tavigator.co.jp/policy/isms.html">詳しくはこちら</a></div>
        </div>
      </div>
    </div>
    <nav class="footer-menu">
      <ul class="footer-menu__items">
        <li class="footer-menu__item footer-menu__item--company"><a href="https://www.tavigator.co.jp"
            title="トップページ"
            class="footer-menu__link">トップページ</a></li>
        <li class="footer-menu__item footer-menu__item--privacy"><a href="https://www.tavigator.co.jp/company.html"
            title="会社案内"
            class="footer-menu__link">会社案内</a></li>
        <li class="footer-menu__item footer-menu__item--agreement"><a
            href="https://www.tavigator.co.jp/company/charter.html"
            title="企業行動憲章"
            class="footer-menu__link">企業行動憲章</a>
        </li>
        <li class="footer-menu__item footer-menu__item--terms"><a href="https://www.tavigator.co.jp/policy/privacy.html"
            title="プライバシーポリシー"
            class="footer-menu__link">プライバシーポリシー</a></li>
        <li class="footer-menu__item footer-menu__item--terms"><a href="https://www.tavigator.co.jp/condition"
            title="標識・約款"
            class="footer-menu__link">標識・約款</a></li>
        <li class="footer-menu__item footer-menu__item--terms"><a href="https://www.tavigator.co.jp/condition/joken"
            title="旅行条件書・利用規約"
            class="footer-menu__link">旅行条件書・利用規約</a></li>
        <li class="footer-menu__item footer-menu__item--terms"><a href="https://www.tavigator.co.jp/koukoku.html"
            title="決算公告"
            class="footer-menu__link">決算公告</a></li>
      </ul>
      <p class="footer-copyright"><small class="footer-copyright__txt">Copyright &copy; 2023 Tavigator, Inc. All Rights
          Reserved.</small></p>
    </nav>
  </footer>
</template>

<script>
export default {
  name: 'CommonFooter'
}
</script>
