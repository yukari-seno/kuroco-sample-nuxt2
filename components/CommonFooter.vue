<template>
  <footer class="footer"> <!-- TODO href,target未確定 -->
    <div class="pagetop" data-pagetop data-pagetop-custom=".footer">
      <a href="#top" title="このページの先頭へ" class="pagetop__link">
        <span>このページの先頭へ</span>
      </a>
    </div>
    <div class="ft-contents-wrap">
      <div class="ft-contents pc-only">
        <div v-for="(linkList, key) in footerLink" :key="key" class="ft-content">
          <p>{{ linkList.category.category_nm }}</p>
          <ul>
            <li v-for="(link, index) in linkList.list" :key="index">
              <a :href="link.linkURL" :target="link.transitionDev.key === '1' ? '_self' : '_blank'">{{ link.linkTitle }}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="ft-secondary">
        <p>たびゲーターは「JTB」、「Zホールディングス」、「ソフトバンクグループ」のグループ会社です。<br>（ヤフー（株）はZホールディングス（株）に商号変更し、持株会社になりました）</p>
      </div>
      <div class="ft-secondary">
        <img src="~/assets/images/ft_image.jpg" width="150" height="98" alt="">
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
  name: 'CommonFooter',
  props: ['footerLink']
}
</script>
