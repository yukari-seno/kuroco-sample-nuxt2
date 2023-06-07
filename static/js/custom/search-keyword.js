// ロードイベント

window.onload = function(){ 
    if (document.getElementById('srh-param-keyword').value != "") {
        document.getElementById('srh-param-keyword').textContent = document.getElementById('srh-param-keyword').value
    }
    
    $('.shisetsu-radio-input').on('click', function () {
        $("#srh-param-keyword").attr('placeholder', '宿泊施設名を入力');
    });

    $('.plan-radio-input').on('click', function () {
        $("#srh-param-keyword").attr('placeholder', 'プラン名を入力');
    });
}
