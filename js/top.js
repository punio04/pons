// ------------------
// KVアニメーション
// ------------------

window.addEventListener("DOMContentLoaded", function () {
  var animeX = 0;
  var animeY = 0;
  if (window.matchMedia("(max-width: 767px)").matches) {
    //スマホ処理
    animeX = -550;
    animeY = -400;
  } else if (window.matchMedia("(min-width:768px)").matches) {
    //PC処理
    animeX = -1400;
    animeY = -1000;
  }
  gsap.set(".bg-circle", { opacity: 0 });
  gsap
    .timeline({
      scrollTrigger: {
        trigger: "#main-visual",
        start: "bottom 80%",
        // markers: true,
        toggleActions: "play none none reverse",
      },
    })
    .to(".img-symbol", {
      opacity: 0,
      scale: 10,
      x: animeX,
      y: animeY,
      duration: 1.2,
      ease: "power4.in",
    })
    .to(
      ".bg-circle",
      {
        opacity: 1,
        duration: 1,
        ease: "power4.out",
      },
      "+=0.5"
    );
});
