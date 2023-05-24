<!-- Please remove this file from your project -->
<template>
  <div id="headerArea" class="pbHeaderArea">
    <div id="area1" class="pbArea ">
      <div class="pbNested ">
        <div id="pbBlock2649954" class="pbNested pbNestedWrapper">
          <div class="pbNested ">
            <div id="pbBlock2376" class="pbNested pbNestedWrapper">
              <div class="headerWrapper">
                <div class="headerWrapper1">
                  <h1>JTB、るるぶトラベルのクーポン、ふるさと納税宿泊クーポンならたびゲーター</h1>
                  <!--p>たびゲーターは「JTB」、「ヤフー」、「ソフトバンクグループ」のグループ会社です</p-->
                </div>
                <div class="headerWrapper2">
                  <tvg-logo />
                  <nav>
                    <ul>
                      <li>
                        <a href="/index.html">国内宿泊予約</a>
                      </li>
                      <li>
                        <a href="/company.html">会社案内</a>
                      </li>
                      <li>
                        <a href="/business.html">法人向けサービス</a>
                      </li>
                    </ul>
                  </nav>
                  <div class="menu">
                    <ul>
                      <li>
                        <a href="/help#anchor04">予約確認・
                          <br>変更・取消
                        </a>
                      </li>
                      <li>
                        <a href="/help.html">ヘルプ・
                          <br>チャットボット
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
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
</style>
