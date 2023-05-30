<template>
  <div>
    <common-header />
    <div id="mainArea" class="pbMainArea business">
      <div id="area0" class="pbArea ">
        <div class="pbNested ">
          <div id="pbBlock3255746" class="listType06R pbNested pbNestedWrapper">
            <div class="pbBlock pbBlockBase">
              <div>
                <ul>
                  <li>
                    <a href="/help/oshirase.html">お知らせ一覧</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div id="pbBlock3255714" class="information pbNested pbNestedWrapper">
            <div class="pbNested ">
              <div id="pbBlock3688296" class="pbNested pbNestedWrapper">
                <div class="pbBlock pbBlockBase">
                  <div>
                    <div style="text-align: left;">
                      <p v-for="n in response.details.top_link" :key="n.slag">
                        <a :href="n.url">{{ n.title }}</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="container">
            <ssr-carousel v-model="page" loop>
              <div v-for="(slide, index) in response.details.main_img" :key="index" :index="index + 1">
                <img class="slide-image" :name="slide.desc" :src="slide.url" />
              </div>
            </ssr-carousel>
            <div class="pagination-container">
              <div v-for="(slide, index) in response.details.main_img" :key="index" class="pagination" :class="{ active: page === index }" @click="pagination(index)" />
            </div>
          </div>
          <div class="searchbox page-sec clearlayout">
            <search-module />
          </div>
          <div class="hotel-recently page-sec page-container hotel-sec" id="pbBlock3560920">
            <div class="hotel-recently__head hotel-sec__head">
              <p class="hotel-recently__title heading--underline hotel-sec__title"><span>テーマ・目的別に宿を探す</span></p>
            </div>
          </div>

          <div class="hotel-recently__body slider-wrap idling hotel-sec__body no-slider-progress">
            <div class="hotel-recently__list hotel-sec-slider swiper swiper-container swiper-initialized
            swiper-horizontal swiper-pointer-events swiper-free-mode swiper-backface-hidden is-ready"
            data-slider-items="{'freeMode':true,'navigation':false,'pagination':false,'breakpoints':{'0':{'slidesPerView':1.175},'510':{'slidesPerView':1.7},'740':{'slidesPerView':2.4},'1025':{'slidesPerView':3.4}}}">
              <div id="tvgRecentHotel" class="hotel-recently__items hotel-sec-slider__items swiper-wrapper slick-initialized slick-slider">
                <div class="slick-list draggable">
                  <div class="slick-track" style="opacity: 1; width: 278px; transform: translate3d(0px, 0px, 0px);">
                    <div v-for="(slide, index) in promotion.list"
                    :key="index"
                    class="hotel-recently__item hotel-sec-slider__item swiper-slide slick-slide slick-current slick-active"
                    data-slick-index="0"
                    aria-hidden="false"
                    tabindex="0"
                    style="width: 263px;">
                      <div class="hotelcard">
                        <div class="hotel-card__view">
                          <img :src="slide.imageurl.url" :alt="slide.imageurl.desc">
                        </div>
                        <div class="hotel-card__block">
                          <div class="hotel-card__desc">
                            <p class="hotel-card__title">
                              <a :href="slide.url" :alt="slide.imageurl.desc" class="hotel-card__link" tabindex="0">{{ slide.caption }}</a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-ctrl">
              <div class="swiper-button swiper-button-prev">
              </div>
              <div class="swiper-button swiper-button-next"></div>
              <div class="swiper-pagination"></div>
            </div>
            <div class="slider-progress ready">
              <span class="slider-progress__handle" style="width:100%;transform:translate3d(NaNpx,0,0);"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <common-footer />
  </div>
</template>

<script>
import CommonHeader from '~/components/CommonHeader'
import CommonFooter from '~/components/CommonFooter'

export default {
  components: {
    CommonHeader,
    CommonFooter
  },
  async asyncData ({ $axios }) {
    const [response, promotion] = await Promise.all([
      // コンテンツ取得
      $axios.$get('/rcms-api/3/service/6'),
      // テーマ・目的別に宿を探すリスト
      $axios.$get('/rcms-api/4/service')
    ])
    return { response, promotion }
  },
  data() {
    return {
      page: 0
    }
  },
  head: {
    script: [
      {
        src: '/js/jquery-3.5.1.min.js',
        defer: true
      },
      {
        src: '/js/slick.min.js',
        defer: true
      },
      {
        src: '/js/slick-carousels.js',
        defer: true
      },
      {
        src: '/js/custom/common.js',
        defer: true
      },
      {
        src: '/js/custom/top.js?mexesstest',
        defer: true
      },
      {
        src: '/js/custom/search-keyword.js',
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
    pagination(index) {
      this.page = index
    }
  }
}
</script>

<style scoped>

.container {
  width: 100%;
  max-width: 980px;
  margin: 0 auto;
}

.slide-image {
  width: 100%;
}

/*
.pagination-container {
  display: flex;
  justify-content: center;
  width: 100%;
}

.pagination {
  content: "";
  width: 16px;
  height: 16px;
  margin: 20px 10px 0;
  border-radius: 16px;
  background-color: #ccc;
}

.pagination:hover {
  cursor: pointer;
}

.pagination.active {
  content: "";
  width: 16px;
  height: 16px;
  border-radius: 16px;
  background-color: #555;
}
*/
</style>
