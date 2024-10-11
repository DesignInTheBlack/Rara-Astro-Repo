# Elevate Web Design System (EWDS)

EWDS is a custom Tailwind CSS configuration providing a consistent and efficient way to build web interfaces. It includes predefined settings for colors, typography, spacing, breakpoints, and custom shorthand formats for rapid development.

## Table of Contents

1. [Core Layout Philosophy](#core-layout-philosophy)
2. [Breakpoint System](#breakpoint-system)
3. [Shorthand Syntax](#shorthand-syntax)
4. [Spacing Scale](#spacing-scale)
5. [Color Palette](#color-palette)
6. [Typography](#typography)
7. [Z-Index Scale](#z-index-scale)
8. [Container Sizes](#container-sizes)
9. [Utility Extensions](#utility-extensions)
10. [Custom Plugins](#custom-plugins)

## Core Layout Philosophy

EWDS provides three key classes for structuring and spacing content:

1. `.space`: Creates distinct sections within a page.
2. `.content`: Wraps the main content within a section.
3. `.buffer`: Adds padding to the left and right of an element.

Example usage:

```html
<section class="space">
  <div class="content buffer">
    <!-- Main content with padding -->
  </div>
</section>
```

## Breakpoint System

EWDS defines ten custom breakpoints:

| Breakpoint | Size (rem) | Size (px) | Description    |
|------------|------------|-----------|----------------|
| `2xs`      | 20rem      | 320px     | Very Small Mobile |
| `xs`       | 30rem      | 480px     | Small Mobile   |
| `sm`       | 40rem      | 640px     | Large Mobile   |
| `md`       | 48rem      | 768px     | Tablet         |
| `lg`       | 64rem      | 1024px    | Small Desktop  |
| `xl`       | 80rem      | 1280px    | Medium Desktop |
| `2xl`      | 96rem      | 1536px    | Large Desktop  |
| `3xl`      | 120rem     | 1920px    | Full HD        |
| `4xl`      | 160rem     | 2560px    | 2K             |
| `5xl`      | 240rem     | 3840px    | 4K             |

### Breakpoint Shorthand Syntax

```
class class class /breakpoint/ class class class /breakpoint/ class class class
```

Example:
```html
<div class="text-[fluid-base,bold,_,_,_,_,purple] /sm/ text-[fluid-lg,_,_,_,center,_,_] /lg/ text-[fluid-xl,_,_,_,_,_,_]">
  <!-- Content -->
</div>
```

## Shorthand Syntax

EWDS provides several shorthand notations for common Tailwind utility combinations:

### Grid Shorthand

Format: `grid-[columns,rows,gap,justify,align,flow]`

Example:
```html
<div class="grid-[3,2,d4,center,stretch,row]">
  <!-- Grid content -->
</div>
```

### Flex Container Shorthand

Format: `direction-[justify,align,wrap,content]`

Example:
```html
<div class="row-[between,center,wrap,_]">
  <!-- Flex container content -->
</div>
```

### Flex Item Shorthand

Format: `item-[grow,basis,shrink,align]`

Example:
```html
<div class="item-[1,c5,0,center]">
  <!-- Flex item content -->
</div>
```

### Margin/Padding Shorthand

Format: `margin-[l,r,t,b]` or `pad-[l,r,t,b]`

Example:
```html
<div class="margin-[d4,d4,d4,d4] pad-[c2,c2,c2,c2]">
  <!-- Content with margin and padding -->
</div>
```

### Text Shorthand

Format: `text-[size,weight,family,height,align,spacing,color]`

Example:
```html
<p class="text-[fluid-lg,bold,sans,normal,center,wide,purple]">
  <!-- Text content -->
</p>
```

### Border Shorthand

Format: `border-[direction,width,style,color]`

Example:
```html
<div class="border-[l,2,solid,purple]">
  <!-- Content with left border -->
</div>
```

### Span Shorthand

Format: `span-[columns,rows]`

Example:
```html
<div class="span-[2,3]">
  <!-- Content spanning 2 columns and 3 rows -->
</div>
```

## Spacing Scale

EWDS uses a comprehensive spacing scale divided into three categories:

### Detail (d1 to d13)

For fine adjustments and component construction (0.25rem - 3.5rem).

### Content (c1 to c13)

For general page layout and larger component spacing (4rem - 20rem).

### Space (s1 to s13)

For major page sections and full-page layouts (24rem - 120rem).

Example usage:
```html
<div class="m-d4 p-c2 w-s6">
  <!-- Element with detail margin, content padding, and space width -->
</div>
```

## Color Palette

EWDS defines a custom color palette:

- `purple`: #9109E9
- `grey`: #EBEBEB
- `white`: #F7F5FB
- `black`: #0A141F
- `error`: #D81E5B
- `warn`: #FFD046

Example usage:
```html
<div class="bg-purple text-white">
  <!-- Purple background with white text -->
</div>
```

## Typography

### Font Sizes

EWDS provides both fluid and non-fluid typography scales:

#### Fluid Typography

- `fluid-xs` to `fluid-5xl`

#### Non-fluid Typography

- `tiny` to `h1`, plus `eyebrow`

### Line Heights

- `hug` to `extra-spacious`

### Letter Spacing

- `extra-tight` to `widest`

### Line Width (Measure)

- `extra-narrow` to `extra-wide`

### Font Families

- `sans`: Sk-Modernist
- `mono`: Sk-Modernist-Mono
- `serif`: PlayfairDisplay

Example usage:
```html
<p class="text-fluid-lg leading-normal tracking-wide font-sans">
  <!-- Styled paragraph -->
</p>
```

## Z-Index Scale

EWDS provides a custom z-index scale from `z-0` to `z-100`.

Example usage:
```html
<div class="z-50">Modal overlay</div>
```

## Container Sizes

EWDS defines custom container sizes for different breakpoints, from `2xs` (18rem) to `5xl` (228rem).

Example usage:
```html
<div class="container mx-auto">
  <!-- Centered container with responsive width -->
</div>
```

## Utility Extensions

### Custom Max Width Utilities

```html
<article class="max-w-prose">
  <!-- Article content with optimal reading width -->
</article>
```

## Custom Plugins

EWDS includes several custom plugins to enhance functionality:

### Layout Plugin

Adds custom components for layout: `.space`, `.content`, and `.buffer`.

### Line Width Plugin

Adds utilities for controlling line width.

### Baseline Grid Plugin

Adds a utility for displaying a baseline grid overlay.

---

For more detailed information on each feature, please refer to the full documentation.