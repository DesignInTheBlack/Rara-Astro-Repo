// plugins.js

const utilities = require('./utilities');
const typography = require('./typography');
const { bufferPadding } = require('./spacing');

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
        paddingLeft: theme(`spacing.${bufferPadding.sm}`, '1rem'),
        paddingRight: theme(`spacing.${bufferPadding.sm}`, '1rem'),
        '@screen 2xs': {
          paddingLeft: theme(`spacing.${bufferPadding['2xs']}`, '0.5rem'),
          paddingRight: theme(`spacing.${bufferPadding['2xs']}`, '0.5rem'),
        },
        '@screen xs': {
          paddingLeft: theme(`spacing.${bufferPadding.xs}`, '0.75rem'),
          paddingRight: theme(`spacing.${bufferPadding.xs}`, '0.75rem'),
        },
        '@screen sm': {
          paddingLeft: theme(`spacing.${bufferPadding.sm}`, '1rem'),
          paddingRight: theme(`spacing.${bufferPadding.sm}`, '1rem'),
        },
        '@screen md': {
          paddingLeft: theme(`spacing.${bufferPadding.md}`, '1.25rem'),
          paddingRight: theme(`spacing.${bufferPadding.md}`, '1.25rem'),
        },
        '@screen lg': {
          paddingLeft: theme(`spacing.${bufferPadding.lg}`, '1.5rem'),
          paddingRight: theme(`spacing.${bufferPadding.lg}`, '1.5rem'),
        },
        '@screen xl': {
          paddingLeft: theme(`spacing.${bufferPadding.xl}`, '2rem'),
          paddingRight: theme(`spacing.${bufferPadding.xl}`, '2rem'),
        },
        '@screen 2xl': {
          paddingLeft: theme(`spacing.${bufferPadding['2xl']}`, '2.25rem'),
          paddingRight: theme(`spacing.${bufferPadding['2xl']}`, '2.25rem'),
        },
        '@screen 3xl': {
          paddingLeft: theme(`spacing.${bufferPadding['3xl']}`, '2.5rem'),
          paddingRight: theme(`spacing.${bufferPadding['3xl']}`, '2.5rem'),
        },
        '@screen 4xl': {
          paddingLeft: theme(`spacing.${bufferPadding['4xl']}`, '2.5rem'),
          paddingRight: theme(`spacing.${bufferPadding['4xl']}`, '2.5rem'),
        },
        '@screen 5xl': {
          paddingLeft: theme(`spacing.${bufferPadding['5xl']}`, '2.5rem'),
          paddingRight: theme(`spacing.${bufferPadding['5xl']}`, '2.5rem'),
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
  // Font Face Plugin: Adds Base Styles for Fonts
  // ----------------------------------
  function({ addBase }) {
    const fontFace = typography.fonts.map(font => ({
      '@font-face': {
        fontFamily: font.family,
        src: font.src,
        fontWeight: font.weight,
        fontStyle: font.style,
        fontDisplay: font.display
      }
    }));
    addBase(fontFace);
  },
  // ----------------------------------
  // Line Width Utilities Plugin
  // ----------------------------------
  ...utilities.plugins,
];