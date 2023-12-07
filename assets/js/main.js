$(function () {
    "use strict"
    $(window).on('load', function (event) {
        $('.preloader').delay(500).fadeOut(500);
    });
    $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 20) {
            $(".navbar-area").removeClass("sticky");
        } else {
            $(".navbar-area").addClass("sticky")
        }
    });

    $(document).ready(function () {
        $('.venobox').venobox();
    });

    new WOW().init();

    var slider = tns({
        container: '.testimonial-active',
        items: 1,
        slideBy: 'page',
        autoplay: false,
        mouseDrag: true,
        nav: false,
        controlsText: ['<i class="fas fa-angle-left prev"></i>', '<i class="fas fa-angle-right next"></i>'],
    });

    $.scrollIt();
});

document.addEventListener("DOMContentLoaded", function () {

    const navLinks = document.querySelectorAll('.navbar-nav a');
    navLinks.forEach(link => {
      link.addEventListener('click', function () {
        navLinks.forEach(link => link.classList.remove('active'));
  
        this.classList.add('active');
        var navbarToggler = document.querySelector('.navbar-toggler');
        if (navbarToggler) {
          navbarToggler.click();
        }
      });
    });
  });
