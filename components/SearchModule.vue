<template>
  <div class="searchbox page-sec clearlayout">
    <div class="searchbox__container ancher-tg" id="searchbox">
      <div class="searchbox__body">
        <div class="searchbox-tab-content">
          <div class="searchbox__head">
            <p class="searchbox__title heading--underline">
              <span>国内宿泊予約</span>
            </p>
          </div>
          <div id="search-param" class="searchbox-tab-content__pane active" data-tab-cts="searchbox">
            <form method="GET" :action="baseUrl + 'search'" autocomplete="off">
              <div class="srh-param">
                <div class="srh-param__row">
                  <!-- エリア条件 -->
                  <search-module-condition-area :area="area"/>
                  <div class="srh-param__col srh-param__col--keyword">
                    <div class="form-label">
                      <label for="srh-param-keyword" class="form-label">キーワード</label>
                      <label class="form-radio ">
                        <input type="radio" class="form-radio-input plan-radio-input" v-model="keyword" value="skeyword"/>
                        <span class="form-radio-label">施設</span>
                      </label>
                      <label class="form-radio">
                        <input type="radio" class="form-radio-input plan-radio-input" v-model="keyword" value="pkeyword"/>
                        <span class="form-radio-label">プラン</span>
                      </label>
                    </div>
                    <input
                      id="srh-param-keyword"
                      type="text"
                      class="form-control ignore form-input form-input--search"
                      name="keyword[word]"
                      :placeholder="placeholder"
                      maxlength="100"
                    >
                  </div>
                  <div class="srh-param__col srh-param__col--stay">
                    <div class="form-calrange">
                      <div class="form-calrange__input">
                        <label for="srh-param-checkin" class="form-label">チェックイン</label>
                        <input
                          id="srh-param-checkin"
                          type="text"
                          class="form-control ignore form-input form-input--select form-input--calendar"
                          placeholder=""
                          :value="today"
                          name="date[ckin]"
                          readonly="readonly"
                          data-panel-toggle="stay"
                          data-check-in=""
                        >
                      </div>
                      <div class="form-calrange__split">
                        ～
                      </div>
                      <div class="form-calrange__input">
                        <label for="srh-param-checkout" class="form-label">チェックアウト</label>
                        <input
                          id="srh-param-checkout"
                          type="text"
                          class="form-control ignore form-input form-input--select form-input--calendar"
                          placeholder=""
                          :value="nextday"
                          name="date[ckout]"
                          readonly="readonly"
                          data-panel-toggle="stay"
                          data-check-out=""
                        >
                      </div>
                      <div class="panel panel--stay" data-panel="stay">
                        <div class="panel-wrap">
                          <div class="panel-dialog">
                            <div class="panel-block">
                              <div class="panel-ctrl">
                                <button type="button" class="panel-close" data-panel-close="stay">
                                  ×
                                </button>
                              </div>
                              <div class="panel-content srh-param-stay">
                                <div class="panel-header">
                                  <div class="panel-header__inner">
                                    <ul class="calrange-options__items"> </ul>
                                  </div>
                                </div>
                                <div class="panel-body">
                                  <div class="panel-body__inner">
                                    <div data-datepicker-wrap="">
                                      <input type="text" class="none ready loaded flatpickr-input" data-datepicker="" readonly="readonly">
                                    </div>
                                  </div>
                                </div>
                                <div class="panel-footer">
                                  <div class="panel-footer__inner">
                                    <ul class="panel-action__items">
                                      <li class="panel-action__item panel-action__item--submit">
                                        <button id="checkin_out_close" type="button" class="panel-action__btn panel-action__btn--submit btn btn--submit">
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
                  </div>
                  <div class="srh-param__col srh-param__col--travelers">
                    <label for="srh-param-travelers" class="form-label">部屋数・利用人数</label>
                    <input
                      id="srh-param-travelers"
                      type="text"
                      class="form-control ignore form-input form-input--select"
                      placeholder=""
                      value="1部屋・大人2名"
                      readonly="readonly"
                      data-panel-toggle="travelers"
                    >
                    <div class="panel panel--travelers" data-panel="travelers">
                      <div class="panel-wrap">
                        <div class="panel-dialog">
                          <div class="panel-block">
                            <div class="panel-content srh-param-travelers">
                              <div class="panel-header"></div>
                              <div class="panel-body">
                                <div class="panel-body__inner">
                                  <div class="srh-param-travelers--child">
                                    <label class="form-checkbox">
                                      <input type="checkbox" class="form-checkbox-input" name="room_person[child_exist]" id="child_exist">
                                      <span class="form-checkbox-label">お子様のご利用あり</span>
                                    </label>
                                  </div>
                                  <div class="srh-param-travelers--rooms" data-room-items="">
                                    <dl class="srh-param-travelers-room-head">
                                      <dt class="srh-param-travelers-room-head__label">
                                        <label for="room-num" class="form-label ignore">部屋数</label>
                                      </dt>
                                      <dd class="srh-param-travelers-room-head__select">
                                        <select id="room-num" data-room-num="" name="room_person[room_num_select]">
                                          <option value="1" selected="selected">1</option>
                                          <!-- 検索サイトに合わせてコメントアウト -->
                                          <!-- <option value="2">2</option>
                                          <option value="3">3</option>
                                          <option value="4">4</option>
                                          <option value="5">5</option>
                                          <option value="6">6</option>
                                          <option value="7">7</option> -->
                                        </select>
                                      </dd>
                                    </dl>
                                    <dl class="srh-param-travelers-room-item" data-room-item="">
                                      <dt class="srh-param-travelers-room-item__head">
                                        <span class="srh-param-travelers-room-item__label">
                                          <span data-room-num="">1</span> 部屋目
                                        </span>
                                      </dt>
                                      <dd class="srh-param-travelers-room-item__body">
                                        <dl class="srh-param-travelers-room-item__form">
                                          <dt class="srh-param-travelers-room-item__label">
                                            <label for="room1-person-num" class="form-label ignore">大人人数</label>
                                          </dt>
                                          <dd class="srh-param-travelers-room-item__select">
                                            <select id="room1-person-num" data-room-person-num="" name="room_person[room_person_num_select][]">
                                              <option value="1">1</option>
                                              <option value="2" selected="selected">2</option>
                                              <option value="3">3</option>
                                              <option value="4">4</option>
                                              <option value="5">5</option>
                                              <option value="6">6</option>
                                              <option value="7">7</option>
                                              <option value="8">8</option>
                                            </select>
                                          </dd>
                                        </dl>
                                      </dd>
                                    </dl>
                                  </div>
                                </div>
                              </div>
                              <div class="panel-footer">
                                <div class="panel-footer__inner">
                                  <ul class="panel-action__items">
                                    <li class="panel-action__item panel-action__item--cancel">
                                      <button type="button" class="panel-action__btn panel-action__btn--cancel btn btn--cancel">
                                        リセット
                                      </button>
                                    </li>
                                    <li class="panel-action__item panel-action__item--submit">
                                      <button id="room_num_close" type="button" class="panel-action__btn panel-action__btn--submit btn btn--submit">
                                        決定
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
                  <div class="srh-param__col srh-param__col--undecided">
                    <label class="form-checkbox">
                      <input id="undecided" type="checkbox" class="form-checkbox-input" name="undecided" data-undecided="">
                      <span class="form-checkbox-label">日付・人数を指定しない</span>
                    </label>
                  </div>
                  <div class="srh-param__col select-choice"><p>条件を選択する</p><i class="fa-solid fa-angle-down"></i></div>
                  <div class="srh-param__col select-choice-wrap">
                    <div class="select-choice-container">
                      <div class="srh-param__col srh-param__col--meal">
                        <span class="form-label">食事タイプ</span>
                        <ul class="form-checkbox__items">
                          <li class="form-checkbox__item">
                            <label class="form-checkbox">
                              <input id="meal_1" type="checkbox" class="form-checkbox-input" name="meal[]" value="1">
                              <span class="form-checkbox-label">夕食/朝食付き</span>
                            </label>
                          </li>
                          <li class="form-checkbox__item">
                            <label class="form-checkbox">
                              <input id="meal_2" type="checkbox" class="form-checkbox-input" name="meal[]" value="2">
                              <span class="form-checkbox-label">朝食のみ</span>
                            </label>
                          </li>
                          <li class="form-checkbox__item">
                            <label class="form-checkbox">
                              <input id="meal_3" type="checkbox" class="form-checkbox-input" name="meal[]" value="3">
                              <span class="form-checkbox-label">夕食のみ</span>
                            </label>
                          </li>
                          <li class="form-checkbox__item">
                            <label class="form-checkbox">
                              <input id="meal_4" type="checkbox" class="form-checkbox-input" name="meal[]" value="4">
                              <span class="form-checkbox-label">食事なし</span>
                            </label>
                          </li>
                        </ul>
                      </div>
                      <div class="srh-param__col srh-param__col--tags">
                        <span class="form-label">こだわり条件</span>
                        <div class="srh-param__col--popular">
                          <span class="form-label">人気のこだわり</span>
                          <ul class="form-checkbox__items">
                            <li class="form-checkbox__item">
                              <label class="form-checkbox">
                                <input id="rb8" type="checkbox" class="form-checkbox-input">
                                <span class="form-checkbox-label">禁煙ルーム</span>
                              </label>
                            </li>
                            <li class="form-checkbox__item">
                              <label class="form-checkbox">
                                <input id="TB" type="checkbox" class="form-checkbox-input"> <span class="form-checkbox-label">ツイン</span>
                              </label>
                            </li>
                            <li class="form-checkbox__item">
                              <label class="form-checkbox">
                                <input id="JP" type="checkbox" class="form-checkbox-input"> <span class="form-checkbox-label">和室</span>
                              </label>
                            </li>
                            <li class="form-checkbox__item">
                              <label class="form-checkbox">
                                <input id="JW" type="checkbox" class="form-checkbox-input"> <span class="form-checkbox-label">和洋室</span>
                              </label>
                            </li>
                            <li class="form-checkbox__item">
                              <label class="form-checkbox">
                                <input id="bb1" type="checkbox" class="form-checkbox-input"> <span class="form-checkbox-label">大浴場あり</span>
                              </label>
                            </li>
                            <li class="form-checkbox__item">
                              <label class="form-checkbox">
                                <input id="bb14" type="checkbox" class="form-checkbox-input"> <span class="form-checkbox-label">温泉（鉱泉含む）あり</span>
                              </label>
                            </li>
                            <li class="form-checkbox__item">
                              <label class="form-checkbox">
                                <input id="rb5" type="checkbox" class="form-checkbox-input"> <span class="form-checkbox-label">露天風呂付客室</span>
                              </label>
                            </li>
                          </ul>
                        </div>
                        <div class="form-tags__list">
                          <ul class="form-tags__items">
                            <li class="form-tags__add"><button type="button" class="tag__add-btn" data-panel-toggle="srh-detail">こだわりを追加</button>
                              <div class="panel panel--srh-detail" data-panel="srh-detail">
                                <div class="panel-wrap">
                                  <div class="panel-dialog">
                                    <div class="panel-block">
                                      <div class="panel-ctrl"><button type="button" class="panel-close" data-panel-close="srh-detail">×</button></div>
                                      <div class="panel-content srh-param-detail">
                                        <div class="panel-header"></div>
                                        <div class="panel-body">
                                          <div class="panel-body__inner">
                                            <dl class="srh-param-detail-group"> <dt class="srh-param-detail-group__head form-label">部屋タイプ</dt>
                                              <dd class="srh-param-detail-group__body">
                                                <ul class="srh-param-detail-group__items">
                                                  <li id="SB" class="srh-param-detail-group__item"><label class="form-checkbox"><input type="checkbox" class="form-checkbox-input" name="room[]" value="SB"> <span class="form-checkbox-label">シングル</span></label></li>
                                                  <li id="TB" class="srh-param-detail-group__item"><label class="form-checkbox"><input type="checkbox" class="form-checkbox-input" name="room[]" value="TB"> <span class="form-checkbox-label">ツイン</span></label></li>
                                                  <li id="TR" class="srh-param-detail-group__item"><label class="form-checkbox"><input type="checkbox" class="form-checkbox-input" name="room[]" value="TR"> <span class="form-checkbox-label">トリプル</span></label></li>
                                                  <li id="4B" class="srh-param-detail-group__item"><label class="form-checkbox"><input type="checkbox" class="form-checkbox-input" name="room[]" value="4B"> <span class="form-checkbox-label">4ベッド</span></label></li>
                                                  <li id="DB" class="srh-param-detail-group__item"><label class="form-checkbox"><input type="checkbox" class="form-checkbox-input" name="room[]" value="DB"> <span class="form-checkbox-label">ダブル</span></label></li>
                                                  <li id="SUSW" class="srh-param-detail-group__item"><label class="form-checkbox"><input type="checkbox" class="form-checkbox-input" name="room[]" value="SUSW"> <span class="form-checkbox-label">スイート</span></label></li>
                                                  <li id="JP" class="srh-param-detail-group__item"><label class="form-checkbox"><input type="checkbox" class="form-checkbox-input" name="room[]" value="JP"> <span class="form-checkbox-label">和室</span></label></li>
                                                  <li id="JW" class="srh-param-detail-group__item"><label class="form-checkbox"><input type="checkbox" class="form-checkbox-input" name="room[]" value="JW"> <span class="form-checkbox-label">和洋室</span></label></li>
                                                  <li id="CT" class="srh-param-detail-group__item"><label class="form-checkbox"><input type="checkbox" class="form-checkbox-input" name="room[]" value="CT"> <span class="form-checkbox-label">コテージ</span></label></li>
                                                  <li id="SP" class="srh-param-detail-group__item"><label class="form-checkbox"><input type="checkbox" class="form-checkbox-input" name="room[]" value="SP"> <span class="form-checkbox-label">特別室</span></label></li>
                                                  <li id="RT" class="srh-param-detail-group__item"><label class="form-checkbox"><input type="checkbox" class="form-checkbox-input" name="room[]" value="RT"> <span class="form-checkbox-label">貸別荘</span></label></li>
                                                  <li id="WT" class="srh-param-detail-group__item"><label class="form-checkbox"><input type="checkbox" class="form-checkbox-input" name="room[]" value="WT"> <span class="form-checkbox-label">洋室</span></label></li>
                                                  <li id="MZ" class="srh-param-detail-group__item"><label class="form-checkbox"><input type="checkbox" class="form-checkbox-input" name="room[]" value="MZ"> <span class="form-checkbox-label">メゾネット</span></label></li>
                                                  <li id="SH" class="srh-param-detail-group__item"><label class="form-checkbox"><input type="checkbox" class="form-checkbox-input" name="room[]" value="SH"> <span class="form-checkbox-label">相部屋</span></label></li>
                                                  <li id="OTMT" class="srh-param-detail-group__item"><label class="form-checkbox"><input type="checkbox" class="form-checkbox-input" name="room[]" value="OTMT"> <span class="form-checkbox-label">その他</span></label></li>
                                                </ul>
                                              </dd>
                                            </dl>
                                            <dl class="srh-param-detail-group"> <dt class="srh-param-detail-group__head form-label">施設・設備・サービス</dt>
                                              <dd class="srh-param-detail-group__body">
                                                <ul class="srh-param-detail-group__items">
                                                  <li id="sb8" class="srh-param-detail-group__item"><label class="form-checkbox"><input type="checkbox" class="form-checkbox-input" name="tags[]" value="sb8"> <span class="form-checkbox-label">駅から徒歩5分</span></label></li>
                                                  <li id="sb7" class="srh-param-detail-group__item"><label class="form-checkbox"><input type="checkbox" class="form-checkbox-input" name="tags[]" value="sb7"> <span class="form-checkbox-label">送迎あり</span></label></li>
                                                  <li id="sb11" class="srh-param-detail-group__item"><label class="form-checkbox"><input type="checkbox" class="form-checkbox-input" name="tags[]" value="sb11"> <span class="form-checkbox-label">駐車場あり（無料）</span></label></li>
                                                  <li id="sb10" class="srh-param-detail-group__item"><label class="form-checkbox"><input type="checkbox" class="form-checkbox-input" name="tags[]" value="sb10"> <span class="form-checkbox-label">駐車場あり（有料・無料）</span></label></li>
                                                  <li id="sb26" class="srh-param-detail-group__item"><label class="form-checkbox"><input type="checkbox" class="form-checkbox-input" name="tags[]" value="sb26"> <span class="form-checkbox-label">お部屋からのインターネット接続可能（無線）</span></label></li>
                                                  <li id="sb27" class="srh-param-detail-group__item"><label class="form-checkbox"><input type="checkbox" class="form-checkbox-input" name="tags[]" value="sb27"> <span class="form-checkbox-label">お部屋からのインターネット接続可能（有線）</span></label></li>
                                                  <li id="sb12" class="srh-param-detail-group__item"><label class="form-checkbox"><input type="checkbox" class="form-checkbox-input" name="tags[]" value="sb12"> <span class="form-checkbox-label">バーあり</span></label></li>
                                                  <li id="sb13" class="srh-param-detail-group__item"><label class="form-checkbox"><input type="checkbox" class="form-checkbox-input" name="tags[]" value="sb13"> <span class="form-checkbox-label">ラウンジあり</span></label></li>
                                                  <li id="sb14" class="srh-param-detail-group__item"><label class="form-checkbox"><input type="checkbox" class="form-checkbox-input" name="tags[]" value="sb14"> <span class="form-checkbox-label">コンビニあり</span></label></li>
                                                  <li id="sb15" class="srh-param-detail-group__item"><label class="form-checkbox"><input type="checkbox" class="form-checkbox-input" name="tags[]" value="sb15"> <span class="form-checkbox-label">ジムあり</span></label></li>
                                                  <li id="sb16" class="srh-param-detail-group__item"><label class="form-checkbox"><input type="checkbox" class="form-checkbox-input" name="tags[]" value="sb16"> <span class="form-checkbox-label">コインランドリーあり</span></label></li>
                                                  <li id="sb21" class="srh-param-detail-group__item"><label class="form-checkbox"><input type="checkbox" class="form-checkbox-input" name="tags[]" value="sb21"> <span class="form-checkbox-label">車椅子用エレベーターあり</span></label></li>
                                                  <li id="sb24" class="srh-param-detail-group__item"><label class="form-checkbox"><input type="checkbox" class="form-checkbox-input" name="tags[]" value="sb24"> <span class="form-checkbox-label">車椅子での移動が可能</span></label></li>
                                                  <li id="sb17" class="srh-param-detail-group__item"><label class="form-checkbox"><input type="checkbox" class="form-checkbox-input" name="tags[]" value="sb17"> <span class="form-checkbox-label">プールあり</span></label></li>
                                                  <li id="sb18" class="srh-param-detail-group__item"><label class="form-checkbox"><input type="checkbox" class="form-checkbox-input" name="tags[]" value="sb18"> <span class="form-checkbox-label">ルームサービスあり</span></label></li>
                                                  <li id="sb19" class="srh-param-detail-group__item"><label class="form-checkbox"><input type="checkbox" class="form-checkbox-input" name="tags[]" value="sb19"> <span class="form-checkbox-label">クリーニングサービスあり</span></label></li>
                                                </ul>
                                              </dd>
                                            </dl>
                                            <dl class="srh-param-detail-group"> <dt class="srh-param-detail-group__head form-label">お風呂の特徴</dt>
                                              <dd class="srh-param-detail-group__body">
                                                <ul class="srh-param-detail-group__items">
                                                  <li id="bb14" class="srh-param-detail-group__item"><label class="form-checkbox"><input type="checkbox" class="form-checkbox-input" name="tags[]" value="bb14"> <span class="form-checkbox-label">温泉（鉱泉含む）あり</span></label></li>
                                                  <li id="bb1" class="srh-param-detail-group__item"><label class="form-checkbox"><input type="checkbox" class="form-checkbox-input" name="tags[]" value="bb1"> <span class="form-checkbox-label">大浴場あり</span></label></li>
                                                  <li id="bb2" class="srh-param-detail-group__item"><label class="form-checkbox"><input type="checkbox" class="form-checkbox-input" name="tags[]" value="bb2"> <span class="form-checkbox-label">露天風呂あり</span></label></li>
                                                  <li id="bb12" class="srh-param-detail-group__item"><label class="form-checkbox"><input type="checkbox" class="form-checkbox-input" name="tags[]" value="bb12"> <span class="form-checkbox-label">サウナあり</span></label></li>
                                                  <li id="bb13" class="srh-param-detail-group__item"><label class="form-checkbox"><input type="checkbox" class="form-checkbox-input" name="tags[]" value="bb13"> <span class="form-checkbox-label">家族風呂あり</span></label></li>
                                                  <li id="bb3" class="srh-param-detail-group__item"><label class="form-checkbox"><input type="checkbox" class="form-checkbox-input" name="tags[]" value="bb3"> <span class="form-checkbox-label">混浴露天風呂あり</span></label></li>
                                                  <li id="bb4" class="srh-param-detail-group__item"><label class="form-checkbox"><input type="checkbox" class="form-checkbox-input" name="tags[]" value="bb4"> <span class="form-checkbox-label">展望風呂あり</span></label></li>
                                                </ul>
                                              </dd>
                                            </dl>
                                            <dl class="srh-param-detail-group">
                                              <dt class="srh-param-detail-group__head form-label">お部屋の特徴</dt>
                                              <dd class="srh-param-detail-group__body">
                                                <ul class="srh-param-detail-group__items">
                                                  <li class="srh-param-detail-group__item">
                                                    <label class="form-checkbox">
                                                      <input id="rb8" type="checkbox" class="form-checkbox-input" name="tags[]" value="rb8">
                                                      <span class="form-checkbox-label">禁煙ルーム</span>
                                                    </label>
                                                  </li>
                                                  <li class="srh-param-detail-group__item">
                                                    <label class="form-checkbox">
                                                      <input id="rb5" type="checkbox" class="form-checkbox-input" name="tags[]" value="rb5">
                                                      <span class="form-checkbox-label">露天風呂付客室</span>
                                                    </label>
                                                  </li>
                                                  <li class="srh-param-detail-group__item">
                                                    <label class="form-checkbox">
                                                      <input id="rb3" type="checkbox" class="form-checkbox-input" name="tags[]" value="rb3">
                                                      <span class="form-checkbox-label">風呂付</span>
                                                    </label>
                                                  </li>
                                                  <li class="srh-param-detail-group__item">
                                                    <label class="form-checkbox">
                                                      <input id="rb6" type="checkbox" class="form-checkbox-input" name="tags[]" value="rb6">
                                                      <span class="form-checkbox-label">離れ</span>
                                                    </label>
                                                  </li>
                                                  <li class="srh-param-detail-group__item">
                                                    <label class="form-checkbox">
                                                      <input id="rb7" type="checkbox" class="form-checkbox-input" name="tags[]" value="rb7">
                                                      <span class="form-checkbox-label">レディースルーム</span>
                                                    </label>
                                                  </li>
                                                  <li class="srh-param-detail-group__item">
                                                    <label class="form-checkbox">
                                                      <input id="rb1" type="checkbox" class="form-checkbox-input" name="tags[]" value="rb1">
                                                      <span class="form-checkbox-label">シングル20平米以上、ツイン35平米以上、ダブル25平米以上のお部屋</span>
                                                    </label>
                                                  </li>
                                                  <li class="srh-param-detail-group__item">
                                                    <label class="form-checkbox">
                                                      <input id="rb2" type="checkbox" class="form-checkbox-input" name="tags[]" value="rb2">
                                                      <span class="form-checkbox-label">ベット幅が広い</span>
                                                    </label>
                                                    <span class="form-checkbox-label-question">
                                                      <i class="fa-regular fa-circle-question" style="font-size:16px;"></i>
                                                      <span class="tooltip tooltip-bed">シングル・ツインの場合幅130センチメートル以上、ダブルの場合幅180センチメートル以上</span>
                                                    </span>
                                                  </li>
                                                  <li class="srh-param-detail-group__item">
                                                    <label class="form-checkbox">
                                                      <input id="rb11" type="checkbox" class="form-checkbox-input" name="tags[]" value="rb11">
                                                      <span class="form-checkbox-label">海が見える</span>
                                                    </label>
                                                  </li>
                                                  <li class="srh-param-detail-group__item">
                                                    <label class="form-checkbox">
                                                      <input id="rb17" type="checkbox" class="form-checkbox-input" name="tags[]" value="rb17">
                                                      <span class="form-checkbox-label">夜景が見える</span>
                                                    </label>
                                                  </li>
                                                </ul>
                                              </dd>
                                            </dl>
                                            <dl class="srh-param-detail-group"> <dt class="srh-param-detail-group__head form-label">その他</dt>
                                              <dd class="srh-param-detail-group__body">
                                                <ul class="srh-param-detail-group__items">
                                                  <li class="srh-param-detail-group__item"><label class="form-checkbox"><input type="checkbox" class="form-checkbox-input" name="tags[]" id="pb2" value="pb2"> <span class="form-checkbox-label">14時以前チェックインまたは12時以降チェックアウト</span></label></li>
                                                </ul>
                                              </dd>
                                            </dl>
                                          </div>
                                        </div>
                                        <div class="panel-footer">
                                          <div class="panel-footer__inner">
                                            <ul class="panel-action__items">
                                              <li class="panel-action__item panel-action__item--cancel"> <button type="button" id="reset_btn" class="panel-action__btn panel-action__btn--cancel btn btn--cancel">リセット</button> </li>
                                              <li class="panel-action__item panel-action__item--submit"> <button type="button" id="submit_btn" class="panel-action__btn panel-action__btn--submit btn btn--submit">閉じる</button> </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <input type="hidden" id="tags_text" name="tags_text" value="" data-srh-detail="">
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="srh-param-actions">
                    <ul class="srh-param-actions__items">
                      <li class="srh-param-actions__item"><button id="search_submit" class="btn btn--submit">検索</button></li>
                    </ul>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchModuleConditionArea from '~/components/SearchModuleConditionArea'

