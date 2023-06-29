// hamburger
$(".drawer-btn").click(function () {
  $(this).toggleClass('active');
});
window.onload = function () {
  var nav = document.getElementById('nav-wrapper');
  var hamburger = document.getElementById('js-hamburger');
  var blackBg = document.getElementById('js-black-bg');
  hamburger.addEventListener('click', function () {
      nav.classList.toggle('open');
  });
  blackBg.addEventListener('click', function () {
      nav.classList.remove('open');
  });
};
// スクロールをしないように固定
$(function () {
  var state = false;
  var pos;
  $('.hamburger').click(function () {
      if (state == false) {
          pos = $(window).scrollTop();
          $('body').addClass('fixed').css({ 'top': - pos });
          state = true;
      } else {
          $('body').removeClass('fixed').css({ 'top': 0 });
          window.scrollTo(0, pos);
          state = false;
      }
  });
});
// アコーディオンメニュー
$(function(){
  $('.header-menu__alist ul').hide()
  $('.header-menu__lists-btn').on('click', function() {
      var menuList = $(this).next(".header-menu__alist ul");
      $(menuList).slideToggle();
      if($(this).hasClass('open')){
          $(this).removeClass('open');
      }else{
          $(this).addClass('open');
      }
  });
});