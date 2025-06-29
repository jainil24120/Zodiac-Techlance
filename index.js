  Shery.mouseFollower();
  Shery.makeMagnet(".magnet");

    window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    const content = document.getElementById("mainContent");

    // Step 1: Slide loader up
    loader.classList.add("slide-up");

    // Step 2: After transition (1s), hide loader and show content
    setTimeout(() => {
      loader.style.display = "none";
      content.classList.remove("opacity-0");
      content.classList.add("opacity-100", "transition-opacity", "duration-1000");
    }, 1000); // Match with transition duration
  });

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
      trigger: ".featured",
      start: "top center",
      end: "bottom center",
      onEnter: () => gsap.to("body", { backgroundColor: "#000", duration: 0.5 }),
      onLeaveBack: () => gsap.to("body", { backgroundColor: "#fff", duration: 0.5 })},
    
);

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

      
  gsap.utils.toArray(".testimonial-card").forEach((card, index) => {
        gsap.from(card, {
          opacity: 0,
          y: 50,
          duration: 0.8,
          delay: index * 0.01,
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        });
      });