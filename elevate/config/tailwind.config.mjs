// tailwind.config.mjs

const typography = require('../design/typography');
const colors = require('../design/colors');
const spacing = require('../design/spacing');
const { screens, container } = require('../design/breakpoints');
const utilities = require('../design/utilities');
const plugins = require('../design/plugins');

/** @type {import('tailwindcss').Config} */
module.exports = {
  // ====================================================================================
  // Content Configuration
  // ====================================================================================
  // Specify the files Tailwind should scan for class names
  content: ["compiled/src/**/*.{astro,html,js,jsx,ts,tsx,vue}"],

  // ====================================================================================
  // Theme Configuration
  // ====================================================================================
  // Customize your design system's global theme
  theme: {
    // ----------------------------------
    // Spacing Scale
    // ----------------------------------
    spacing: spacing.spacing,

    // ----------------------------------
    // Breakpoints
    // ----------------------------------
    screens: screens,

    // ----------------------------------
    // Container Sizes
    // ----------------------------------
    container: container,

    // ----------------------------------
    // Typography
    // ----------------------------------
    fontSize: typography.fontSize,
    lineHeight: typography.lineHeight,
    letterSpacing: typography.letterSpacing,
    lineWidth: typography.lineWidth,
    fontFamily: typography.fontFamily,

    // ----------------------------------
    // Extended Theme Settings
    // ----------------------------------
    extend: {
      // Colors
      colors: colors.colors,

      // Utility extensions
      ...utilities.extend,

      // Custom gradient
      backgroundImage: {
        'rara': `linear-gradient(
          135deg,
          hsla(260, 86%, 53%, 1) 30%,
          hsla(271, 100%, 43%, 1) 65%
        )`,
        'rara-pattern': `linear-gradient(
          135deg,
          hsla(260, 86%, 53%, 1) 30%,
          hsla(271, 100%, 43%, 1) 65%
        ), url("https://www.transparenttextures.com/patterns/brilliant.png")`,
      },
    },
  },

  // ====================================================================================
  // Plugin Configuration
  // ====================================================================================
  plugins: plugins,

  // ====================================================================================
  // Core Plugins Configuration
  // ====================================================================================
  // Enable or disable Tailwind's core plugins
  // corePlugins: {
  //   // Disable core plugins if needed
  //   // preflight: false,
  // },

  // ====================================================================================
  // Prefix Configuration
  // ====================================================================================
  // Add a custom prefix to all of Tailwind's generated classes
  // prefix: 'tw-',
};