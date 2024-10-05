// plugins.js

const utilities = require('./utilities');

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
        paddingLeft: theme('spacing.d6', '1rem'),
        paddingRight: theme('spacing.d6', '1rem'),
        '@screen 2xs': {
          paddingLeft: theme('spacing.d6', '0.5rem'),
          paddingRight: theme('spacing.d6', '0.5rem'),
        },
        '@screen xs': {
          paddingLeft: theme('spacing.d6', '0.75rem'),
          paddingRight: theme('spacing.d6', '0.75rem'),
        },
        '@screen sm': {
          paddingLeft: theme('spacing.d6', '1rem'),
          paddingRight: theme('spacing.d6', '1rem'),
        },
        '@screen md': {
          paddingLeft: theme('spacing.d6', '1.25rem'),
          paddingRight: theme('spacing.d6', '1.25rem'),
        },
        '@screen lg': {
          paddingLeft: theme('spacing.c8', '1.5rem'),
          paddingRight: theme('spacing.c8', '1.5rem'),
        },
        '@screen xl': {
          paddingLeft: theme('spacing.c8', '2rem'),
          paddingRight: theme('spacing.c8', '2rem'),
        },
        '@screen 2xl': {
          paddingLeft: theme('spacing.c8', '2.25rem'),
          paddingRight: theme('spacing.c8', '2.25rem'),
        },
        '@screen 3xl': {
          paddingLeft: theme('spacing.c8', '2.5rem'),
          paddingRight: theme('spacing.c8', '2.5rem'),
        },
      }
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

  // ----------------------------------
  // Line Width Utilities Plugin
  // ----------------------------------
  ...utilities.plugins,
];