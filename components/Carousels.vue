<template>
  <div class="themebox">
    <div class="search-theme__container">
      <!-- テーマ・目的別にホテル・旅館を探す -->
      <div class="title">
        <h2 class="marker-under">{{ theme.list[0].contents_type_ext_col_01 }}</h2>
          <div v-if="theme.pageInfo.totalCnt > 4" class="btn--more pc-only"><a :href="theme.list[0].contents_type_ext_col_02">すべてみる</a></div>
      </div>
      <div class="theme-slider slider-wrap">
        <ssr-carousel
          :slides-per-page="4"
          show-arrows
          :peek-right='60'
          :responsive='[
            {
              maxWidth: 768,
              slidesPerPage: 2,
            }
          ]'
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
                <div v-if="slide.hasOwnProperty('shisetsuImage')" class="theme-card__view">
                  <div class="card-image">
                    <img
                    :src="slide.shisetsuImage ?? noImgSrc"
                    class="lazyload"
                    loading="lazy"
                    >
                    <p :style="'color:#' + slide.textColoer + ';'">{{ slide.text }}</p>
                  </div>
                </div>
                <div v-else-if="slide.backgroungColoer" class="theme-card__view">
                  <div class="card-image">
                    <div
                    :style="'background-color:#' + slide.backgroungColoer + ';'"
                    class="lazyload"
                    loading="lazy"
                    >
                      <p :style="'color:#' + slide.textColoer + ';'">{{ slide.text }}</p>
                    </div>
                  </div>
                </div>
                <div v-else>
                  <div class="theme-card__view pc-only">
                    <div class="card-image">
                      <p :style="'color:#' + slide.textColoer + ';'">{{ slide.text }}</p>
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
                      <p :style="'color:#' + slide.textColoer + ';'">{{ slide.text }}</p>
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
          <template #back-arrow>
            <img class="ssr-carousel-back-icon" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMC41IiB5PSIwLjUiIHdpZHRoPSI0NyIgaGVpZ2h0PSI0NyIgcng9IjIzLjUiIGZpbGw9IiMwMDQxNTAiIGZpbGwtb3BhY2l0eT0iMC44IiBzdHJva2U9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xOC43NSAxMy41TDI5LjI1IDI0TDE4Ljc1IDM0LjUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+Cjwvc3ZnPgo=">
          </template>
          <template #next-arrow>
            <img class="ssr-carousel-next-icon" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMC41IiB5PSIwLjUiIHdpZHRoPSI0NyIgaGVpZ2h0PSI0NyIgcng9IjIzLjUiIGZpbGw9IiMwMDQxNTAiIGZpbGwtb3BhY2l0eT0iMC44IiBzdHJva2U9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xOC43NSAxMy41TDI5LjI1IDI0TDE4Ljc1IDM0LjUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+Cjwvc3ZnPgo=">
          </template>
        </ssr-carousel>
        <div class="view-more hotel-sec__more sp-only"><a :href="theme.list[0].contents_type_ext_col_02">すべてみる</a></div>
      </div>
      <hr>
    </div>
    <!-- テーマ・目的別にホテル・旅館を探す ここまで -->
    <!-- おすすめ観光ガイド ここから -->
    <div class="search-theme__container">
      <div class="title">
        <h2 class="marker-under">{{ sightseeing.list[0].contents_type_ext_col_01 }}</h2>
          <div v-if="sightseeing.pageInfo.totalCnt > 4" class="btn--more pc-only"><a :href="sightseeing.list[0].contents_type_ext_col_02">すべてみる</a></div>
      </div>
      <div class="theme-slider slider-wrap">
        <ssr-carousel
          :slides-per-page="4"
          show-arrows
          :peek-right='60'
          :responsive='[
            {
              maxWidth: 768,
              slidesPerPage: 2,
            }
          ]'
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
          <template #back-arrow>
            <img class="ssr-carousel-back-icon" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMC41IiB5PSIwLjUiIHdpZHRoPSI0NyIgaGVpZ2h0PSI0NyIgcng9IjIzLjUiIGZpbGw9IiMwMDQxNTAiIGZpbGwtb3BhY2l0eT0iMC44IiBzdHJva2U9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xOC43NSAxMy41TDI5LjI1IDI0TDE4Ljc1IDM0LjUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+Cjwvc3ZnPgo=">
          </template>
          <template #next-arrow>
            <img class="ssr-carousel-next-icon" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMC41IiB5PSIwLjUiIHdpZHRoPSI0NyIgaGVpZ2h0PSI0NyIgcng9IjIzLjUiIGZpbGw9IiMwMDQxNTAiIGZpbGwtb3BhY2l0eT0iMC44IiBzdHJva2U9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xOC43NSAxMy41TDI5LjI1IDI0TDE4Ljc1IDM0LjUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+Cjwvc3ZnPgo=">
          </template>
        </ssr-carousel>
        <div v-if="sightseeing.pageInfo.totalCnt > 4" class="view-more hotel-sec__more sp-only"><a :href="sightseeing.list[0].contents_type_ext_col_02">すべてみる</a></div>
      </div>
      <hr>
    </div>
    <!-- おすすめ観光ガイド ここまで -->
    <!-- 広告[PR] ここから -->
    <div v-if="advertisement.pageInfo.totalCnt != 0" class="search-theme__container">
      <div class="title">
        <h2 class="marker-under">{{ advertisement.list[0].group_nm }}</h2>
      </div>
      <div class="theme-slider slider-wrap">
        <ssr-carousel
          :slides-per-page="4"
          show-arrows
          :peek-right='60'
          :responsive='[
            {
              maxWidth: 768,
              slidesPerPage: 2,
            }
          ]'
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
          <template #back-arrow>
            <img class="ssr-carousel-back-icon" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMC41IiB5PSIwLjUiIHdpZHRoPSI0NyIgaGVpZ2h0PSI0NyIgcng9IjIzLjUiIGZpbGw9IiMwMDQxNTAiIGZpbGwtb3BhY2l0eT0iMC44IiBzdHJva2U9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xOC43NSAxMy41TDI5LjI1IDI0TDE4Ljc1IDM0LjUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+Cjwvc3ZnPgo=">
          </template>
          <template #next-arrow>
            <img class="ssr-carousel-next-icon" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMC41IiB5PSIwLjUiIHdpZHRoPSI0NyIgaGVpZ2h0PSI0NyIgcng9IjIzLjUiIGZpbGw9IiMwMDQxNTAiIGZpbGwtb3BhY2l0eT0iMC44IiBzdHJva2U9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xOC43NSAxMy41TDI5LjI1IDI0TDE4Ljc1IDM0LjUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+Cjwvc3ZnPgo=">
          </template>
        </ssr-carousel>
      </div>
      <hr>
    </div>
    <!-- 広告[PR] ここまで -->
    <!-- クーポン ここから -->
    <div v-if="coupon.pageInfo.totalCnt != 0" class="search-theme__container">
      <div class="title">
        <h2 class="marker-under">{{ coupon.list[0].contents_type_ext_col_01 }}</h2>
          <div v-if="coupon.pageInfo.totalCnt > 4" class="btn--more pc-only"><a :href="coupon.list[0].contents_type_ext_col_02">すべてみる</a></div>
      </div>
      <div class="theme-slider slider-wrap">
        <ssr-carousel
          :slides-per-page="4"
          show-arrows
          :peek-right='60'
          :responsive='[
            {
              maxWidth: 768,
              slidesPerPage: 2,
            }
          ]'
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
          <template #back-arrow>
            <img class="ssr-carousel-back-icon" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMC41IiB5PSIwLjUiIHdpZHRoPSI0NyIgaGVpZ2h0PSI0NyIgcng9IjIzLjUiIGZpbGw9IiMwMDQxNTAiIGZpbGwtb3BhY2l0eT0iMC44IiBzdHJva2U9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xOC43NSAxMy41TDI5LjI1IDI0TDE4Ljc1IDM0LjUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+Cjwvc3ZnPgo=">
          </template>
          <template #next-arrow>
            <img class="ssr-carousel-next-icon" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMC41IiB5PSIwLjUiIHdpZHRoPSI0NyIgaGVpZ2h0PSI0NyIgcng9IjIzLjUiIGZpbGw9IiMwMDQxNTAiIGZpbGwtb3BhY2l0eT0iMC44IiBzdHJva2U9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xOC43NSAxMy41TDI5LjI1IDI0TDE4Ljc1IDM0LjUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+Cjwvc3ZnPgo=">
          </template>
        </ssr-carousel>
        <div v-if="coupon.pageInfo.totalCnt > 4" class="view-more hotel-sec__more sp-only"><a :href="coupon.list[0].contents_type_ext_col_02">すべてみる</a></div>
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
  },
  computed: {
    noImgSrc () {
      return require('~/assets/images/noimage.jpg')
    }
  }
}
</script>

<style>
  .card-image {
    position: relative;
  }
  .card-image p {
    position: absolute;
    top: 10%;
    left: 5%;
  }
</style>
