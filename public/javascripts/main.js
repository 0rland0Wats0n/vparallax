$(window).scroll(function() {

    // capture scrolltop
    var wScroll = $(this).scrollTop();
    var wHeight = $(this).height();

    //heading
    $('.heading-box').css({
        'transform': 'translate(0, -' + wScroll/8 + '%)'
    });

    $('.heading-box .welcome').css({
        'transform': 'translate(0, -' + wScroll/16 + '%)'
    });

    if(wScroll > 50 && !$('.js-fade-when-top').hasClass('fade-out')) {
        //hide scroll instruction
        $('.js-fade-when-top').addClass('fade-out');
    }

    if(wScroll - $('.header-bottom-instructions').offset().top >= 0) {
        if(!$('.header-bottom-instructions').hasClass('stick-to-top')) {
            $('.header-bottom-instructions').toggleClass('stick-to-top');
        }
    }

    if(wScroll <= wHeight - 250) {
        //hide scroll instruction
        $('.js-fade-when-top').removeClass('fade-out');
        $('.header-bottom-instructions').removeClass('stick-to-top');
    }

    // sections
    // $('.author-quote').each(function() {
    //
    //     if(wScroll > $(this).offset().top - $(window).height()) {
    //         $(this).css({
    //             'transform': 'translate(0, ' + wScroll/24 + '%)'
    //         });
    //     }
    // });
});
