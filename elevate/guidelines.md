// ====================================================================================
// Elevate Web Design System (EWDS) Guidelines
// ====================================================================================
// The Elevate Web Design System (EWDS) is a custom Tailwind CSS configuration that 
// provides a consistent and efficient way to build web interfaces. It includes 
// predefined settings for colors, typography, spacing, breakpoints, utilities, 
// plugins, and custom shorthand formats.

// ====================================================================================
// Core Layout Philosophy
// ====================================================================================
// EWDS provides three key classes for structuring and spacing content: `.space`, 
// `.content`, and `.buffer`.

// ----------------------------------
// Space
// ----------------------------------
// The `.space` class is used to create distinct sections within a page. It establishes
// vertical rhythm and visual separation between major content areas. Apply the `.space` 
// class to top-level containers that represent a logical section of your page.

// Example:
// ```html
// <section class="space">
//   <!-- Section content -->
// </section>
// ```

// ----------------------------------
// Content
// ----------------------------------
// The `.content` class is used to wrap the main content within a section. It applies a
// maximum width to the content area and centers it horizontally within its parent 
// container. Use the `.content` class to ensure your content remains readable and 
// well-proportioned across different screen sizes.

// Example:
// ```html
// <section class="space">
//   <div class="content">
//     <!-- Main content -->
//   </div>
// </section>
// ```

// ----------------------------------
// Buffer
// ----------------------------------
// The `.buffer` class is used to add padding to the left and right of an element, 
// creating a consistent gutter between the content and the edges of its container. This
// prevents content from butting up against the edges of the screen or its parent 
// container, improving readability and visual balance. Apply the `.buffer` class to 
// elements that require this extra breathing room.

// Example:
// ```html
// <section class="space">
//   <div class="content buffer">
//     <!-- Main content with padding -->
//   </div>
// </section>
// ```

// By utilizing these three classes in combination, you can create a well-structured and
// visually pleasing layout that adheres to the core principles of the EWDS web design 
// system.

// ====================================================================================
// Colors (colors.js)
// ====================================================================================
// EWDS defines a custom color palette in the `colors.js` file. The color values can be 
// customized according to the project's branding requirements.

// ====================================================================================
// Typography (typography.js)
// ====================================================================================
// EWDS provides fluid font sizes that scale based on the viewport size using CSS 
// `clamp()`. It also defines custom line heights, letter spacing values, and line 
// widths for controlling text layout and readability.

// ====================================================================================
// Spacing (spacing.js)
// ====================================================================================
// EWDS has a comprehensive spacing scale divided into three categories: Detail (`d1` to
// `d13`), Content (`c1` to `c13`), and Space (`s1` to `s13`). These values can be used 
// for margins, padding, and other spatial properties.

// ====================================================================================
// Breakpoints and Container Sizes (breakpoints.js)
// ====================================================================================
// Five custom breakpoints are defined: `xs`, `sm`, `md`, `lg`, and `xl`. The container 
// sizes are specified for each breakpoint to maintain a consistent layout.

// ====================================================================================
// Utilities and Plugins (utilities.js, plugins.js)
// ====================================================================================
// EWDS extends Tailwind's utility classes with custom configurations for z-index and 
// includes additional project-specific utility classes. It also provides custom plugins
// for flex utilities, layout components, line width control, and baseline grid 
// overlays.

// ====================================================================================
// Shorthand Formats (vite-plugin-tailwind-shorthand.js)
// ====================================================================================
// EWDS introduces powerful shorthand formats for common utility combinations. The 
// vite-plugin-tailwind-shorthand.js file defines the transformations for these 
// shorthand notations.

// ----------------------------------
// Available Shorthands
// ----------------------------------
// - Grid: `grid-[columns,rows,gap,justify,align,flow]`
// - Flex (Container): `direction-[justify,align,wrap,content]`
// - Flex (Item): `item-[grow,basis,shrink,align]`
// - Margin/Padding: `margin-[l,r,t,b]`, `pad-[l,r,t,b]`
// - Text: `text-[size,weight,family,height,align,spacing,color]`

// ----------------------------------
// Breakpoint Shorthand Syntax
// ----------------------------------
// The breakpoint shorthand syntax allows you to specify different classes for different
// breakpoints using a concise notation. The breakpoint name serves as a divider between
// class groups.

// Syntax: `class class class /breakpoint/ class class class /breakpoint/ class class class`

// Example:
// ```html
// <div class="text-[fluid-base,bold,_,_,_,_,purple] /sm/ text-[fluid-lg,_,_,_,center,_,_] /lg/ text-[fluid-xl,_,_,_,_,_,_] margin-[d4,d4,d4,d4] /md/ margin-[c2,c2,c2,c2]">
//   <!-- Content -->
// </div>
// ```

// In this example:
// - The base styles (applied at all breakpoints) are: `text-[fluid-base,bold,_,_,_,_,purple]` 
//   and `margin-[d4,d4,d4,d4]`
// - At the `sm` breakpoint, the text size changes to `fluid-lg` and the text alignment 
//   becomes `center`
// - At the `lg` breakpoint, the text size changes to `fluid-xl`
// - At the `md` breakpoint, the margin changes to `margin-[c2,c2,c2,c2]`

// The vite plugin will transform these shorthand notations into the appropriate 
// Tailwind utility classes during the build process.

// By using the breakpoint shorthand syntax and convenience classes, you can easily 
// specify responsive styles and common flex configurations while keeping your HTML 
// clean and readable.