// ロードイベント
window.onload = function(){ 
    tagsChange();
}

function tagsChange() {
    let tags = document.getElementsByClassName('srh-param-detail-group__items');
    let tagsAry = Array.from(tags);
    tagsAry.forEach(element => {
        let items = document.getElementsByClassName('srh-param-detail-group__item');
        let itemsAry = Array.from(items);
        itemsAry.forEach(element => {
            if (element.children[0].children[0].checked) {
                let tag = element.children[0].children[0].id;
                document.getElementById(tag).dispatchEvent(new Event('change'));
            }
        });
    });
}

// リセットイベント
let reset = document.getElementById('reset_btn');
reset.addEventListener('click', function() {
    document.getElementById('tags_text').value = "";
    
    let tag = document.querySelector('.form-tags__item');
    while (tag) {
        tag.firstChild.lastChild.dispatchEvent(new Event('click'));
        tag = document.querySelector('.form-tags__item');
    }
}, false);

// 閉じるボタン
let submit = document.getElementById('submit_btn');
submit.addEventListener('click', function() {
    // パネルを閉じる
    document.querySelector('[data-panel="srh-detail"]').panel.hide();
}, false);