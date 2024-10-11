document.addEventListener('DOMContentLoaded', function () {
    function isScreenWidthOver600px() {
      return window.innerWidth > 600;
    }
  
    if (isScreenWidthOver600px()) {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return; // Skip animations if reduced motion is preferred
      }
  
      gsap.registerPlugin(ScrollTrigger);
  
      const navTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: "#headerContainer",
          start: "top top",
          end: "+=300",
          scrub: true,
          onUpdate: (self) => {
            const mainNav = document.getElementById("mainNav");
            mainNav.classList.toggle("!buffer", self.progress === 0);
          }
        }
      });
  
      navTimeline.to("#quoteBar", { height: 0, opacity: 0, padding: 0, duration: 0.3 }, 0);
      navTimeline.to(["#logo", "#contactButton"], { opacity: 0, scale: 0, duration: 0.1 }, 0);
      navTimeline.to("#mainNav", {
        padding: "0.5rem 1rem",
        borderRadius: "1rem",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        marginTop: "0.5rem",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        width: "225px",
        duration: 0.3,
        onStart: function() {
          document.getElementById("mainNav").classList.add("nav-centered");
        }
      }, 0);
  
      // Handle hiding/showing the logo and contact button on scroll
      ScrollTrigger.create({
        trigger: "#headerContainer",
        start: "top top",
        end: "+=100",
        scrub: true,
        onUpdate: (self) => {
          gsap.set(["#logo", "#contactButton"], { display: self.direction === 1 && self.progress >= 0.99 ? "none" : "block" });
        }
      });
    }
  
    // Reinitialize animations on window resize
    window.addEventListener('resize', function() {
      if (isScreenWidthOver600px()) {
        location.reload();
      }
    });
  });
  