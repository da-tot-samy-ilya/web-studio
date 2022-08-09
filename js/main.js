$(document).ready(function() {

    //Head image
    order = 2
    function slide() {
        if (order == 1) {
            $('.main-head__image-4').animate({opacity:'0'}, 1000);
            $('.main-head__image-4').css('display','none');
        }
        $('.main-head__image-' + String(order)).css('display','block');
        $('.main-head__image-' + String(order)).animate({opacity:'1'}, 1000);
        
        $('.main-head__image-' + String(order-1)).animate({opacity:'0'}, 1000);
        $('.main-head__image-' + String(order-1)).css('display','none');
        order+=1
        if (order == 5) {
            order = 1
            
        }
    }
    setInterval(slide, 4000);

    var slideNow_number = 1
    if ($(window).width() < 500) {
        $('.portfolio__items-wrap__big').find('.portfolio__item-top').css('width', String($(window).width()));
        $('.portfolio__items-wrap__big').find('.portfolio__item-butttom').css('width', String($(window).width()));
        $('.portfolio__items-wrap__big').find('.portfolio__item-top').css('height', String($(window).width()));
        $('.portfolio__items-wrap__big').find('.portfolio__item-butttom').css('height', String($(window).width()));
    }
    // Slider We do
    $('.weDo__next').click(function() {
        var left = $('.weDo__option-5').offset().left;
        if ( left + 400 >= $(window).width() ) {
            if (left + 30 >= $(window).width()) {
                $('.weDo__option').animate({left: '-=430px'},200);
            }
            else {
                $('.weDo__option-5').animate({right: '30px'},200);
                $('.weDo__option-5').css('left', 'auto'); 

                $('.weDo__option-4').animate({right: '460px'},200);
                $('.weDo__option-4').css('left', 'auto');

                $('.weDo__option-3').animate({right: '890px'},200);
                $('.weDo__option-3').css('left', 'auto');

                $('.weDo__option-2').animate({right: '1320px'},200);
                $('.weDo__option-2').css('left', 'auto');

                $('.weDo__option-1').animate({right: '1750px'},200);
                $('.weDo__option-1').css('left', 'auto');
            }
        }
    });
    $('.weDo__back').click(function() {
        if ( $('.weDo__option-1').offset().left < 10 ) {
            if ($('.weDo__option-1').offset().left + 430 > 10) {
                $('.weDo__option-1').animate({left: '30px'},200);
                $('.weDo__option-1').css('right', 'auto');

                $('.weDo__option-2').animate({left: '460px'},200);
                $('.weDo__option-2').css('right', 'auto');

                $('.weDo__option-3').animate({left: '890px'},200);
                $('.weDo__option-3').css('right', 'auto');

                $('.weDo__option-4').animate({left: '1320px'},200);
                $('.weDo__option-4').css('right', 'auto');

                $('.weDo__option-5').animate({left: '1750px'},200);
                $('.weDo__option-5').css('right', 'auto');
            }
            else {
                $('.weDo__option').animate({left: '+=430px'},200);
            }
        }
    });
    //Scroll up
    $('.top-scroll').click(function(e){
        $('html,body').stop().animate({ scrollTop: 0}, 500);
        e.preventDefault();
    });
    $(window).scroll(function() {
        if ($(this).scrollTop() > 500) {
            $('.top-scroll').css('display', 'block');
            if ($(window).width() < 500) {
                $('.top-scroll').css('bottom', '30px');
            }
        }
        if ($(this).scrollTop() < 500) {
            $('.top-scroll').css('display', 'none');
        }
    });
    $('.portfolio__item-info__like-top').click(function() {
        var id = $(this).attr('id');
        if ($(this).hasClass('portfolio__item-info__like-top__hide')) {
            $(this).animate({opacity: '1'}, 100);
            $('.portfolio__item-info__like_number-' + id).text( Number($('.portfolio__item-info__like_number-' + id).text())+1);
            $(this).removeClass('portfolio__item-info__like-top__hide');
        }
        else {
            $(this).addClass('portfolio__item-info__like-top__hide');
            $(this).animate({opacity: '0'}, 100);
            $('.portfolio__item-info__like_number-' + id).text( Number($('.portfolio__item-info__like_number-' + id).text())-1);
        }
    });
    $('.likes__top').click(function() {
        if ( $(this).hasClass('likes__top-show') ) {
            $(this).animate({opacity: '0'},100);
            $(this).removeClass('likes__top-show');
        }
        else {
            $(this).animate({opacity: '1'},100);
            $(this).addClass('likes__top-show');
        }
    });
    
    
    $('.slideRight').click(function() {
        var marginLeft = $('.describtion__image-slider').children().last().offset().left;
        var sliderImage_width = $('.describtion__image-1').width();
        if (marginLeft - sliderImage_width > 0) {
            $('.describtion__image-1').animate({marginLeft: '-=' + sliderImage_width},300);
        }
    });
    $('.slideLeft').click(function() {
        var marginLeft = document.getElementById("slide-1").offsetLeft;
        var sliderImage_width = $('.describtion__image-1').width();
        if (marginLeft + sliderImage_width <= 0) {
            $('.describtion__image-1').animate({marginLeft: '+=' + sliderImage_width},300);
        }
    });


    //Order design
    $('.order-design__info-option-1').click(function () {

        $('.order-design__info-text-2').animate({opacity: '0'},200);
        $(this).css('text-decoration', 'none');
        $(this).css('cursor', 'default');
        $('.order-design__info-option-2').css('text-decoration', 'underline');
        $('.order-design__info-option-2').css('cursor', 'pointer');
    });
    $('.order-design__info-option-2').click(function () {

        $('.order-design__info-text-2').animate({opacity: '1'},200);
        $(this).css('text-decoration', 'none');
        $(this).css('cursor', 'default');
        $('.order-design__info-option-1').css('text-decoration', 'underline');
        $('.order-design__info-option-1').css('cursor', 'pointer');
    });
    //Change color order design
    let changeColor = 0;
    let colors = ["#B902A7", "#68E030", "#C20524", "#035EC7", "#E7A20C"];
    $('.order-design__info-option').click(function () {
        $('.comment__img-4').css('display', 'none');
        if ( $(this).hasClass("order-design__info-option-show") ) {
            
        }
        else {
            $('.comment__img-'+String(changeColor)).css('display', 'block');
            $('.comment__img-'+String(changeColor-1)).css('display', 'none');

            $('.comment').find('p').css('color', colors[changeColor]);

            $('.order-design__info-text').find('.comment').css('border-color', colors[changeColor]);

            $('.order-border').css('background-color', colors[changeColor]);
            $('.paragraph').css('color', colors[changeColor]);
            $('.order-design__form-button').css('background-color', colors[changeColor]);
            changeColor+=1;
            if (changeColor == 5) {
                changeColor = 0;
                
            }
        }
        $(this).addClass("order-design__info-option-show");
        if ( $(this).hasClass('order-design__info-option-1') ) {
            $('.order-design__info-option-2').removeClass("order-design__info-option-show");
        }
        else {
            $('.order-design__info-option-1').removeClass("order-design__info-option-show");
        }

    });
});
