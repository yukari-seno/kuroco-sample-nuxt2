// ロードイベント
window.onload = function(){ 
    if (document.getElementById('srh-param-area').value == "") {
        // エリアに東京都を初期値として設定
        let defaultAreaCode = document.getElementById('area_13');
        defaultAreaCode.checked = true;
        document.querySelector('[data-panel-toggle="srh-area"]').setAttribute("value", "東京都")
    }
}

// 人気の観光地のチェックボックス制御
let popular_area = document.querySelectorAll('.area-select-popular__btn');
popular_area.forEach(function(popular) {
    popular.addEventListener('click', function() {
        document.getElementById(popular.value).checked = true;
    }, false)
});

// エリアのバリデーションチェック
document.getElementById('search_submit').addEventListener('click', function(e){
    let judge = new Boolean(true);
    if (!document.forms[0]['area_select'].value) {
        judge = false;
    }
    if (!document.querySelector('[data-panel-toggle="srh-area"]').value) {
        judge = false;
    }

    if (!judge) {
        document.getElementById('area_error').classList.remove('none');
        e.preventDefault();
    }
});