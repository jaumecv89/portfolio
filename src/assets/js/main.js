$(function() {
    var btn = $('.nav-btn');
    var navigation = $('nav');
    var responsiveMenu = $('.responsive-menu');
    var navLinks = $('.nav-links');

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
});