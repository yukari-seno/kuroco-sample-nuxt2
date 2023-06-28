<template>
  <div>
    <common-header />
    <hamburger-menu />
    <div id="mainArea" class="pbMainArea business">
      <div id="area0" class="pbArea ">
        <div class="pbNested ">
          <div class="container">
            <ssr-carousel
              :slides-per-page="1"
              :center="true"
              :peek="50"
              loop
              show-dots
              show-arrows
            >
              <div v-for="(slide, index) in topBanner.details.img" :key="index" :index="index + 1">
                <img class="slide-image" :name="slide.desc" :src="slide.url">
              </div>
            </ssr-carousel>
          </div>
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
              <div v-for="pre in prefecture.list" :key="pre.topics_id">
                <input
                  :id="$AREA_TAB_NAME[pre.area.key]"
                  v-model="pref"
                  v-bind:checked="{'true': pref_show == $AREA_TAB_NAME[pre.area.key]}"
                  :value="$AREA_TAB_NAME[pre.area.key]"
                  type="radio"
                  name="12area"
                  @click="prefClick(pre.area.key)"
                >
                <label :for="$AREA_TAB_NAME[pre.area.key]">{{ pre.area.label }}</label>
              </div>
            </div>
            <div class="prefectures">
              <div v-for="pre in prefecture.list" :key="pre.topics_id">
                <div v-if="pref_show == $AREA_TAB_NAME[pre.area.key]" :class="$AREA_TAB_NAME[pre.area.key] + ' prefecture-col'">
                  <div v-for="(code, index) in pre.code" :key="index" :index="index + 1" class="prefecture">
                    <a :href="tvg_url + $AREA_EN_NAME[code.key] + '/pr' + code.key">
                      <img :alt="pre.img[index].desc" :src="pre.img[index].url">
                    </a>
                  </div>
                </div>
                <div v-else-if="pref_show != $AREA_TAB_NAME[pre.area.key]" :class="$AREA_TAB_NAME[pre.area.key] + ' prefecture-col'" style="display: none;">
                  <div v-for="(code, index) in pre.code" :key="index" :index="index + 1" class="prefecture">
                    <a :href="tvg_url + $AREA_EN_NAME[code.key] + '/pr' + code.key">
                      <img :alt="pre.img[index].desc" :src="pre.img[index].url">
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- その他リンク ここから -->
          <div class="online-insurance__container">
            <div class="title">
              <h2 class="marker-under">{{ otherLink.details.title }}</h2>
              <div class="btn--more pc-only"><a href="https://www.tavigator.co.jp/insurance/policy.html">{{ otherLink.details.listTitle }}</a></div>
            </div>
            <ul>
              <li v-for="(other, index) in otherLink.details.linkURL" :key="index">
                <a :href="other">
                  {{ otherLink.details.linkTitle[index] }}
                </a>
              </li>
            </ul>
            <div class="view-more hotel-sec__more sp-only"><a href="https://www.tavigator.co.jp/insurance/policy.html">{{ otherLink.details.listTitle }}</a></div>
          </div>
          <div class="container">
            <div class="page-sec page-container hotel-sec">
              <div class="hotel-sec__head">
                <p class="heading--underline hotel-sec__title">
                  <span></span>
                </p>
              </div>
            </div>
          </div>
          <!-- その他リンク ここまで -->
        </div>
      </div>
    </div>
    <common-footer :footerLink="footerLink"/>
  </div>
</template>

<script>
import axios from 'axios'
import CommonHeader from '~/components/CommonHeader'
import HamburgerMenu from '~/components/HamburgerMenu'
import CommonFooter from '~/components/CommonFooter'
import SearchModule from '~/components/SearchModule'
import Carousels from '~/components/Carousels'

// TVGAPI専用のエンドポイントのインスタンス作成
const tvgApi = axios.create({
  baseURL: process.env.TVG_API,
  headers: { 'Content-Type': 'application/json' },
  responseType: 'json'
})

// TVG施設詳細API
async function getShisetsuImg(data) {
  const shisetsuDetailUrl = process.env.SHISETSU_DETAIL_API
  return await tvgApi.get(shisetsuDetailUrl, { params: { shisetsu: data } }).then((shisetsuData) => {
    return shisetsuData.data.Data.Hotel.ShisetsuImage
  }).catch((err) => {
    console.log(err.message)
  })
}

export default {
  components: {
    CommonHeader,
    CommonFooter,
    SearchModule,
    Carousels
  },
  async asyncData ({ $axios }) {
    const areaMasterUrl = process.env.AREA_MASTER_API
    const [topBanner, theme, sightseeing, advertisement, coupon, prefecture, otherLink, footerBanner, footerLink, area] = await Promise.all([
      // トップバナー取得
      $axios.$get('/rcms-api/5/topBanner/12'),
      // テーマ・目的別に宿を探すリスト
      $axios.$get('/rcms-api/5/theme/15').then(async (data) => {
        const shisetsuImgList = []
        for (const element of data.details.shisetsu) {
          if (element) {
            // TVG施設詳細API
            shisetsuImgList.push(await getShisetsuImg(element).then((data) => {
              return data
            }))
          } else {
            shisetsuImgList.push('')
          }
        }
        data.details.shisetsuImage = shisetsuImgList
        return data
      }),
      // おすすめ観光ガイド取得
      $axios.$get('/rcms-api/5/sightseeing/20'),
      // 広告PR取得
      $axios.$get('/rcms-api/5/advertisement/21'),
      // クーポン取得
      $axios.$get('/rcms-api/5/coupon/22'),
      // 都道府県から探す取得
      $axios.$get('/rcms-api/5/prefecture'),
      // その他リンク取得
      $axios.$get('/rcms-api/5/otherLink/18'),
      // フッターバナー取得
      $axios.$get('/rcms-api/5/footerBanner/17'),
      // フッターリンク取得
      $axios.$get('/rcms-api/5/footerLink'),
      // TVGエリアマスタ情報API
      tvgApi.get(areaMasterUrl).then((area) => {
        return area.data
      }).catch((err) => {
        console.log(err)
      })
    ])

    return { topBanner, theme, sightseeing, advertisement, coupon, prefecture, otherLink, footerLink, footerBanner, area }
  },
  data() {
    return {
      page: 0,
      tvg_url: process.env.TVG_URL,
      pref: 'hokkaido-tohoku',
      pref_show: 'hokkaido-tohoku'
    }
  },
  head: {
    script: [
      {
        src: '/js/jquery-3.5.1.min.js',
        defer: true
      },
      {
        src: '/js/custom/common.js',
        defer: true
      },
      {
        src: '/js/custom/top.js',
        defer: true
      },
      {
        src: '/js/custom/search-area.js',
        defer: true
      },
      {
        src: '/js/custom/search-room-nums.js',
        defer: true
      },
      {
        src: '/js/custom/search-checkin-out.js',
        defer: true
      },
      {
        src: '/js/custom/search-tags.js',
        defer: true
      },
      {
        src: '/js/custom/panel-util.js',
        defer: true
      }
    ]
  },
  methods: {
    prefClick(num) {
      this.pref = this.$AREA_TAB_NAME[num]
      this.pref_show = this.$AREA_TAB_NAME[num]
    }
  }
}
</script>

<style scoped>

@import "assets/css/top.css";

.container {
  width: 100%;
  max-width: 980px;
  margin: 0 auto;
}

.slide-image {
  width: 100%;
}

</style>
