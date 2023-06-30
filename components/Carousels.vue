<template>
  <div class="themebox">
    <div class="search-theme__container">
      <!-- テーマ・目的別にホテル・旅館を探す -->
      <div class="title">
        <h2 class="marker-under">{{ theme.list[0].contents_type_ext_col_01 }}</h2>
          <div v-if="theme.pageInfo.totalCnt > 4" class="btn--more pc-only"><a :href="theme.list.contents_type_ext_col_02">すべてみる</a></div>
      </div>
      <div class="theme-slider slider-wrap">
        <ssr-carousel
          :slides-per-page="4"
          show-arrows
          peek="40"
          :peek-right='40'
        >
          <div
            v-for="(slide, index) in theme.list"
            :key="index"
            :index="index + 1"
            class="theme-sec-slider__item swiper-slide slider-item-body"
            data-slick-index="0"
            aria-hidden="false"
            tabindex="0"
          >
            <slide :index="index + 1">
              <div class="theme-card">
                <div v-if="slide.shisetsuImage" class="theme-card__view">
                  <div class="card-image">
                    <img
                    :src="slide.shisetsuImage ? slide.shisetsuImage : '/assets/images/noimage.jpg'"
                    class="lazyload"
                    loading="lazy"
                    >
                    <p>{{ slide.text }}</p>
                  </div>
                </div>
                <div v-else-if="slide.backgroungColoer" class="theme-card__view">
                  <div class="card-image">
                    <div
                    :style="'background-color:#' + slide.backgroungColoer + ';'"
                    class="lazyload"
                    loading="lazy"
                    >
                      <p>{{ slide.text }}</p>
                    </div>
                  </div>
                </div>
                <div v-else>
                  <div class="theme-card__view pc-only">
                    <div class="card-image">
                      <div>{{ slide.text }}</div>
                      <img
                      :src="slide.img.url"
                      :alt="slide.img.desc"
                      class="lazyload"
                      loading="lazy"
                      >
                    </div>
                  </div>
                  <div class="theme-card__view sp-only">
                    <div class="card-image">
                      <div>{{ slide.text }}</div>
                      <img
                        :src="slide.img_SP.url"
                        :alt="slide.img_SP.desc"
                        class="lazyload"
                        loading="lazy"
                      >
                    </div>
                  </div>
                </div>
                <div class="theme-card__block">
                  <p class="theme-card__title">
                    <a
                      :href="slide.url"
                      :alt="slide.img.desc"
                      class="theme-card__link"
                    >
                      {{ slide.note }}
                    </a>
                  </p>
                </div>
              </div>
            </slide>
          </div>
        </ssr-carousel>
      </div>
      <hr>
    </div>
    <!-- テーマ・目的別にホテル・旅館を探す ここまで -->
    <!-- おすすめ観光ガイド ここから -->
    <div class="search-theme__container">
      <div class="title">
        <h2 class="marker-under">{{ sightseeing.list[0].contents_type_ext_col_01 }}</h2>
          <div v-if="sightseeing.pageInfo.totalCnt > 4" class="btn--more pc-only"><a :href="sightseeing.list.contents_type_ext_col_02">すべてみる</a></div>
      </div>
      <div class="theme-slider slider-wrap">
        <ssr-carousel
          :slides-per-page="4"
          show-arrows
        >
          <div
            v-for="(slide, index) in sightseeing.list"
            :key="index"
            :index="index + 1"
            class="theme-sec-slider__item swiper-slide slider-item-body"
            data-slick-index="0"
            aria-hidden="false"
            tabindex="0"
          >
            <slide :index="index + 1">
              <div class="theme-card">
                <div class="theme-card__view pc-only">
                  <img
                    :src="slide.img.url"
                    :alt="slide.img.desc"
                    class="lazyload"
                    loading="lazy"
                  >
                </div>
                <div class="theme-card__view sp-only">
                  <img
                    :src="slide.img_SP.url"
                    :alt="slide.img_SP.desc"
                    class="lazyload"
                    loading="lazy"
                  >
                </div>
                <div class="theme-card__block">
                    <p class="theme-card__title">
                      <a
                        :href="slide.url"
                        :alt="slide.img.desc"
                        class="theme-card__link"
                        :target="slide.transitionDev.key === '1' ? '_self' : '_blank'"
                      >
                        {{ slide.note }}
                      </a>
                    </p>
                  </div>
              </div>
            </slide>
          </div>
        </ssr-carousel>
      </div>
      <hr>
    </div>
    <!-- おすすめ観光ガイド ここまで -->
    <!-- 広告[PR] ここから -->
    <div v-if="advertisement.pageInfo.totalCnt != 0" class="search-theme__container">
      <div class="title">
        <h2 class="marker-under">{{ advertisement.list[0].contents_type_ext_col_01 }}</h2>
      </div>
      <div class="theme-slider slider-wrap">
        <ssr-carousel
          :slides-per-page="4"
          show-arrows
        >
          <div
            v-for="(slide, index) in advertisement.list"
            :key="index"
            :index="index + 1"
            class="theme-sec-slider__item swiper-slide slider-item-body"
            data-slick-index="0"
            aria-hidden="false"
            tabindex="0"
          >
            <slide :index="index + 1">
              <div class="theme-card">
                <div class="theme-card__view pc-only">
                  <img
                    :src="slide.img.url"
                    :alt="slide.img.desc"
                    class="lazyload"
                    loading="lazy"
                  >
                </div>
                <div class="theme-card__view sp-only">
                  <img
                    :src="slide.img_SP.url"
                    :alt="slide.img_SP.desc"
                    class="lazyload"
                    loading="lazy"
                  >
                </div>
                <div class="theme-card__block">
                    <p class="theme-card__title">
                      <a
                        :href="slide.url"
                        :alt="slide.img.desc"
                        :target="slide.transitionDev.key === '1' ? '_self' : '_blank'"
                        class="theme-card__link"
                      >
                        {{ slide.note }}
                      </a>
                    </p>
                  </div>
              </div>
            </slide>
          </div>
        </ssr-carousel>
      </div>
      <hr>
    </div>
    <!-- 広告[PR] ここまで -->
    <!-- クーポン ここから -->
    <div v-if="coupon.pageInfo.totalCnt != 0" class="search-theme__container">
      <div class="title">
        <h2 class="marker-under">{{ coupon.list[0].contents_type_ext_col_01 }}</h2>
          <div v-if="coupon.pageInfo.totalCnt > 4" class="btn--more pc-only"><a :href="coupon.list.contents_type_ext_col_02">すべてみる</a></div>
      </div>
      <div class="theme-slider slider-wrap">
        <ssr-carousel
          :slides-per-page="4"
          show-arrows
        >
          <div
            v-for="(slide, index) in coupon.list"
            :key="index"
            :index="index + 1"
            class="theme-sec-slider__item swiper-slide slider-item-body"
            data-slick-index="0"
            aria-hidden="false"
            tabindex="0"
          >
            <slide :index="index + 1">
              <div class="theme-card">
                <div class="theme-card__view pc-only">
                  <img
                    :src="slide.img.url"
                    :alt="slide.img.desc"
                    class="lazyload"
                    loading="lazy"
                  >
                </div>
                <div class="theme-card__view sp-only">
                  <img
                    :src="slide.img_SP.url"
                    :alt="slide.img_SP.desc"
                    class="lazyload"
                    loading="lazy"
                  >
                </div>
                <div class="theme-card__block">
                    <p class="theme-card__title">
                      <a :href="slide.url" :alt="slide.img.desc" class="theme-card__link" tabindex="0">{{ slide.note }}</a>
                    </p>
                  </div>
              </div>
            </slide>
          </div>
        </ssr-carousel>
      </div>
      <hr>
    </div>
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
