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