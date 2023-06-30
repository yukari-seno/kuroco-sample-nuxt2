const travelerBox = document.getElementById('srh-param-travelers');

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

