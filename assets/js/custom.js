// navbar-scroll start
$(document).ready(function () {
  $(window).on("scroll", function () {
    var scroll = $(this).scrollTop();
    if (scroll > 100) {
      $(".navbar").addClass("navbar_bg");
    } else {
      $(".navbar").removeClass("navbar_bg");
    }

    if (scroll > 500) {
      $(".back_to_top").show(1000);
    } else {
      $(".back_to_top").hide(1000);
    }
  });
  $(".back_to_top").on("click", function () {
    $("html, body").animate({ scrollTop: 0 });
  });
});
// navbar-scroll end

// type start
var typed = new Typed(".hero_head", {
  strings: ["Creative Designer", " Inspire your inspiration"],
  typeSpeed: 80,
  loop: true,
});
// type end

// wow start
new WOW().init();
// wow end
