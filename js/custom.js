$(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    var height = $(window).height()/4;
    $('.d3, .aboutMe').css({
        'opacity': ((height - scrollTop) / height)
    });
});
