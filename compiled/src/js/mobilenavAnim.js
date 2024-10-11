document.addEventListener('DOMContentLoaded', function () {
    const mobileNavigation = document.getElementById('mobileNavigation');
    const mobileButton = document.getElementById('mobileButton');
    const closeButton = document.getElementById('closeButton');
  
    function openMenu() {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${window.scrollY}px`;
  
      const tl = gsap.timeline({
        onComplete: function() {
          closeButton.style.height = "28px";
        }
      });
  
      tl.to(mobileButton, { height: 0, duration: 0.25 });
      mobileNavigation.classList.remove('hidden');
      mobileNavigation.classList.add('fixed');
      tl.fromTo(mobileNavigation, { opacity: 0 }, { opacity: 1, duration: 0.5 });
    }
  
    function closeMenu() {
      const scrollY = document.body.style.top;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
  
      const tl2 = gsap.timeline({
        onComplete: function() {
          mobileButton.style.height = "28px";
          mobileNavigation.classList.remove('fixed');
          mobileNavigation.classList.add('hidden');
        }
      });
  
      tl2.to(closeButton, { height: 0, duration: 0.25 });
      tl2.fromTo(mobileNavigation, { opacity: 1 }, { opacity: 0, duration: 0.5 });
    }
  
    mobileButton.addEventListener('click', openMenu);
    closeButton.addEventListener('click', closeMenu);
  });
  