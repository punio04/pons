// ------------------
// 読み込んだらページを表示
// ------------------
window.addEventListener("DOMContentLoaded", function () {
  var body = document.querySelector("body");
  body.classList.add("load");
});

// ------------------
// 画面の高さ取得
// ------------------

//デバイスの画面の高さ（1vh）を算出する関数
function setHeight() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}
//アクセス時に関数を実行
setHeight();
//画面回転（リサイズ時）に関数を実行する
window.addEventListener("resize", setHeight);

// ------------------
// SP：メニュー周り
// ------------------

// クリックでボタンの付け外し
var body = document.querySelector("#body");
var btn = document.querySelector(".btn-menu");
var area = document.querySelector(".block-nav");

btn.addEventListener("click", function () {
  area.classList.toggle("open");
  btn.classList.toggle("open");
});

// ------------------
// 動画
// ------------------

// 動画のモーダル表示
$(function () {
  $(".js-modal-button").modalVideo({
    channel: "youtube",
  });
});

// ------------------
// スムーススクロール
// ------------------

$(function () {
  // 別ページの場合は以下
  var urlHash = location.hash;
  if (urlHash) {
    $("body,html").stop().scrollTop(0);
    setTimeout(function () {
      // ヘッダー固定の場合はヘッダーの高さを数値で入れる、固定でない場合は0
      var headerHight = 0;
      var target = $(urlHash);
      var position = target.offset().top - headerHight;
      $("body,html").stop().animate({ scrollTop: position }, 400);
    }, 100);
  }
});
