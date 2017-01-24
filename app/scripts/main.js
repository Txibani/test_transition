

$(window).scroll(function (e) {
    e.preventDefault();
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    console.log(scroll);
    console.log(windowHeight);
    if (scroll > windowHeight) {
        console.log('ieeeee');
        $('#Layer_13 .st0, #Layer_12 .st0, #Layer_11 .st0').css('stroke-dashoffset', '1000');
    }
});
