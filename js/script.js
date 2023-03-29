$(".saisyo .annai").slick({
  slidesToShow: 3,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true,
  arrows: false,
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
      if (scroll > position - windowHeight + 0) {
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

$(function () {
  $(".themelist li img").hover(
    function () {
      $(this).stop().animate(
        {
          width: "190px",
          height: "190px",
          marginTop: "-22px",
        },
        "fast"
      );
    },
    function () {
      $(this).stop().animate(
        {
          width: "188px",
          height: "188px",
          marginTop: "0px",
        },
        "fast"
      );
    }
  );
});

//logoの表示
$(window).on("load", function () {
  $("#mainlogo").delay(1800).fadeOut("slow"); //ローディング画面を1.5秒（1500ms）待機してからフェードアウト
  $("#main_logo").delay(1400).fadeOut("slow"); //ロゴを1.2秒（1200ms）待機してからフェードアウト
});

var unit = 100,
  canvasList, // キャンバスの配列
  info = {}, // 全キャンバス共通の描画情報
  colorList; // 各キャンバスの色情報

/**
 * Init function.
 *
 * Initialize variables and begin the animation.
 */
function init() {
  info.seconds = 0;
  info.t = 0;
  canvasList = [];
  colorList = [];
  // canvas1個めの色指定
  canvasList.push(document.getElementById("waveCanvas"));
  colorList.push(["#C1D9AD", "#D9D9D9", "#FFF2F2", "#AEB0A0", "#AEB0A0"]); //重ねる波線の色設定

  // 各キャンバスの初期化
  for (var canvasIndex in canvasList) {
    var canvas = canvasList[canvasIndex];
    canvas.width = document.documentElement.clientWidth; //Canvasのwidthをウィンドウの幅に合わせる
    canvas.height = 200; //波の高さ
    canvas.contextCache = canvas.getContext("2d");
  }
  // 共通の更新処理呼び出し
  update();
}

function update() {
  for (var canvasIndex in canvasList) {
    var canvas = canvasList[canvasIndex];
    // 各キャンバスの描画
    draw(canvas, colorList[canvasIndex]);
  }
  // 共通の描画情報の更新
  info.seconds = info.seconds + 0.008;
  info.t = info.seconds * Math.PI;
  // 自身の再起呼び出し
  setTimeout(update, 35);
}

/**
 * Draw animation function.
 *
 * This function draws one frame of the animation, waits 20ms, and then calls
 * itself again.
 */
function draw(canvas, color) {
  // 対象のcanvasのコンテキストを取得
  var context = canvas.contextCache;
  // キャンバスの描画をクリア
  context.clearRect(0, 0, canvas.width, canvas.height);

  //波線を描画 drawWave(canvas, color[数字（波の数を0から数えて指定）], 透過, 波の幅のzoom,波の開始位置の遅れ )
  drawWave(canvas, color[0], 0.8, 3, 0);
  drawWave(canvas, color[1], 0.5, 4, 0);
  drawWave(canvas, color[2], 0.3, 1.6, 0);
  drawWave(canvas, color[3], 0.2, 3, 100);
  drawWave(canvas, color[4], 0.5, 1.6, 250);
}

/**
 * 波を描画
 * drawWave(色, 不透明度, 波の幅のzoom, 波の開始位置の遅れ)
 */
function drawWave(canvas, color, alpha, zoom, delay) {
  var context = canvas.contextCache;
  context.strokeStyle = color; //線の色
  context.lineWidth = 2; //線の幅
  context.globalAlpha = alpha;
  context.beginPath(); //パスの開始
  drawSine(canvas, info.t / 0.5, zoom, delay);
  context.stroke(); //線
}

/**
 * Function to draw sine
 *
 * The sine curve is drawn in 10px segments starting at the origin.
 * drawSine(時間, 波の幅のzoom, 波の開始位置の遅れ)
 */
function drawSine(canvas, t, zoom, delay) {
  var xAxis = Math.floor(canvas.height / 2);
  var yAxis = 0;
  var context = canvas.contextCache;
  // Set the initial x and y, starting at 0,0 and translating to the origin on
  // the canvas.
  var x = t; //時間を横の位置とする
  var y = Math.sin(x) / zoom;
  context.moveTo(yAxis, unit * y + xAxis); //スタート位置にパスを置く

  // Loop to draw segments (横幅の分、波を描画)
  for (i = yAxis; i <= canvas.width + 10; i += 10) {
    x = t + (-yAxis + i) / unit / zoom;
    y = Math.sin(x - delay) / 3;
    context.lineTo(i, unit * y + xAxis);
  }
}

init();
