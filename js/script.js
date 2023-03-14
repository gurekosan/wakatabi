$(".saisyo .annai").slick({
  slidesToShow: 3,
  autoplay: true,
  autoplaySpeed: 3000,
  dots: true,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 2,
        // slidesToScroll: 1
      },
    },
    {
      breakpoint: 575,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1,
        // slidesToScroll: 1
      },
    },
  ],
});

// ページトップ
$(window).scroll(function () {
  var sc = $(window).scrollTop();
  if (sc > 400) {
    $("footer p.top").fadeIn(500);
  } else {
    $("footer p.top").fadeOut(500);
  }
});

// モバイルメニュー
$(".hmenu").click(function () {
  $(this).toggleClass("close");
  $("nav").toggleClass("close");
});

$(".container").click(function () {
  $(".hmenu").removeClass("close");
  $("nav").removeClass("close");
});

// スクロール フェードイン
$(function () {
  $(window).scroll(function () {
    $(".annai").each(function () {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight + 200) {
        $(this).addClass("active");
      }
    });
  });
});

$(function () {
  $(window).scroll(function () {
    $(".oshirseuchigawa").each(function () {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight + 200) {
        $(this).addClass("active");
      }
    });
  });
});

$(function () {
  $(window).scroll(function () {
    $(".pickup li").each(function () {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight + 200) {
        $(this).addClass("active");
      }
    });
  });
});

$(function () {
  $(window).scroll(function () {
    $(".themelist li").each(function () {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight + 200) {
        $(this).addClass("active");
      }
    });
  });
});

$(function () {
  $(window).scroll(function () {
    $(".matome").each(function () {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight + 200) {
        $(this).addClass("active");
      }
    });
  });
});
