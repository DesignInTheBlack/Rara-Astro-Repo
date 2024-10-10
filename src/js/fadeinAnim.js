document.addEventListener('DOMContentLoaded', function () {
    gsap.registerPlugin(ScrollTrigger);
  
    gsap.utils.toArray('.fade-in').forEach((element) => {
      gsap.from(element, {
        y: 75, // Optional: Move the element up by 50px for a subtle lift effect
        duration: 1,
        scrollTrigger: {
          trigger: element,
          start: 'top 95%', // Adjusted to trigger earlier
          toggleActions: 'play none none none', // Only play the animation once
          markers: false // Set to true for debugging
        }
      });
    });
  });
  