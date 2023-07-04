// チェックイン日
let checkIn = document.getElementById('srh-param-checkin');
// チェックアウト日
let checkOut = document.getElementById('srh-param-checkout');

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