function getDate(date) {
  let today = date
  const y = today.getFullYear()
  const m = ('00' + (today.getMonth() + 1)).slice(-2)
  const d = ('00' + (today.getDate())).slice(-2)
  today = y + '/' + m + '/' + d
  return today
}

export default {
  props: ['area'],
  components: {
    SearchModuleConditionArea
  },
  data() {
    return {
      keyword: 'skeyword',
      skeyPlholder: '宿泊施設名を入力',
      pkeyPlholder: 'プラン名を入力',
      baseUrl: process.env.BASE_TVG_URL,
      selectArea: ''
    }
  },
  head: {
    script: [
      {
        src: 'https://kit.fontawesome.com/8e5ae900bb.js',
        defer: true,
        crossorigin: 'anonymous'
      }
    ]
  },
  computed: {
    placeholder () {
      return this.keyword === 'skeyword' ? this.skeyPlholder : this.pkeyPlholder
    },
    today () {
      let today = new Date()
      today = getDate(today)
      return today
    },
    nextday () {
      let tomorrow = new Date()
      tomorrow.setDate(tomorrow.getDate() + 1)
      tomorrow = getDate(tomorrow)
      return tomorrow
    }
  }
}
</script>

<style>
.srh-param-travelers-room-head__select{
  flex: 0 0 auto;
  width: auto;
  pointer-events: none;
  background-color: #f3f3f3;
}
</style>
