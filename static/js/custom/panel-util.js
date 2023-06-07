//==================================================
// 部屋数・利用人数の初期化
//==================================================
window.onload = function(){ 

  $.fn.travelersPanel = function (option) {
    let defaultOption = {
      // 初期選択:部屋数
      initRoom: 1,
      // 初期選択:各部屋利用人数(配列で1部屋目から指定)
      initPersonItems: [2],
      // リセット押下時:部屋数
      resetRoom: 1,
      // リセット押下時:各部屋利用人数(配列で1部屋目から指定)
      resetPersonItems: [2],
      // 表示用テキストボックスセレクタ
      valueSelector: '#srh-param-travelers',
      // 子供ご利用りチェックボックス
      childCheckSelector: '.srh-param-travelers--child input[type=checkbox]',

      // リセットボタン押下後処理
      resetFn: ()=>{},
      // 決定ボタン押下後処理
      submitFn: ()=>{},
    };
    option = {
      ...defaultOption,
      ...option
    };

    const root = this.get(0);
    const valueEl = root.querySelector(option.valueSelector);
    const childCheckEl = root.querySelector(option.childCheckSelector);
    const wrapEl = root.querySelector('[data-room-items]');
    const orignEl = root.querySelector('[data-room-item]');
    let tplEl;
      if(orignEl){
      tplEl = orignEl.cloneNode(true);
      orignEl.parentNode.removeChild(orignEl);
    }
    const roomNumEl = root.querySelector('[data-room-num]');

    const panelEl = root.querySelector('[data-panel="travelers"]');
    const panel = panelEl.panel;

    const setValue = () => {
      const cnt = {
        room: roomNumEl.value,
        person: 0
      }
      const itemEls = Array.prototype.slice.call(root.querySelectorAll('[data-room-item]')); for (let i = 0, l = itemEls.length; i < l; i++) {
        const itemEl = itemEls[i];
        cnt.person += Number(itemEl.querySelector('[data-room-person-num]').value);
      }
      if (childCheckEl && !!childCheckEl.checked) {
        valueEl.classList.add('is-child');
      } else {
        valueEl.classList.remove('is-child');

      }
      valueEl.setAttribute('value', `${cnt.room}部屋・大人${cnt.person}名${childCheckEl && !!childCheckEl.checked ? ' お子様のご利用あり' : ''}`);
    }

    const addItem = (cnt) => {
      if (!/[0-9]+/.test(cnt)) return;
      const itemEls = Array.prototype.slice.call(root.querySelectorAll('[data-room-item]'));
      for (let i = 0, l = itemEls.length; i < l; i++) {
        const itemEl = itemEls[i];
        i >= cnt && itemEl.parentNode.removeChild(itemEl);
      }

      for (let i = 0; i < cnt; i++) {
        if (i >= itemEls.length) {
          const num = i + 1;
          const tplCloneEl = tplEl.cloneNode(true);
          const roomPersonNumIdEl = tplCloneEl.querySelector('[data-room-num]');
          roomPersonNumIdEl.innerHTML = num;
          const roomPersonNumLabelEl = tplCloneEl.querySelector('label');
          roomPersonNumLabelEl.setAttribute('for', `room${num}-person-num`);
          const roomPersonNumSelectEl = tplCloneEl.querySelector('select');
          roomPersonNumSelectEl.setAttribute('id', `room${num}-person-num`);
          wrapEl.insertAdjacentElement('beforeend', tplCloneEl);
        }
      }
    };

    // 各部屋人数設定処理
    const setRoomPersonOptions = (roomCnt, items) => {
      roomNumEl.value = roomCnt;
      for (let i = 0; i < roomCnt; i++) {
        const num = i + 1;
        const roomPersonNumSelectEl = root.querySelector(`#room${num}-person-num`);
        roomPersonNumSelectEl.value = items[i];
      }
    };

    // 部屋数変更時処理
    const norChange = (e) => {
      e.preventDefault();
      const el = e.currentTarget;
      addItem(el.value)
    }

    // リセット処理
    const reset = (e) => {
      e && e.preventDefault();
      const itemEls = Array.prototype.slice.call(root.querySelectorAll('[data-room-item]'));
      for (let i = 0, l = itemEls.length; i < l; i++) {
        const itemEl = itemEls[i];
        itemEl.parentNode.removeChild(itemEl);
      }
      addItem(option.resetRoom);
      if (childCheckEl) {
        childCheckEl.checked = false;
      }
      setRoomPersonOptions(option.resetRoom, option.resetPersonItems);
      setValue();
      panel.hide();
      option.resetFn();
    }

    // 決定処理
    const decision = (e) => {
      e && e.preventDefault();
      setValue();
      panel.hide();
      option.submitFn();
    }

    // 初期化処理
    const init = () => {
      roomNumEl.addEventListener('change', norChange, false);
      addItem(option.initRoom);
      setRoomPersonOptions(option.initRoom, option.initPersonItems);
      setValue();
    }

    // 「リセット」ボタン処理
    const panelBtnResetEl = panelEl.querySelector('.panel-action__btn--cancel');
    panelBtnResetEl.addEventListener('click', reset, false);

    // 「決定」ボタン処理
    const panelBtnSubmitEl = panelEl.querySelector('.panel-action__btn--submit');
    panelBtnSubmitEl.addEventListener('click', decision, false);

    // 初期化
    init();
    return this;
  }
}
//==================================================
