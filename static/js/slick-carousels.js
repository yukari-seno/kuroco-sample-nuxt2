// $(function () {
//     if (window.matchMedia('(min-width: 1025px)').matches) {
//         $('.slick').slick({
//             infinite: false,
//             autoplaySpeed: 2000,        //自動再生のスピード
//             speed: 800,	                //スライドするスピード
//             arrows: true,               //左右の矢印
//             slidesToShow: 3,            //何件表示するか
//             slidesToScroll: 3           //何件ずつ移動するか
//         });
//     } else {
//         $('.slick').slick({
//             infinite: false,
//             autoplaySpeed: 2000,        //自動再生のスピード
//             speed: 800,	                //スライドするスピード
//             arrows: true,               //左右の矢印
//             slidesToShow: 1,            //何件表示するか
//             slidesToScroll: 1,          //何件ずつ移動するか
//             adaptiveHeigth: false,
//             swipe: true
//         });
//     }
// });

$(function () {
    $('.hotel-sec-slider__items').slick({
        infinite: false,
        centerMode: false,
        prevArrow: '<div class="slick-prev"><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAyNCAyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMC41IiB5PSIxLjI1IiB3aWR0aD0iMjMiIGhlaWdodD0iMjMiIHJ4PSIxMS41IiBmaWxsPSIjMzMzMzMzIiBzdHJva2U9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xMC43NSA4LjI1TDE1LjI1IDEyLjc1TDEwLjc1IDE3LjI1IiBzdHJva2U9IndoaXRlIi8+Cjwvc3ZnPgo="></div>',
        nextArrow: '<div class="slick-next"><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAyNCAyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMC41IiB5PSIxLjI1IiB3aWR0aD0iMjMiIGhlaWdodD0iMjMiIHJ4PSIxMS41IiBmaWxsPSIjMzMzMzMzIiBzdHJva2U9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xMC43NSA4LjI1TDE1LjI1IDEyLjc1TDEwLjc1IDE3LjI1IiBzdHJva2U9IndoaXRlIi8+Cjwvc3ZnPgo="></div>',
        dots: false,
        slidesToShow: 3.5,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2.5,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 428,
                settings: {
                    slidesToShow: 1.2,
                    slidesToScroll: 1,
                }
            }
        ]
    });
});