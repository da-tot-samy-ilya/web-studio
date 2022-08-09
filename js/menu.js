$(document).ready(function() {
    $('.menu-miny').click(function() {
        if ($('.nav__item-wrap').hasClass('toggle-show')) {
            $('.nav__item-wrap').addClass('toggle-hide');
            $('.nav__item-wrap').removeClass('toggle-show');
            $('.nav').animate({height: "450px"}, 200);
            $('.nav__item-wrap').animate({height: "300px"}, 200);
            $('.nav__item').css('display', 'block');
            $('.nav__item-8').css('display', 'none');
        }
        else {
            $('.nav__item-wrap').addClass('toggle-show');
            $('.nav__item-wrap').removeClass('toggle-hide');
            $('.nav__item-wrap').animate({height: "0px"}, 200);
            $('.nav').animate({height: "150px"}, 200);
            $('.nav__item').css('display', 'none');
        }
    });
    if ( $(window).width()  > 600 ) {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 120) {
                $('body').css('marginTop', '130px');
                $('.nav__logo-wrap').css('display', 'none');
                $('.nav').css('position', 'fixed');
                $('.nav__item').css('marginTop', '10px');
                $('.nav').css('z-index', '999');
                $('.nav').css('top', '-50px');
                $('.nav').css('height', '50px');
                $('.nav').animate({top: '0px'},300);
                $('.nav__item-wrap').css('margin-top', '10px');
                $('.likes').css('top', '70px');
                $('.likes').css('position', 'fixed');
            }
        });
        $(window).scroll(function() {
            if ($(this).scrollTop() <= 120) {
                $('body').css('marginTop', '0px');
                $('.nav').css('position', 'static');
                $('.nav').css('height', '120px');
                $('.nav').css('top', '0px');
                $('.nav__logo-wrap').css('display', 'flex');
                $('.nav__item').css('marginTop', '0px');
                $('.nav__item-wrap').css('margin-top', '0px');
                $('.likes').css('top', '150px');
                $('.likes').css('position', 'absolute');
            }
        });
    }
});