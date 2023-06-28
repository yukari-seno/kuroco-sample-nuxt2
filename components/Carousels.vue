<template>
  <div class="themebox">
    <div class="search-theme__container">
      <!-- テーマ・目的別にホテル・旅館を探す -->
      <div class="title">
        <h2 class="marker-under">{{ theme.details.title }}</h2>
          <!-- <div v-if="theme.pageInfo.totalCnt > 4" class="btn--more pc-only"><a :href="theme.details.listURL">すべてみる</a></div> -->
      </div>
      <div class="theme-slider slider-wrap">
        <ssr-carousel
          :slides-per-page="4"
          show-arrows
        >
          <div
            v-for="(slide, index) in theme.details.url"
            :key="index"
            :index="index + 1"
            class="theme-sec-slider__item swiper-slide slider-item-body"
            data-slick-index="0"
            aria-hidden="false"
            tabindex="0"
          >
            <slide :index="index + 1">
              <div class="theme-card">
                <div v-if="theme.details.shisetsuImage[index]" class="theme-card__view">
                  <img
                    :src="theme.details.shisetsuImage[index]"
                    width="262"
                    height="197"
                    alt=""
                    class="lazyload"
                    loading="lazy"
                  >
                </div>
                <div v-else-if="theme.details.backgroungColoer[index]" class="theme-card__view">
                  <div
                    :style="'background-color:#' + theme.details.backgroungColoer[index] + ';'"
                    width="262"
                    height="197"
                    alt=""
                    class="lazyload"
                    loading="lazy"
                  ></div>
                </div>
                <div v-else class="theme-card__view">
                  <img
                    :src="theme.details.img[index].url"
                    width="262"
                    height="197"
                    alt=""
                    class="lazyload"
                    loading="lazy"
                  >
                </div>
                <div class="theme-card__block">
                  <p class="theme-card__title">
                    <a :href="slide" :alt="theme.details.img.desc" class="theme-card__link" tabindex="0">{{ theme.details.note[index] }}</a>
                  </p>
                </div>
              </div>
            </slide>
          </div>
        </ssr-carousel>
      </div>
    </div>
    <!-- テーマ・目的別にホテル・旅館を探す ここまで -->
    <hr>
    <!-- おすすめ観光ガイド ここから -->
    <div class="search-theme__container">
      <div class="title">
        <h2 class="marker-under">{{ sightseeing.details.sightseeingListTitle }}</h2>
          <!-- <div v-if="sightseeing.pageInfo.totalCnt > 4" class="btn--more pc-only"><a :href="theme.details.sightseeingListURL">すべてみる</a></div> -->
      </div>
      <div class="theme-slider slider-wrap">
        <ssr-carousel
          :slides-per-page="4"
          show-arrows
        >
          <div
            v-for="(slide, index) in sightseeing.details.url"
            :key="index"
            :index="index + 1"
            class="theme-sec-slider__item swiper-slide slider-item-body"
            data-slick-index="0"
            aria-hidden="false"
            tabindex="0"
          >
            <slide :index="index + 1">
              <div class="theme-card">
                <div class="theme-card__view">
                  <img
                    :src="sightseeing.details.img[index].url"
                    width="262"
                    height="197"
                    alt=""
                    class="lazyload"
                    loading="lazy"
                  >
                </div>
                <div class="theme-card__block">
                    <p class="theme-card__title">
                      <a :href="slide" :alt="sightseeing.details.img.desc" class="theme-card__link" tabindex="0">{{ sightseeing.details.note[index] }}</a>
                    </p>
                  </div>
              </div>
            </slide>
          </div>
        </ssr-carousel>
      </div>
    </div>
    <!-- おすすめ観光ガイド ここまで -->
    <hr>
    <!-- 広告[PR] ここから -->
    <div class="search-theme__container">
      <div class="title">
        <h2 class="marker-under">{{ advertisement.details.advertisementListTitle }}</h2>
      </div>
      <div class="theme-slider slider-wrap">
        <ssr-carousel
          :slides-per-page="4"
          show-arrows
        >
          <div
            v-for="(slide, index) in advertisement.details.url"
            :key="index"
            :index="index + 1"
            class="theme-sec-slider__item swiper-slide slider-item-body"
            data-slick-index="0"
            aria-hidden="false"
            tabindex="0"
          >
            <slide :index="index + 1">
              <div class="theme-card">
                <div class="theme-card__view">
                  <img
                    :src="advertisement.details.img[index].url"
                    width="262"
                    height="197"
                    alt=""
                    class="lazyload"
                    loading="lazy"
                  >
                </div>
                <div class="theme-card__block">
                    <p class="theme-card__title">
                      <a :href="slide" :alt="advertisement.details.img.desc" class="theme-card__link" tabindex="0">{{ advertisement.details.note[index] }}</a>
                    </p>
                  </div>
              </div>
            </slide>
          </div>
        </ssr-carousel>
      </div>
    </div>
    <!-- 広告[PR] ここまで -->
    <hr>
    <!-- クーポン ここから -->
    <div class="search-theme__container">
      <div class="title">
        <h2 class="marker-under">{{ coupon.details.couponListTitle }}</h2>
          <!-- <div v-if="coupon.pageInfo.totalCnt > 4" class="btn--more pc-only"><a :href="theme.details.couponListURL">すべてみる</a></div> -->
      </div>
      <div class="theme-slider slider-wrap">
        <ssr-carousel
          :slides-per-page="4"
          show-arrows
        >
          <div
            v-for="(slide, index) in coupon.details.url"
            :key="index"
            :index="index + 1"
            class="theme-sec-slider__item swiper-slide slider-item-body"
            data-slick-index="0"
            aria-hidden="false"
            tabindex="0"
          >
            <slide :index="index + 1">
              <div class="theme-card">
                <div class="theme-card__view">
                  <img
                    :src="coupon.details.img[index].url"
                    width="262"
                    height="197"
                    alt=""
                    class="lazyload"
                    loading="lazy"
                  >
                </div>
                <div class="theme-card__block">
                    <p class="theme-card__title">
                      <a :href="slide" :alt="coupon.details.img.desc" class="theme-card__link" tabindex="0">{{ coupon.details.note[index] }}</a>
                    </p>
                  </div>
              </div>
            </slide>
          </div>
        </ssr-carousel>
      </div>
    </div>
    <hr>
    <!-- クーポン ここまで -->
  </div>
</template>

<script>

export default {
  props: {
    theme: Object,
    sightseeing: Object,
    advertisement: Object,
    coupon: Object
  }
}
</script>
