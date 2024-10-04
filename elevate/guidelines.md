# Elevate Web Design System (EWDS) Documentation

## Table of Contents

1. [Introduction](#introduction)
2. [Core Layout Philosophy](#core-layout-philosophy)
3. [Breakpoint System](#breakpoint-system)
4. [Shorthand Syntax](#shorthand-syntax)
5. [Spacing Scale](#spacing-scale)
6. [Color Palette](#color-palette)
7. [Typography](#typography)
8. [Z-Index Scale](#z-index-scale)
9. [Container Sizes](#container-sizes)

// ====================================================================================
// Introduction
// ====================================================================================

The Elevate Web Design System (EWDS) is a custom Tailwind CSS configuration that provides a consistent and efficient way to build web interfaces. It includes predefined settings for colors, typography, spacing, breakpoints, and custom shorthand formats for rapid development.

// ====================================================================================
// Core Layout Philosophy
// ====================================================================================

EWDS provides three key classes for structuring and spacing content:

1. `.space`: Used to create distinct sections within a page. It establishes vertical rhythm and visual separation between major content areas.

2. `.content`: Wraps the main content within a section. It applies a maximum width to the content area and centers it horizontally within its parent container.

3. `.buffer`: Adds padding to the left and right of an element, creating a consistent gutter between the content and the edges of its container.

Example usage:

```html
<section class="space">
  <div class="content buffer">
    <!-- Main content with padding -->
  </div>
</section>
```

// ====================================================================================
// Breakpoint System
// ====================================================================================

EWDS defines five custom breakpoints:

- `xs`: 36rem (576px) - Mobile Small
- `sm`: 48rem (768px) - Mobile
- `md`: 64rem (1024px) - Tablet
- `lg`: 80rem (1280px) - Desktop
- `xl`: 100rem (1600px) - Large Desktop

// ----------------------------------
// Breakpoint Shorthand Syntax
// ----------------------------------

The breakpoint shorthand syntax allows you to specify different classes for different breakpoints using a concise notation:

```
class class class /breakpoint/ class class class /breakpoint/ class class class
```

Example:
```html
<div class="text-[fluid-base,bold,_,_,_,_,purple] /sm/ text-[fluid-lg,_,_,_,center,_,_] /lg/ text-[fluid-xl,_,_,_,_,_,_]">
  <!-- Content -->
</div>
```

// ====================================================================================
// Shorthand Syntax
// ====================================================================================

EWDS provides several shorthand notations for common Tailwind utility combinations:

// ----------------------------------
// Grid Shorthand
// ----------------------------------

Format: `grid-[columns,rows,gap,justify,align,flow]`

- `columns`: Number of columns or Tailwind's grid-cols-* values
- `rows`: Number of rows or Tailwind's grid-rows-* values
- `gap`: Spacing value (see [Spacing Scale](#spacing-scale))
- `justify`: start, end, center, between, around, evenly
- `align`: start, end, center, stretch, baseline
- `flow`: row, col, row-dense, col-dense

Example:
```html
<div class="grid-[3,2,d4,center,stretch,row]">
  <!-- Grid content -->
</div>
```

// ----------------------------------
// Flex Container Shorthand
// ----------------------------------

Format: `direction-[justify,align,wrap,content]`

- `direction`: row or col
- `justify`: start, end, center, between, around, evenly
- `align`: start, end, center, stretch, baseline
- `wrap`: wrap, nowrap, wrap-reverse
- `content`: start, end, center, between, around, evenly

Example:
```html
<div class="row-[between,center,wrap,_]">
  <!-- Flex container content -->
</div>
```

// ----------------------------------
// Flex Item Shorthand
// ----------------------------------

Format: `item-[grow,basis,shrink,align]`

- `grow`: Tailwind's flex-grow-* values
- `basis`: Tailwind's basis-* values or spacing values
- `shrink`: Tailwind's flex-shrink-* values
- `align`: auto, start, end, center, stretch, baseline

Example:
```html
<div class="item-[1,c5,0,center]">
  <!-- Flex item content -->
</div>
```

// ----------------------------------
// Margin/Padding Shorthand
// ----------------------------------

Format: `margin-[l,r,t,b]` or `pad-[l,r,t,b]`

- Values for each direction: Spacing scale (see [Spacing Scale](#spacing-scale))

Example:
```html
<div class="margin-[d4,d4,d4,d4] pad-[c2,c2,c2,c2]">
  <!-- Content with margin and padding -->
</div>
```

// ----------------------------------
// Text Shorthand
// ----------------------------------

Format: `text-[size,weight,family,height,align,spacing,color]`

- `size`: fluid-xs, fluid-sm, fluid-base, fluid-lg, fluid-xl, fluid-2xl, fluid-3xl, fluid-4xl, fluid-5xl, tiny, small, base, h6, h5, h4, h3, h2, h1, eyebrow
- `weight`: thin, extralight, light, normal, medium, semibold, bold, extrabold, black
- `family`: sans, serif, mono
- `height`: tight, snug, normal, relaxed, loose, spacious, extra-spacious
- `align`: left, center, right, justify
- `spacing`: extra-tight, tight, normal, wide, wider, widest
- `color`: purple, grey, white, black, error, warn

Example:
```html
<p class="text-[fluid-lg,bold,sans,normal,center,wide,purple]">
  <!-- Text content -->
</p>
```

// ====================================================================================
// Spacing Scale
// ====================================================================================

EWDS uses a comprehensive spacing scale divided into three categories:

// ----------------------------------
// Detail (d1 to d13)
// ----------------------------------

For fine adjustments and component construction (0.25rem - 3.5rem):

- `d1`: 0.25rem (4px)
- `d2`: 0.5rem (8px)
- `d3`: 0.75rem (12px)
- `d4`: 1rem (16px)
- `d5`: 1.25rem (20px)
- `d6`: 1.5rem (24px)
- `d7`: 1.75rem (28px)
- `d8`: 2rem (32px)
- `d9`: 2.25rem (36px)
- `d10`: 2.5rem (40px)
- `d11`: 2.75rem (44px)
- `d12`: 3rem (48px)
- `d13`: 3.5rem (56px)

Example usage:
```html
<div class="m-d4 p-d8">
  <!-- Element with 1rem margin and 2rem padding -->
</div>
```

// ----------------------------------
// Content (c1 to c13)
// ----------------------------------

For general page layout and larger component spacing (4rem - 20rem):

- `c1`: 4rem (64px)
- `c2`: 4.5rem (72px)
- `c3`: 5rem (80px)
- `c4`: 5.5rem (88px)
- `c5`: 6rem (96px)
- `c6`: 7rem (112px)
- `c7`: 7.5rem (120px)
- `c8`: 8rem (128px)
- `c9`: 9rem (144px)
- `c10`: 10rem (160px)
- `c11`: 12rem (192px)
- `c12`: 16rem (256px)
- `c13`: 20rem (320px)

Example usage:
```html
<section class="my-c6 px-c3">
  <!-- Section with 7rem vertical margin and 5rem horizontal padding -->
</section>
```

// ----------------------------------
// Space (s1 to s13)
// ----------------------------------

For major page sections and full-page layouts (24rem - 120rem):

- `s1`: 24rem (384px)
- `s2`: 28rem (448px)
- `s3`: 32rem (512px)
- `s4`: 36rem (576px)
- `s5`: 40rem (640px)
- `s6`: 48rem (768px)
- `s7`: 56rem (896px)
- `s8`: 60rem (960px)
- `s9`: 64rem (1024px)
- `s10`: 72rem (1152px)
- `s11`: 80rem (1280px)
- `s12`: 90rem (1440px)
- `s13`: 120rem (1920px)

Example usage:
```html
<div class="w-s6 h-s4">
  <!-- Element with 48rem width and 36rem height -->
</div>
```

// ====================================================================================
// Color Palette
// ====================================================================================

EWDS defines a custom color palette:

- `purple`: #9109E9
- `grey`: #E5ECF4
- `white`: #FFFFFF
- `black`: #0F0A0A
- `error`: #D81E5B
- `warn`: #FFD046

Example usage:
```html
<div class="bg-purple text-white">
  <!-- Purple background with white text -->
</div>
<span class="text-error">
  <!-- Error text -->
</span>
```

// ====================================================================================
// Typography
// ====================================================================================

// ----------------------------------
// Font Sizes
// ----------------------------------

EWDS provides both fluid and non-fluid typography scales:

Fluid Typography:
- `fluid-xs`: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)
- `fluid-sm`: clamp(0.875rem, 0.8rem + 0.375vw, 1rem)
- `fluid-base`: clamp(1rem, 0.9rem + 0.5vw, 1.125rem)
- `fluid-lg`: clamp(1.125rem, 1rem + 0.625vw, 1.25rem)
- `fluid-xl`: clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)
- `fluid-2xl`: clamp(1.5rem, 1.3rem + 1vw, 1.875rem)
- `fluid-3xl`: clamp(1.875rem, 1.6rem + 1.375vw, 2.25rem)
- `fluid-4xl`: clamp(2.25rem, 1.9rem + 1.75vw, 3rem)
- `fluid-5xl`: clamp(3rem, 2.5rem + 2.5vw, 4rem)

Non-fluid Typography:
- `tiny`: 0.8rem (12px)
- `small`: 1rem (16px)
- `base`: 1.5rem (24px)
- `h6`: 1.875rem (30px)
- `h5`: 2.25rem (36px)
- `h4`: 3rem (48px)
- `h3`: 3.75rem (60px)
- `h2`: 4.5rem (72px)
- `h1`: 5.625rem (90px)
- `eyebrow`: 0.875rem (14px)

Example usage:
```html
<p class="text-fluid-lg">Large fluid text</p>
<h1 class="text-h1">Heading 1</h1>
```

// ----------------------------------
// Line Heights
// ----------------------------------

- `tight`: 1.2
- `snug`: 1.3
- `normal`: 1.4
- `relaxed`: 1.5
- `loose`: 1.6
- `spacious`: 1.7
- `extra-spacious`: 1.8

Example usage:
```html
<p class="leading-normal">Normal line height</p>
<div class="leading-loose">Loose line height</div>
```

// ----------------------------------
// Letter Spacing
// ----------------------------------

- `extra-tight`: -0.02rem
- `tight`: -0.01rem
- `normal`: 0
- `wide`: 0.01rem
- `wider`: 0.02rem
- `widest`: 0.04rem

Example usage:
```html
<h2 class="tracking-tight">Tight letter spacing</h2>
<p class="tracking-wide">Wide letter spacing</p>
```

// ----------------------------------
// Line Width (Measure)
// ----------------------------------

- `extra-narrow`: 30ch
- `narrow`: 45ch
- `medium`: 60ch
- `wide`: 75ch
- `extra-wide`: 90ch

Example usage:
```html
<p class="max-w-medium">
  This paragraph has a maximum width of 60 characters for optimal readability.
</p>
```

// ====================================================================================
// Z-Index Scale
// ====================================================================================

EWDS provides a custom z-index scale:

- `z-0`: 0
- `z-10`: 10
- `z-20`: 20
- `z-30`: 30
- `z-40`: 40
- `z-50`: 50
- `z-60`: 60
- `z-70`: 70
- `z-80`: 80
- `z-90`: 90
- `z-100`: 100

Example usage:
```html
<div class="z-10">Slightly elevated element</div>
<div class="z-50">Modal overlay</div>
```

// ====================================================================================
// Container Sizes
// ====================================================================================

EWDS defines custom container sizes for different breakpoints:

- `xs`: 24rem (384px)
- `sm`: 32rem (512px)
- `md`: 48rem (768px)
- `lg`: 64rem (1024px)
- `xl`: 80rem (1280px)

The container is centered by default and has a padding of 1rem.

Example usage:
```html
<div class="container mx-auto">
  <!-- Centered container with responsive width -->
</div>
```

This documentation covers the main features and usage of the Elevate Web Design System with Tailwind CSS. Always refer to the specific configuration files for the most up-to-date values and options available in your project.