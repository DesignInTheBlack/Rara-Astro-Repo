document.addEventListener('DOMContentLoaded', function () {
    gsap.registerPlugin(ScrollTrigger);
  
    gsap.utils.toArray('.slip').forEach((element) => {
      gsap.from(element, {
        opacity:0,
        x: -75, // Optional: Move the element up by 50px for a subtle lift effect
        duration: 0.5,
        scrollTrigger: {
          trigger: element,
          start: 'top 85%', // Adjusted to trigger earlier
          toggleActions: 'play none none none', // Only play the animation once
          markers: false // Set to true for debugging
        }
      });
    });


    gsap.utils.toArray('.slip2').forEach((element) => {
      gsap.from(element, {
        opacity:0,
        x: -75, // Optional: Move the element up by 50px for a subtle lift effect
        duration: 1,
        scrollTrigger: {
          trigger: element,
          start: 'top 85%', // Adjusted to trigger earlier
          toggleActions: 'play none none none', // Only play the animation once
          markers: false // Set to true for debugging
        }
      });
    });


    gsap.utils.toArray('.slip3').forEach((element) => {
      gsap.from(element, {
        opacity:0,
        x: -75, // Optional: Move the element up by 50px for a subtle lift effect
        duration: 1.5,
        scrollTrigger: {
          trigger: element,
          start: 'top 85%', // Adjusted to trigger earlier
          toggleActions: 'play none none none', // Only play the animation once
          markers: false // Set to true for debugging
        }
      });
    });



  });
  