$(function() {
    var btn = $('.nav-btn');
    var responsiveMenu = $('.responsive-menu');
    var navLinks = $('.nav-links');
    var navLinksA = $('.nav-links a');
    var navLinksButton = $('.nav-links a');
    var backToTopButton = document.querySelector("#back-to-top-btn");
    var testimonialBtn1 = $('#testimonial-btn-1');
    var testimonialBtn2 = $('#testimonial-btn-2');
    var navBar = document.getElementById("menu");
    var body = document.querySelector("body");
    var testimonial1 = document.querySelector(".first");
    var testimonial2 = document.querySelector(".second");
    var testimonialIcon1 = document.getElementById("testimonial-icon1");
    var testimonialIcon2 = document.getElementById("testimonial-icon2");

    window.addEventListener("scroll", scrollFunction);

    // Function to set the active menu
    function setActive(i) {
        navLinksA.each(function () {
            if($(this).attr('href') == '#' + i) {
                $(this).addClass("active");
            } else {
                $(this).removeClass("active");
            }
        });
    }

    // Function to activate or deactivate scrolling
    function noScroll() {
        if (body.classList.contains("no-scroll")) {
            body.classList.remove('no-scroll');
        }
        else {
            body.classList.add('no-scroll');
        }
    }

    // On scroll function
    function scrollFunction() {

        // Active section function
        $('section').each(function () {
            if($(this).position().top <= $(document).scrollTop() && ($(this).position().top + $(this).outerHeight()) > $(document).scrollTop()) {
                setActive($(this).attr('id'));
            }
        });

        // Back to top scroll function
        if (window.pageYOffset > window.innerHeight) {
            if (!backToTopButton.classList.contains("btnEntrance")) {
                backToTopButton.classList.remove("btnExit");
                backToTopButton.classList.add("btnEntrance");
                backToTopButton.style.display = "block";
            }
        }
        else {
            if (backToTopButton.classList.contains("btnEntrance")) {
                backToTopButton.classList.remove("btnEntrance");
                backToTopButton.classList.add("btnExit");
                setTimeout(function() {
                    backToTopButton.style.display = "none";
                }, 250);
            }
        }

        // Sticky menu function
        if (window.pageYOffset > window.innerHeight * 0.50) {
            if (!navBar.classList.contains("navEntrance")) {
                navBar.classList.add("sticky");
                navBar.classList.remove("navExit");
                navBar.classList.add("navEntrance");
            } 
        } 
        else {
            if (navBar.classList.contains("navEntrance")) {
                navBar.classList.remove("navEntrance");
                navBar.classList.add("navExit");
                setTimeout(function() {
                    navBar.classList.remove("navExit");
                    navBar.classList.remove("sticky");
                }, 250);
            }
        }
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
        noScroll();
    });

    navLinksButton.on('click', function() {
        $(btn).toggleClass('active');
        $(btn).toggleClass('not-active');
        $(responsiveMenu).toggleClass('show');
        $(navLinks).toggleClass('show');
        if (body.classList.contains("no-scroll")) {
            body.classList.remove('no-scroll');
        }
    });

    // First button to show the first testimonial and hide the rest
    testimonialBtn1.on('click', function() {

        // Animations
        testimonial1.classList.remove("animation-exit-left");
        testimonial1.classList.add("animation-entrance-left");
        testimonial2.classList.remove("animation-entrance-right");
        testimonial2.classList.add("animation-exit-right");

        if (!testimonialIcon1.classList.contains("fas")) {
            displayTestimonials();
        }
        
        // Active icons logic
        testimonialIcon1.classList.remove("far");
        testimonialIcon1.classList.add("fas");
        testimonialIcon2.classList.remove("fas");
        testimonialIcon2.classList.add("far");
    });

    // Second button to show the second testimonial and hide the rest
    testimonialBtn2.on('click', function() {

        // Animations
        testimonial1.classList.remove("animation-entrance-left");
        testimonial1.classList.add("animation-exit-left");
        testimonial2.classList.remove("animation-exit-right");
        testimonial2.classList.add("animation-entrance-right");

        if (!testimonialIcon2.classList.contains("fas")) {
            displayTestimonials();
        }

        // Active icons logic
        testimonialIcon1.classList.remove("fas");
        testimonialIcon1.classList.add("far");
        testimonialIcon2.classList.remove("far");
        testimonialIcon2.classList.add("fas");
    });

    // Hide or show testimonials with a delay
    function displayTestimonials() {
        setTimeout(function() {
            testimonial1.classList.toggle("testimonial-hide");
            testimonial2.classList.toggle("testimonial-hide"); 
        }, 350);
    }
});