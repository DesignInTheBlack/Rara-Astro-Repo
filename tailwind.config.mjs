// tailwind.config.js

const typography = require('./elevate/typography');
const colors = require('./elevate/colors');
const spacing = require('./elevate/spacing');
const { screens, container } = require('./elevate/breakpoints');
const utilities = require('./elevate/utilities');
const plugins = require('./elevate/plugins');

/** @type {import('tailwindcss').Config} */
module.exports = {
  // ====================================================================================
  // Content Configuration
  // ====================================================================================
  // Specify the files Tailwind should scan for class names
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,vue}"],

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

    // ----------------------------------
    // Extended Theme Settings
    // ----------------------------------
    extend: {
      // Colors
      colors: colors.colors,

      // Utility extensions
      ...utilities.extend,
    },
  },

  // ====================================================================================
  // Plugin Configuration
  // ====================================================================================
  plugins: [
    ...plugins,
    // Add any additional plugins here
  ],

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