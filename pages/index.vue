<template>
  <div>
    <common-header />
    <div id="main-contents">
      <div class="mv-container">
        <ul class="slide">
          <ssr-carousel
            :slides-per-page="1"
            :center="true"
            :peek='400'
            loop
            :show-dots="topBanner.pageInfo.totalCnt > 1 ? true : false"
            show-arrows
            v-model="page"
            :autoplay-delay="5"
            :responsive='[
            {
              maxWidth: 1400,
              peek: 300,
            },
            {
              maxWidth: 1024,
              peek: 200,
            },
            {
              maxWidth: 768,
              peek: 50,
            }
          ]'
            >
            <li v-for="(slide, index) in topBanner.list" :key="index" :class="{ active: page === index }">
              <a :href="slide.url" :target="slide.transitionDev.key === '1' ? '_self' : '_blank'">
                <img class="slide-image" :alt="slide.img.desc" :src="slide.img.url">
              </a>
            </li>
            <template #back-arrow>
              <img alt="" class="ssr-carousel-back-icon" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMC41IiB5PSIwLjUiIHdpZHRoPSI0NyIgaGVpZ2h0PSI0NyIgcng9IjIzLjUiIGZpbGw9IiMwMDQxNTAiIGZpbGwtb3BhY2l0eT0iMC44IiBzdHJva2U9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xOC43NSAxMy41TDI5LjI1IDI0TDE4Ljc1IDM0LjUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+Cjwvc3ZnPgo=">
            </template>
            <template #next-arrow>
              <img alt="" class="ssr-carousel-next-icon" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMC41IiB5PSIwLjUiIHdpZHRoPSI0NyIgaGVpZ2h0PSI0NyIgcng9IjIzLjUiIGZpbGw9IiMwMDQxNTAiIGZpbGwtb3BhY2l0eT0iMC44IiBzdHJva2U9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xOC43NSAxMy41TDI5LjI1IDI0TDE4Ljc1IDM0LjUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+Cjwvc3ZnPgo=">
            </template>
          </ssr-carousel>
        </ul>
      </div>
      <div class="container">
        <!-- 検索モジュール -->
        <search-module :area="area.Data" />
        <!-- 各カルーセル -->
        <carousels :theme="theme" :sightseeing="sightseeing" :advertisement="advertisement" :coupon="coupon" />
        <!-- 都道府県から探す -->
        <div class="area__container">
          <div class="title">
            <h2 class="marker-under">都道府県から探す</h2>
          </div>
          <div class="jp-area">
            <div v-for="(pre, index) in prefecture" :key="index">
              <input
              :id="$AREA_TAB_NAME[pre.category.ext_col_01]"
              v-model="pref"
              v-bind:checked="{'true': pref_show == $AREA_TAB_NAME[pre.category.ext_col_01]}"
              :value="$AREA_TAB_NAME[pre.category.ext_col_01]"
              type="radio"
              name="12area"
              @click="prefClick(pre.category.ext_col_01)"
              >
              <label :for="$AREA_TAB_NAME[pre.category.ext_col_01]">{{ pre.category.category_nm }}</label>
            </div>
          </div>
          <div class="prefectures">
            <div v-for="(area, key) in prefecture" :key="key">
              <div v-if="pref_show == $AREA_TAB_NAME[area.category.ext_col_01]" :class="$AREA_TAB_NAME[area.category.ext_col_01] + ' prefecture-col'">
                <div v-for="(pre, index) in area.list" :key="index" class="prefecture">
                  <a :href="tvg_url + $AREA_EN_NAME[pre.code.key] + '/pr' + pre.code.key">
                    <img :alt="pre.img.desc" :src="pre.img.url" class="pc-only">
                    <img :alt="pre.img_SP.desc" :src="pre.img_SP.url" class="sp-only">
                  </a>
                </div>
              </div>
              <div v-else-if="pref_show != $AREA_TAB_NAME[area.category.ext_col_01]" :class="$AREA_TAB_NAME[area.category.ext_col_01] + ' prefecture-col'" style="display: none;">
                <div v-for="(pre, index) in area.list" :key="index" class="prefecture">
                  <a :href="tvg_url + $AREA_EN_NAME[pre.code.key] + '/pr' + pre.code.key">
                    <img :alt="pre.img.desc" :src="pre.img.url" class="pc-only">
                    <img :alt="pre.img_SP.desc" :src="pre.img_SP.url" class="sp-only">
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- その他リンク ここから -->
        <div v-if="otherLink.pageInfo.totalCnt != 0" class="online-insurance__container">
          <div class="title">
            <h2 class="marker-under">{{ otherLink.list[0].contents_type_ext_col_01 }}</h2>
            <div class="btn--more pc-only"><a href="https://www.tavigator.co.jp/insurance/policy.html">{{ otherLink.list[0].contents_type_ext_col_02 }}</a></div>
          </div>
          <ul>
            <li v-for="(link, index) in otherLink.list" :key="index">
              <a :href="link.url" :target="link.transitionDev.key === '1' ? '_self' : '_blank'">
                {{ link.name }}
              </a>
            </li>
          </ul>
          <div class="view-more hotel-sec__more sp-only"><a :href="otherLink.list[0].contents_type_ext_col_03">{{ otherLink.list[0].contents_type_ext_col_02 }}</a></div>
        </div>
        <!-- その他リンク ここまで -->
      </div>
        <div class="ad-img">
          <!-- 二次開発移行追加する可能性あり -->
            <!-- <img class="pc-only" src="" width="1980" height="218" alt="広告">
            <img class="sp-only" src="" width="375" height="150" alt="広告"> -->
        </div>
    </div>
    <common-footer :footerLink="footerLink"/>
  </div>
