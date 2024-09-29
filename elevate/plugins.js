// plugins.js

module.exports = [

  // ----------------------------------
  // Layout Plugin: Adds Custom Components for Layout
  // ----------------------------------
  function ({ addComponents, theme }) {
    const components = {
      // Base Styles for All Space Components
      '.space': {
        display: 'block',
        width: '100%',
      },

      // Content Component for Wrapping Content
      '.content': {
        maxWidth: theme('container.screens.xl', '80rem'),
        marginLeft: 'auto',
        marginRight: 'auto',
      },

      // Buffer Utility for Padding
      '.buffer': {
        paddingLeft: theme('spacing.d4', '1rem'),
        paddingRight: theme('spacing.d4', '1rem'),
      },
    };

    addComponents(components);
  },

  // ----------------------------------
  // Line Width Plugin: Adds Utilities for Controlling Line Width
  // ----------------------------------
  function ({ addUtilities, theme }) {
    const newUtilities = Object.entries(theme('lineWidth')).map(
      ([key, value]) => ({
        [`.line-width-${key}`]: { maxWidth: value },
      })
    );
    addUtilities(newUtilities);
  },

  // ----------------------------------
  // Baseline Grid Plugin: Adds Utilities for a Baseline Grid Overlay
  // ----------------------------------
  function ({ addUtilities }) {
    const newUtilities = {
      '.baseline-grid': {
        backgroundImage:
          'linear-gradient(to bottom, rgba(0,0,0,0.1) 1px, transparent 1px)',
        backgroundSize: '100% 0.25rem',
      },
    };
    addUtilities(newUtilities);
  },
];