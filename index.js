Shery.mouseFollower();
Shery.makeMagnet(".magnet");



window.addEventListener("wheel", function(dets){
    if(dets.deltaY>0){
        gsap.to(".marquee",{
        transform:'translateX(-200%)',
        duration:4,
        repeat:-1,
        ease:"none",
    })
     gsap.to(".marquee img",{
        rotate:180
        })
    }else{
         gsap.to(".marquee",{
        transform:'translateX(0%)',
        duration:4,
        repeat:-1,
        ease:"none",
        })
        gsap.to(".marquee img",{
        rotate:0
        })
    }
})


gsap.to(".fleftelm",{
    scrollTrigger:{
        trigger: '.fimages',
        pin:true,
        start: "top top",
        end: "bottom top",
        endTrigger:".last",
        scrub:1,
    },
    y:"-300%",
    ease:Power1
})


let sections = document.querySelectorAll(".fleftelm");
Shery.imageEffect(".images", {
  style: 4,
  config: { onMouse: { value: 0 } },
  slideStyle: (setScroll) => {
    sections.forEach(function (section, index) {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        scrub: 1,
        onUpdate: function (prog) {
          setScroll(prog.progress + index);
        },
      });
    });
  },
});

  ScrollTrigger.create({
      trigger: ".images",
      start: "top center",
      end: "bottom center",
      onEnter: () => gsap.to("body", { backgroundColor: "#000", duration: 0.5 }),
      onLeaveBack: () => gsap.to("body", { backgroundColor: "#fff", duration: 0.5 })},
    
);

// ScrollTrigger.create({
//   trigger: ".projects",
//   start: "top top",         // When .projects hits the top of the viewport
//   end: "bottom bottom",     // Until the bottom of .projects hits bottom of viewport
//   onEnter: () => {
//     gsap.to("body", { backgroundColor: "#fff", duration: 0.5, overwrite: 'auto' });
//   },
//   onEnterBack: () => {
//     gsap.to("body", { backgroundColor: "#fff", duration: 0.5, overwrite: 'auto' });
//   },
//   onLeave: () => {
//     gsap.to("body", { backgroundColor: "#000", duration: 0.5, overwrite: 'auto' });
//   },
//   onLeaveBack: () => {
//     gsap.to("body", { backgroundColor: "#000", duration: 0.5, overwrite: 'auto' });
//   },
//   // markers: true // Uncomment for debugging
// });


//  gsap.registerPlugin(ScrollTrigger);

//   const sliderWrapper = document.querySelector(".slider-wrapper");
//   const slides = document.querySelectorAll(".slide");
//   const totalWidth = sliderWrapper.scrollWidth;

//   gsap.to(sliderWrapper, {
//     x: () => -(totalWidth - window.innerWidth + 300), // 300 = 2 * 150px padding
//     ease: "none",
//     scrollTrigger: {
//       trigger: ".projects",
//       start: "top top",
//       end: () => "+=" + (totalWidth - window.innerWidth + 300),
//       scrub: true,
//       pin: true,
//       anticipatePin: 1,
//     },
//   });


// Horizontal Scroll for Projects
const sliderWrapper = document.querySelector(".slider-wrapper");
const totalWidth = sliderWrapper.scrollWidth;

gsap.to(sliderWrapper, {
  x: () => -(totalWidth - window.innerWidth + 300), // 300 = padding
  ease: "none",
  scrollTrigger: {
    trigger: ".projects",
    start: "top top",
    end: () => "+=" + (totalWidth - window.innerWidth + 300),
    scrub: true,
    pin: true,
    anticipatePin: 1,
    onUpdate: self => {
      const progress = self.progress;
      if (progress > 0 && progress < 1) {
        gsap.to("body", { backgroundColor: "#fff", duration: 0.3, overwrite: true });
      } else {
        gsap.to("body", { backgroundColor: "#000", duration: 0.3, overwrite: true });
      }
    },
  },
});