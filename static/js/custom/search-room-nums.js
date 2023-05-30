const travelerBox = document.getElementById('srh-param-travelers');

// ロードイベント
window.onload = function(){ 
    // 初期値の設定が無い場合は実行しない
    if (document.getElementById("room_person_1")) {
        // 部屋数のチェンジイベントを発火
        document.getElementById('room-num').dispatchEvent(new Event('change'));
        let room_num = document.getElementById('room-num').value;
        let person = 0;
        for (let i=1; i<7; i++) {
            if (!document.getElementById("room_person_" + i)) {
                break;
            }
            let room_num = document.getElementById("room_person_" + i).value;
            let idName = 'room' + i + '-person-num';
            person = Number(person) + Number(room_num);
            document.getElementById(idName).options[Number(room_num)-1].selected = true;
            document.getElementById("room_person_" + i).remove();
        }
        let room_child = document.getElementById('child_exist').checked;

        // 部屋・利用人数変更イベント
        toravelersChange(room_num, person, room_child);
    }
    
    const traveler = document.querySelector(`[data-panel=travelers]`);
    const panelEl = document.querySelectorAll('[data-panel]');
    panelEl.forEach(rel => {
        rel.addEventListener('prepaneltoggle', (e) => {
            if(traveler.classList.contains('is-open')) {
                e.preventDefault();
            }
        });
    });

    document.addEventListener('clickouter', (e) => {
        if(traveler.classList.contains('is-open')) {
            e.preventDefault();
        }
    });
}

// 履歴などから部屋数・人数を変更時、表示を変更する
function toravelersChange(room, person, child) {
    travelerBox.setAttribute('value', `${room}部屋・大人${person}名${child ? ' お子様のご利用あり' : ''}`);
    if (child) {
        travelerBox.classList.add('is-child');
        travelerBox.closest('.srh-param__col').classList.add('is-child');
    } else {
        travelerBox.classList.remove('is-child');
        travelerBox.closest('.srh-param__col').classList.remove('is-child');
    }
}

