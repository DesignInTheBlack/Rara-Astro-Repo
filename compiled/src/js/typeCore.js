import Typed from 'typed.js';

export const typeCore = (mobileStrings,desktopStrings,textID) => {

  // Detect if the device is mobile (e.g., using window width)
  const isMobile = window.innerWidth <= 768; // Example breakpoint for mobile

  // Function to initialize Typed
  function initTyped() {
    var typed = new Typed(`#${textID}`, {
      strings: isMobile ? mobileStrings : desktopStrings, // Conditionally set strings
      typeSpeed: 'natural',
      backSpeed: 50,
      backDelay: 100,
      loop: false,
      shuffle: false,
      cursorChar: '|',
      smartBackspace: true,

      // Random delay between each character
      randomSpeed: {
        min: 60,
        max: 80
      },

      // Callback function before typing starts
      preStringTyped: function(arrayPos, self) {
        // Randomly adjust the typing speed before each string
        self.typeSpeed = Math.floor(Math.random() * (40 - 20 + 1)) + 20;
      },

      // Callback function after typing is complete
      onStringTyped: function(arrayPos, self) {
        // Add a random pause after typing each string
        self.typeSpeed = Math.floor(Math.random() * (450 - 350 + 1)) + 350;
      },

      // Callback function when typing is complete
      onComplete: function(self) {
        // Hide the cursor
        self.cursor.style.display = 'none';
      }
    });
  }

  // Wait for 1 second before initializing Typed
  setTimeout(initTyped, 1000);
}