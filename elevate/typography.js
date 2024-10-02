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
    'tiny': ['0.8rem'],      // 12px
    'small': ['1rem'],       // 16px
    'base': ['1.5rem'],      // 24px (body)
    'h6': ['1.875rem'],      // 30px
    'h5': ['2.25rem'],       // 36px
    'h4': ['3rem'],          // 48px
    'h3': ['3.75rem'],       // 60px
    'h2': ['4.5rem'],        // 72px
    'h1': ['5.625rem'],      // 90px
    'eyebrow': ['0.875rem'], // 14px for eyebrow text
  },

  // ====================================================================================
  // Line Height Settings (if needed elsewhere)
  // ====================================================================================
  lineHeight: {
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

};
