// breakpoints.js

module.exports = {
  // ====================================================================================
  // Custom Breakpoints
  // ====================================================================================
  // Defines custom screen sizes for responsive design.

  screens: {
    '2xs': '20rem',   // 320px - Very Small Mobile
    'xs': '30rem',    // 480px - Small Mobile
    'sm': '36rem',    // 576px - Large Mobile
    'md': '48rem',    // 768px - Tablet
    'lg': '64rem',    // 1024px - Small Desktop
    'xl': '80rem',    // 1280px - Medium Desktop
    '2xl': '100rem',  // 1600px - Large Desktop
    '3xl': '120rem',  // 1920px - Extra Large Desktop
  },

  // ====================================================================================
  // Container Sizes with Custom Breakpoints
  // ====================================================================================
  // Defines custom container widths at different screen sizes for consistent layout.

  container: {
    center: true,
    padding: '1rem', // Default padding for the container

    screens: {
      '2xs': '18rem',   // 288px - Very Small Mobile
      'xs': '28rem',    // 448px - Small Mobile
      'sm': '34rem',    // 544px - Large Mobile
      'md': '45rem',    // 720px - Tablet
      'lg': '60rem',    // 960px - Small Desktop
      'xl': '75rem',    // 1200px - Medium Desktop
      '2xl': '90rem',   // 1440px - Large Desktop
      '3xl': '110rem',  // 1760px - Extra Large Desktop
    },
  },
};