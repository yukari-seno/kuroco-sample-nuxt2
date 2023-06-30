// チェックイン日
let checkIn = document.getElementById('srh-param-checkin');
// チェックアウト日
let checkOut = document.getElementById('srh-param-checkout');

// 日付整形
function getDate(date) {
    let today = date;
    let y = today.getFullYear();
    let m = ("00" + (today.getMonth()+1)).slice(-2);
    let d = ("00" + (today.getDate())).slice(-2);
    return today = y + '/' + m + '/' + d;
}

// 初期値設定
function setCheckin_Out_Date() {
    // チェックイン・チェックアウト日の初期値に本日、本日+1日を設定
    let today = new Date();
    today = getDate(today);
    let tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow = getDate(tomorrow);
    checkIn.setAttribute("value", today);
    checkOut.setAttribute("value", tomorrow);
}

// カレンダーチェックイン日反映
checkIn.addEventListener("change", (function(e) {
    let checkInValue;
    checkInValue = checkIn.getAttribute("value");
    checkInValue = checkInValue.replaceAll("/", "-");
    const child = document.querySelectorAll('[aria-label="' + checkInValue + '"]');
    child[0].classList.add("selected", "startRange");
}));

// カレンダーチェックアウト日反映
checkOut.addEventListener("change", (function(e) {
    let checkOutValue;
    checkOutValue = checkOut.getAttribute("value");
    checkOutValue = checkOutValue.replaceAll("/", "-");
    const child = document.querySelectorAll('[aria-label="' + checkOutValue + '"]');
    child[0].classList.add("selected", "endRange");
}));

