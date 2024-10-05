// typography.js

module.exports = {
  // ====================================================================================
  // Typography Settings with Responsive Fluid Font Sizes
  // ====================================================================================
  fontSize: {
    // Existing fluid typography (no changes)
    'fluid-xs': ['clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)'],
    'fluid-sm': ['clamp(0.875rem, 0.8rem + 0.375vw, 1rem)'],
    'fluid-base': ['clamp(1rem, 0.9rem + 0.5vw, 1.125rem)'],
    'fluid-lg': ['clamp(1.125rem, 1rem + 0.625vw, 1.25rem)'],
    'fluid-xl': ['clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)'],
    'fluid-2xl': ['clamp(1.5rem, 1.3rem + 1vw, 1.875rem)'],
    'fluid-3xl': ['clamp(1.875rem, 1.6rem + 1.375vw, 2.25rem)'],
    'fluid-4xl': ['clamp(2.25rem, 1.9rem + 1.75vw, 3rem)'],
    'fluid-5xl': ['clamp(3rem, 2.5rem + 2.5vw, 4rem)'],

    // Non-fluid perfect fifth scale typography without line heights
    'tiny': ['0.533rem'],      // 8.53px
    'small': ['0.711rem'],     // 11.38px
    'base': ['1rem'],          // 16px (body)
    'h6': ['1.125rem'],        // 18px
    'h5': ['1.5rem'],          // 24px
    'h4': ['2.25rem'],         // 36px
    'h3': ['3.375rem'],        // 54px
    'h2': ['5.062rem'],        // 81px
    'h1': ['7.594rem'],        // 121.5px
    'eyebrow': ['0.583rem'],   // 9.33px for eyebrow text
  },

  // ====================================================================================
  // Line Height Settings (if needed elsewhere)
  // ====================================================================================
  lineHeight: {
    'hug':'1',
    'tight': '1.2',           // For headings
    'snug': '1.3',
    'normal': '1.4',          // Default for body text
    'relaxed': '1.5',
    'loose': '1.6',
    'spacious': '1.7',
    'extra-spacious': '1.8',  // For large blocks of text
  },

  // ====================================================================================
  // Letter Spacing Settings
  // ====================================================================================
  letterSpacing: {
    'extra-tight': '-0.02rem',
    'tight': '-0.01rem',
    'normal': '0',
    'wide': '0.01rem',
    'wider': '0.02rem',
    'widest': '0.04rem',
  },

  // ====================================================================================
  // Line Width (Measure) Settings for Controlling Text Width
  // ====================================================================================
  lineWidth: {
    'extra-narrow': '30ch', // Approx. 30 characters per line
    'narrow': '45ch',       // Recommended for mobile
    'medium': '60ch',       // Ideal for readability
    'wide': '75ch',         // For larger screens
    'extra-wide': '90ch',   // For very wide layouts
  },

  // ====================================================================================
  // Font Family Settings
  // ====================================================================================
  fontFamily: {
    'sans': ['Sk-Modernist'],
    'mono': ['Sk-Modernist-Mono'],
    'serif': ['PlayfairDisplay'],
  },

  // ====================================================================================
  // Font Definitions
  // ====================================================================================
  fonts: [
    {
      family: 'Sk-Modernist',
      src: 'url("/fonts/Sk-Modernist-Regular.otf") format("opentype")',
      weight: '400',
      style: 'normal',
      display: 'swap',
    },
    {
      family: 'Sk-Modernist',
      src: 'url("/fonts/Sk-Modernist-Bold.otf") format("opentype")',
      weight: '700',
      style: 'normal',
      display: 'swap',
    },
    {
      family: 'Sk-Modernist-Mono',
      src: 'url("/fonts/Sk-Modernist-Mono.otf") format("opentype")',
      weight: '400',
      style: 'normal',
      display: 'swap',
    },
    {
      family: 'PlayfairDisplay',
      src: 'url("/fonts/PlayfairDisplay-Black.ttf") format("truetype")',
      weight: '900',
      style: 'normal',
      display: 'swap',
    },
    {
      family: 'PlayfairDisplay',
      src: 'url("/fonts/PlayfairDisplay-Bold.ttf") format("truetype")',
      weight: '700',
      style: 'normal',
      display: 'swap',
    },
    {
      family: 'PlayfairDisplay',
      src: 'url("/fonts/PlayfairDisplay-ExtraBold.ttf") format("truetype")',
      weight: '800',
      style: 'normal',
      display: 'swap',
    },
    {
      family: 'PlayfairDisplay',
      src: 'url("/fonts/PlayfairDisplay-Medium.ttf") format("truetype")',
      weight: '500',
      style: 'normal',
      display: 'swap',
    },
    {
      family: 'PlayfairDisplay',
      src: 'url("/fonts/PlayfairDisplay-Regular.ttf") format("truetype")',
      weight: '400',
      style: 'normal',
      display: 'swap',
    },
    {
      family: 'PlayfairDisplay',
      src: 'url("/fonts/PlayfairDisplay-SemiBold.ttf") format("truetype")',
      weight: '600',
      style: 'normal',
      display: 'swap',
    },
  ],

};