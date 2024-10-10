import Typed from 'typed.js';

document.addEventListener('DOMContentLoaded', function() {
  // Detect if the device is mobile (e.g., using window width)
  const isMobile = window.innerWidth <= 768; // Example breakpoint for mobile

  // Strings for desktop and mobile
  const desktopStrings = [
    'Make <strong>Beautiful</strong> Websites^150.',
    'Design <strong>Powerful</strong> Graphics^250.',
    'Build <strong>Bold</strong> Brands^350.',
    'Are <strong>Rara Avis</strong>^200.'
  ];

  const mobileStrings = [
    'Are <strong>Rara Avis</strong>^200.' // Only the last statement for mobile
  ];

  var typed = new Typed('#typed', {
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
});
