<template>
  <div class="srh-param__col srh-param__col--area">
    <label for="srh-param-area" class="form-label">
      エリア<span class="required">必須</span>
    </label>
    <input
      id="srh-param-area"
      type="text"
      class="form-control ignore form-input form-input--select form-input--area fomr-error"
      placeholder="エリアを選択"
      required
      readonly="readonly"
      data-panel-toggle="srh-area"
      :value="areaName"
    >
    <div id="area_error" class="form-error-mess none">
      ※ エリアを選択してください。
    </div>
    <div class="panel panel--srh-area" data-panel="srh-area">
      <div class="panel-wrap">
        <div class="panel-dialog">
          <div class="panel-block">
            <div class="panel-ctrl">
              <button type="button" class="panel-close" data-panel-close="srh-area">
                ×
              </button>
            </div>
            <div class="panel-content srh-param-area" data-tab-root="area_select">
              <div class="panel-body">
                <div class="panel-body__inner">
                  <div class="tab-content">
                    <div id="area_select-area" class="tab-content__pane active" data-tab-cts="area_select">
                      <div class="area-select-area" data-depth="0">
                        <ul class="area-select-area__items">
                          <!-- 都道府県ループ -->
                          <div v-for="areas in area.Area" :key="areas.code">
                            <li v-for="pref in areas.Prefecture" :key="pref.code" class="area-select-area__item">
                              <div class="area-select-area__card">
                                <button type="button" class="area-select-area__acc-btn" data-accordion-toggle>
                                  <span class="area-select-area__acc-ico">＋</span>
                                </button>
                                <label class="form-radio">
                                  <input
                                    :id="'area_' + pref.code"
                                    type="radio"
                                    name="area_select"
                                    :value="$AREA_EN_NAME[pref.code] + '/pr' + pref.code"
                                    class="form-radio-input"
                                    :checked="areaCode===pref.code? true : false"
                                    >
                                    <!-- @click="areaSelect(pref)" -->
                                  <span class="form-radio-label">{{ pref.name }}</span>
                                </label>
                              </div>
                              <div class="area-select-area-sub depth-last" data-accordion-cts data-depth="1">
                                <ul class="area-select-area__items">
                                  <!-- 広域地区ループ -->
                                  <li v-for="sub in pref.SubArea" :key="sub.code" class="area-select-area__item">
                                    <div class="area-select-area__card">
                                      <button type="button" class="area-select-area__acc-btn" data-accordion-toggle>
                                        <span class="area-select-area__acc-ico">＋</span>
                                      </button>
                                      <label class="form-radio">
                                        <input
                                          :id="'area_' + sub.code"
                                          type="radio"
                                          name="area_select"
                                          :value="$AREA_EN_NAME[pref.code] + '/su' + sub.code"
                                          class="form-radio-input"
                                          >
                                          <!-- @click="areaSelect(sub)" -->
                                        <span class="form-radio-label">{{ sub.name }}</span>
                                      </label>
                                    </div>
                                    <div class="area-select-area-sub depth-last" data-accordion-cts data-depth="2">
                                      <!-- 詳細地区 -->
                                      <ul v-for="mesh in sub.Mesh" :key="mesh.code" class="area-select-area__items">
                                        <li class="area-select-area__item">
                                          <div class="area-select-area__card">
                                            <label class="form-radio">
                                              <input
                                                :id="'area_' + mesh.code"
                                                type="radio"
                                                name="area_select"
                                                :value="$AREA_EN_NAME[pref.code] + '/ms' + mesh.code"
                                                class="form-radio-input"
                                                >
                                                <!-- @click="areaSelect(mesh)" -->
                                              <span class="form-radio-label">{{ mesh.name }}</span>
                                            </label>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </li>
                          </div>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="panel-footer">
                <div class="panel-footer__inner">
                  <ul class="panel-action__items">
                    <li class="panel-action__item panel-action__item--submit">
                      <button type="button" class="panel-action__btn panel-action__btn--submit btn btn--submit">
                        閉じる
                      </button>
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
</template>

<script>
export default {
  props: ['area'],
  data() {
    return {
      areaName: '東京都',
      areaCode: '13'
    }
  }
}
</script>
