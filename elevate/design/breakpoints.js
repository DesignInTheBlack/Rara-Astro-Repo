// breakpoints.js
module.exports = {
  // ====================================================================================
  // Custom Breakpoints
  // ====================================================================================
  // Defines custom screen sizes for responsive design.
  
  screens: {
    '2xs': '20rem',   // 320px - Very Small Mobile
    'xs': '30rem',    // 480px - Small Mobile
    'sm': '40rem',    // 640px - Large Mobile
    'md': '48rem',    // 768px - Tablet
    'lg': '64rem',    // 1024px - Small Desktop
    'xl': '80rem',    // 1280px - Medium Desktop
    '2xl': '96rem',   // 1536px - Large Desktop
    '3xl': '120rem',  // 1920px - Full HD
    '4xl': '160rem',  // 2560px - 2K
    '5xl': '240rem'   // 3840px - 4K
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
      'sm': '38rem',    // 608px - Large Mobile
      'md': '45rem',    // 720px - Tablet
      'lg': '60rem',    // 960px - Small Desktop
      'xl': '75rem',    // 1200px - Medium Desktop
      '2xl': '90rem',   // 1440px - Large Desktop
      '3xl': '114rem',  // 1824px - Full HD
      '4xl': '152rem',  // 2432px - 2K
      '5xl': '228rem'   // 3648px - 4K
    },
  },
};