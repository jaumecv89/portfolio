$(function() {
    var btn = $('.nav-btn');
    var responsiveMenu = $('.responsive-menu');
    var navLinks = $('.nav-links');
    var navLinksA = $('.nav-links a');
    var navLinksButton = $('.nav-links a');

    function setActive(i) {
        navLinksA.each(function () {
            if($(this).attr('href') == '#' + i) {
                $(this).addClass("active");
            } else {
                $(this).removeClass("active");
            }
        });
    }

    $('a[href*=\\#]').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    });

    btn.on('click', function() {
        $(this).toggleClass('active');
        $(this).toggleClass('not-active');
        $(responsiveMenu).toggleClass('show');
        $(navLinks).toggleClass('show');
    });

    navLinksButton.on('click', function() {
        $(btn).toggleClass('active');
        $(btn).toggleClass('not-active');
        $(responsiveMenu).toggleClass('show');
        $(navLinks).toggleClass('show');
    });

    $(document).scroll(function () {
        $('section').each(function () {
            if($(this).position().top <= $(document).scrollTop() && ($(this).position().top + $(this).outerHeight()) > $(document).scrollTop()) {
                setActive($(this).attr('id'));
            }
        });
    });
});