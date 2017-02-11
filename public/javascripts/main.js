$(function() {
    // Default
    jQuery.scrollSpeed(50, 2000);
});

$(window).scroll(function() {

    // capture scrolltop
    var wScroll = $(this).scrollTop();

    //heading
    $('.heading-box').css({
        'transform': 'translate(0, -' + wScroll/8 + '%)'
    });

    $('.heading-box .welcome').css({
        'transform': 'translate(0, -' + wScroll/16 + '%)'
    });
});
