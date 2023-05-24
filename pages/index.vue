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
          <div class="title pbNested pbNestedWrapper " id="pbBlock3560920">
            <div class="pbBlock pbBlockBase">
              <div>
                <p>
                  テーマ・目的別に宿を探す
                </p>
              </div>
            </div>
          </div>
          <div class="plus-carousel pbNested pbNestedWrapper " id="pbBlock2649944">
            <ul class="slick-initialized slick-slider">
              <div aria-live="polite" class="slick-list draggable">
                <div class="slick-track" role="listbox" style="opacity: 1; width: 1020px; transform: translate3d(0px, 0px, 0px);">
                  <li v-for="(slide, index) in promotion.list" :key="index" class="slick-slide slick-current" tabindex="-1" style="width: 204px;">
                    <a :href="slide.url" target="_new" tabindex="0">
                      <img :src="slide.imageurl.url" :alt="slide.imageurl.desc">
                      <h4><span class="text">{{ slide.caption }}</span></h4>
                    </a>
                  </li>
                </div>
              </div>
            </ul>
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
</style>
