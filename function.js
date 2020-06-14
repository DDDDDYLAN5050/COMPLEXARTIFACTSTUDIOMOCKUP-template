console.clear();

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
gsap.defaults({
  ease: "none"
});

gsap.set(".planet", {
  xPercent: -50,
  yPercent: -50
})


var action = gsap.timeline({
    defaults: {
      duration: 1
    },
    scrollTrigger: {
      trigger: "#trigger",
      scrub: 10,
      start: "-50% center",
      end: "bottom bottom"
    }
  })
  .to(".planet", {
    duration: 0.3,
    autoAlpha: 1
  }, 0)
  .to(".bg-image-2", {
    duration: 0.8,
    autoAlpha: 1
  }, 0)


  .to("#planet-metallum", {
    motionPath: {
      path: "#path-metallum",
      align: "#path-metallum",
      alignOrigin: [0.5, 0.5]
    }
  }, 0)
  .to("#planet-circuit", {
    motionPath: {
      path: "#path-circuit",
      align: "#path-circuit",
      alignOrigin: [0.5, 0.5]
    }
  }, 0)
  .to("#planet-woodlands", {
    motionPath: {
      path: "#path-woodlands",
      align: "#path-woodlands",
      alignOrigin: [0.5, 0.5]
    }
  }, 0)
  .to("#planet-gate", {
    motionPath: {
      path: "#path-gate",
      align: "#path-gate",
      alignOrigin: [0.5, 0.5]
    }
  }, 0)
  .to("#planet-uprise", {
    motionPath: {
      path: "#path-uprise",
      align: "#path-uprise",
      alignOrigin: [0.5, 0.5]
    }
  }, 0)
  .to("#planet-furnace", {
    motionPath: {
      path: "#path-furnace",
      align: "#path-furnace",
      alignOrigin: [0.5, 0.5]
    }
  }, 0);


jQuery('.scrollTo').click(function (e) {
  var jump = $(this).attr('href');
  var new_position = $(jump).offset();
  $('html, body').stop().animate({
    scrollTop: new_position.top
  }, 5000);
  e.preventDefault();
});
