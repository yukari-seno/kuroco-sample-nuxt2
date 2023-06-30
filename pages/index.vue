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
            <li v-for="(slide, index) in topBanner.list" :key="index" :index="index + 1" :class="{ active: page === index }">
              <a :href="slide.url" :target="slide.transitionDev.key === '1' ? '_self' : '_blank'">
                <img class="slide-image" :alt="slide.img.desc" :src="slide.img.url">
              </a>
            </li>
            <template #back-arrow>
              <img class="ssr-carousel-back-icon" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMC41IiB5PSIwLjUiIHdpZHRoPSI0NyIgaGVpZ2h0PSI0NyIgcng9IjIzLjUiIGZpbGw9IiMwMDQxNTAiIGZpbGwtb3BhY2l0eT0iMC44IiBzdHJva2U9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xOC43NSAxMy41TDI5LjI1IDI0TDE4Ljc1IDM0LjUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+Cjwvc3ZnPgo=">
            </template>
            <template #next-arrow>
              <img class="ssr-carousel-next-icon" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMC41IiB5PSIwLjUiIHdpZHRoPSI0NyIgaGVpZ2h0PSI0NyIgcng9IjIzLjUiIGZpbGw9IiMwMDQxNTAiIGZpbGwtb3BhY2l0eT0iMC44IiBzdHJva2U9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xOC43NSAxMy41TDI5LjI1IDI0TDE4Ljc1IDM0LjUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+Cjwvc3ZnPgo=">
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
            <!-- <img class="pc-only" src="" width="1980" height="218" alt="広告">
            <img class="sp-only" src="" width="375" height="150" alt="広告"> -->
        </div>
    </div>
    <common-footer/>
  </div>
</template>

<script>
import axios from 'axios'
import CommonHeader from '~/components/CommonHeader'
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
    const [topBanner, theme, sightseeing, advertisement, coupon, prefecture, otherLink, area] = await Promise.all([
      // トップバナー取得
      $axios.$get('/rcms-api/5/banner'),
      // テーマ・目的別に宿を探すリスト
      $axios.$get('/rcms-api/5/theme').then(async (data) => {
        let cnt = 0
        for (const element of data.list) {
          if (element.shisetsu !== '') {
            // TVG施設詳細API
            data.list[cnt].shisetsuImage = await getShisetsuImg(element.shisetsu).then((data) => {
              return data
            })
          }
          cnt++
        }
        return data
      }),
      // おすすめ観光ガイド取得
      $axios.$get('/rcms-api/5/sightseeing'),
      // 広告PR取得
      $axios.$get('/rcms-api/5/advertisement'),
      // クーポン取得
      $axios.$get('/rcms-api/5/coupon'),
      // 都道府県から探す取得
      $axios.$get('/rcms-api/5/prefecture'),
      // その他リンク取得
      $axios.$get('/rcms-api/5/otherLink'),
      // TVGエリアマスタ情報API
      tvgApi.get(areaMasterUrl).then((area) => {
        return area.data
      }).catch((err) => {
        console.log(err)
      })
    ])

    return { topBanner, theme, sightseeing, advertisement, coupon, prefecture, otherLink, area }
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

.slide-image {
  width: 100%;
}

</style>

<style>
@import "assets/css/top-carousel.css";
</style>