</template>

<script>
import axios from 'axios'
import CommonHeader from '~/components/CommonHeader'
import CommonFooter from '~/components/CommonFooter'
import SearchModule from '~/components/SearchModule'
import Carousels from '~/components/Carousels'

export default {
  components: {
    CommonHeader,
    CommonFooter,
    SearchModule,
    Carousels
  },
  async asyncData ({ $axios, $KUROCO_API_URL, $TVG_URL, redirect }) {
    // 都道府県から探すタブ数(0始まり)
    const prefectureTabMax = 9
    // フッターリンクカテゴリー数(0始まり)
    const footerLinkMax = 3
    // TVGAPI専用のエンドポイントのインスタンス作成
    const tvgApi = axios.create({
      baseURL: process.env.TVG_API_URL,
      headers: { 'Content-Type': 'application/json' },
      responseType: 'json'
    })
    const areaMasterUrl = $TVG_URL.AREA_MASTER_API
    const [topBanner, theme, sightseeing, advertisement, coupon, prefecture, otherLink, footerLink, area] = await Promise.all([
      // トップバナー取得
      $axios.$get($KUROCO_API_URL.BANNER_API),
      // テーマ・目的別に宿を探すリスト
      $axios.$get($KUROCO_API_URL.THEMA_API).then(async (data) => {
        let cnt = 0
        for (const element of data.list) {
          if (element.shisetsu !== '') {
            // TVG施設詳細API
            data.list[cnt].shisetsuImage = await tvgApi.get($TVG_URL.SHISETSU_DETAIL_API,
              { params: { shisetsu: element.shisetsu } }).then((shisetsuData) => {
              return shisetsuData.data.Data.Hotel.ShisetsuImage
            }).then((data) => {
              return data
            }).catch((err) => {
              console.log(err.message)
              throw new Error('API Error')
            })
          }
          cnt++
        }
        return data
      }),
      // おすすめ観光ガイド取得
      $axios.$get($KUROCO_API_URL.SHIGHTSEEING_API),
      // 広告PR取得
      $axios.$get($KUROCO_API_URL.ADVERTISEMENT_API),
      // クーポン取得
      $axios.$get($KUROCO_API_URL.COUPON_API),
      // 都道府県から探す取得
      $axios.$get($KUROCO_API_URL.PREFECTURE_API),
      // その他リンク取得
      $axios.$get($KUROCO_API_URL.OTHERLINK_API),
      // フッターリンク取得
      $axios.$get($KUROCO_API_URL.FOOTERLINK_API),
      // TVGエリアマスタ情報API
      tvgApi.get(areaMasterUrl).then((area) => {
        return area.data
      }).catch((err) => {
        console.log(err)
        throw new Error('API Error')
      }),

      $axios.onError((err) => {
        // axiosの通信でエラーが発生した時にエラーページにリダイレクト
        console.log(err)
        throw new Error('API Error')
      })
    ])
    // トップバナー、テーマ・目的別、観光ガイド、その他リンクが0件の場合、エラーぺージへ
    if (topBanner.pageInfo.totalCnt === 0 || theme.pageInfo.totalCnt === 0 ||
    sightseeing.pageInfo.totalCnt === 0 || otherLink.pageInfo.totalCnt === 0) {
      throw new Error('API Error')
    }
    // 都道府県から探す0件の場合、エラー
    if (!prefecture[prefectureTabMax]) {
      throw new Error('API Error')
    }
    // フッターリンク0件の場合、エラー
    if (!footerLink[footerLinkMax]) {
      throw new Error('API Error')
    }
    return { topBanner, theme, sightseeing, advertisement, coupon, prefecture, otherLink, footerLink, area }
  },
  data() {
    return {
      page: 0,
      tvg_url: process.env.BASE_TVG_URL,
      pref: 'hokkaido-tohoku',
      pref_show: 'hokkaido-tohoku'
    }
  },
  computed: {
    currentPageForCanonical() {
      return this.$route.path.slice(1)
    }
  },
  head() {
    return {
      script: [
        {
          src: '/js/custom/top.js',
          defer: true
        },
        {
          src: '/js/custom/search-area.js',
          defer: true
        },
        {
          src: '/js/custom/search-checkin-out.js',
          defer: true
        },
        {
          src: '/js/custom/search-tags.js',
          defer: true
        }
      ],
      title: 'ホテル・旅館の宿泊予約はたびゲーター',
      h1: 'ホテル・旅館の宿泊予約はたびゲーター',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'ホテル・旅館の宿泊予約をするならたびゲーター。全国のホテル・旅館をご希望の日程や条件でお探しいただけます。厳選ホテル・旅館で使える、たびゲーター限定割引クーポンも配布中。割引クーポンを使って、お得に宿泊できます。宿泊予約にぜひ、たびゲーターをご利用ください。'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'ホテル・旅館の宿泊予約はたびゲーター'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'ホテル・旅館の宿泊予約をするならたびゲーター。全国のホテル・旅館をご希望の日程や条件でお探しいただけます。厳選ホテル・旅館で使える、たびゲーター限定割引クーポンも配布中。割引クーポンを使って、お得に宿泊できます。宿泊予約にぜひ、たびゲーターをご利用ください。'
        }
      ],
      link: [
        {
          rel: 'canonical',
          href: `${process.env.BASE_URL}${this.currentPageForCanonical}`
        }
      ]
    }
  },
  methods: {
    prefClick(num) {
      this.pref = this.$AREA_TAB_NAME[num]
      this.pref_show = this.$AREA_TAB_NAME[num]
    }
  },
  mounted() {
    this.$nextTick(function () {
      const commonScript = document.createElement('script')
      commonScript.setAttribute(
        'src',
        '/js/custom/common.js'
      )
      document.head.appendChild(commonScript)
      const hamburgerScript = document.createElement('script')
      hamburgerScript.setAttribute(
        'src',
        '/js/custom/hamburger.js'
      )
      document.head.appendChild(hamburgerScript)
    })
  }
}
</script>

<style scoped>

@import "assets/css/top.css";

.slide-image {
  width: 100%;
}
.prefecture-tab {
  transition: 0.3s;
}

</style>

<style>
@import "assets/css/top-carousel.css";
</style>
