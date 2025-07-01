import Typed from 'typed.js';

export const typeCore = (mobileStrings, desktopStrings, textID) => {
  // breakpoint check
  const isMobile = window.innerWidth <= 768;

  // only init once the DOM is ready
  function initTyped() {
    new Typed(`#${textID}`, {
      strings: isMobile ? mobileStrings : desktopStrings,
      // numeric speeds for consistency
      startDelay:   200,    // slight pause before starting
      typeSpeed:    60,     // ms per char
      backSpeed:    40,     // ms per char delete
      backDelay:    800,    // ms pause before backspace
      smartBackspace: true,
      showCursor:   true,
      cursorChar:   '|',
      loop:         false,

      onComplete(self) {
        // fade out the cursor nicely
        self.cursor.style.opacity = '0';
        setTimeout(() => self.cursor.remove(), 500);
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTyped);
  } else {
    initTyped();
  }
};
