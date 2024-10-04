// utilities.js

module.exports = {
  // ====================================================================================
  // Utility Extensions
  // ====================================================================================
  // Extends Tailwind's utility classes with custom configurations

  extend: {
    // ----------------------------------
    // Custom Z-Index Scale
    // ----------------------------------
    // Provides a consistent z-index scale for layering elements
    zIndex: {
      '0': '0',
      '10': '10',
      '20': '20',
      '30': '30',
      '40': '40',
      '50': '50',
      '60': '60',
      '70': '70',
      '80': '80',
      '90': '90',
      '100': '100',
    },

    // ----------------------------------
    // Custom Max Width Utilities
    // ----------------------------------
    maxWidth: {
      'prose': 'var(--line-width, 65ch)',
    },

    // ----------------------------------
    // Additional Utility Classes
    // ----------------------------------
    // Add any project-specific utility classes here
    // For example:
    // opacity: {
    //   '15': '0.15',
    //   '35': '0.35',
    //   '65': '0.65',
    // },
    // transitionDuration: {
    //   '400': '400ms',
    // },
  },

  // ====================================================================================
  // Custom Utility Plugins
  // ====================================================================================
  plugins: [
    function({ addUtilities, theme }) {
      const lineWidthUtilities = Object.entries(theme('lineWidth')).map(([key, value]) => ({
        [`.max-w-${key}`]: { maxWidth: value },
      }));

      addUtilities(lineWidthUtilities, ['responsive']);
    }
  ],
};