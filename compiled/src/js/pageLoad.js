// Hide body initially
document.body.style.opacity = '0';

// Fade in when the page is fully loaded
window.onload = () => {
  gsap.to('body', {
    opacity: 1,
    duration: 0.4,
    ease: 'power1.out'
  });
};

// Fade out on link click
document.addEventListener('click', (e) => {
  const link = e.target.closest('a');
  if (link && link.href && link.origin === window.location.origin) {
    e.preventDefault();
    gsap.to('body', {
      opacity: 0,
      duration: 0.4,
      ease: 'power1.out',
      onComplete: () => {
        window.location.href = link.href;
      }
    });
  }
});