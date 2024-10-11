# Elevate Web Design System (EWDS)

## Table of Contents

1. [Introduction](#introduction)
2. [Usage](#usage)
3. [Core Concepts](#core-concepts)
   - [Core Layout Philosophy](#core-layout-philosophy)
   - [Breakpoint System](#breakpoint-system)
   - [Spacing Scale](#spacing-scale)
   - [Color Palette](#color-palette)
   - [Typography](#typography)
     - [Font Sizes](#font-sizes)
       - [Fluid Typography](#fluid-typography)
       - [Non-fluid Typography](#non-fluid-typography)
     - [Line Heights](#line-heights)
     - [Letter Spacing](#letter-spacing)
     - [Line Width (Measure)](#line-width-measure)
     - [Font Families](#font-families)
4. [Z-Index Scale](#z-index-scale)
5. [Shorthand Syntax](#shorthand-syntax)
   - [Breakpoint Shorthand](#breakpoint-shorthand)
   - [Grid Shorthand](#grid-shorthand)
   - [Flex Container Shorthand](#flex-container-shorthand)
   - [Flex Item Shorthand](#flex-item-shorthand)
   - [Margin/Padding Shorthand](#margin-padding-shorthand)
   - [Text Shorthand](#text-shorthand)
   - [Border Shorthand](#border-shorthand)
   - [Span Shorthand](#span-shorthand)
6. [Utility Extensions](#utility-extensions)
   - [Baseline Grid Plugin](#baseline-grid-plugin)
7. [Custom Plugins](#custom-plugins)

## Introduction

The Elevate Web Design System (EWDS) is an opinionated design system implemented via Tailwind CSS and Astro JS that provides a consistent and efficient way to build attractive and proportional websites. It includes predefined settings for colors, typography, spacing, breakpoints, and custom shorthand formats for rapid development as well as a series of easily modifiable configuration files for implementing your preferred fonts, colors, etc. Please note that this system is a work in progress and as such, is subject to regular changes, revisions, and improvements.

## Usage

The primary folders of concern are:

`elevate` - (for configuring the EWDS design system)

`public` - (for files you don't want Astro JS to process, such as specific images or fonts)

`templates` - (for your Astro JS components, pages, and layouts)

## Core Concepts

### Core Layout Philosophy

WIP

### Breakpoint System

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

* Please note: if you expand upon or rename any of these, you must adjust the Vite plugin accordingly (plugins/vite/vite-plugin-tailwind-shorthand).

### Spacing Scale

EWDS uses a comprehensive and opinionated spacing scale divided into three categories:

#### Detail (d1 to d13)

For fine adjustments and component construction (0.25rem - 3.5rem):

| Class | Size (rem) | Size (px) |
|-------|------------|-----------|
| `d1`  | 0.25rem    | 4px       |
| `d2`  | 0.5rem     | 8px       |
| `d3`  | 0.75rem    | 12px      |
| `d4`  | 1rem       | 16px      |
| `d5`  | 1.25rem    | 20px      |
| `d6`  | 1.5rem     | 24px      |
| `d7`  | 1.75rem    | 28px      |
| `d8`  | 2rem       | 32px      |
| `d9`  | 2.25rem    | 36px      |
| `d10` | 2.5rem     | 40px      |
| `d11` | 2.75rem    | 44px      |
| `d12` | 3rem       | 48px      |
| `d13` | 3.5rem     | 56px      |

#### Content (c1 to c13)

For general page layout and larger component spacing (4rem - 20rem):

| Class | Size (rem) | Size (px) |
|-------|------------|-----------|
| `c1`  | 4rem       | 64px      |
| `c2`  | 4.5rem     | 72px      |
| `c3`  | 5rem       | 80px      |
| `c4`  | 5.5rem     | 88px      |
| `c5`  | 6rem       | 96px      |
| `c6`  | 7rem       | 112px     |
| `c7`  | 7.5rem     | 120px     |
| `c8`  | 8rem       | 128px     |
| `c9`  | 9rem       | 144px     |
| `c10` | 10rem      | 160px     |
| `c11` | 12rem      | 192px     |
| `c12` | 16rem      | 256px     |
| `c13` | 20rem      | 320px     |

#### Space (s1 to s13)

For major page sections and full-page layouts (24rem - 120rem):

| Class | Size (rem) | Size (px) |
|-------|------------|-----------|
| `s1`  | 24rem      | 384px     |
| `s2`  | 28rem      | 448px     |
| `s3`  | 32rem      | 512px     |
| `s4`  | 36rem      | 576px     |
| `s5`  | 40rem      | 640px     |
| `s6`  | 48rem      | 768px     |
| `s7`  | 56rem      | 896px     |
| `s8`  | 60rem      | 960px     |
| `s9`  | 64rem      | 1024px    |
| `s10` | 72rem      | 1152px    |
| `s11` | 80rem      | 1280px    |
| `s12` | 90rem      | 1440px    |
| `s13` | 120rem     | 1920px    |

### Color Palette

EWDS defines by default a custom color palette:

| Color    | Hex Code |
|----------|----------|
| `purple` | #9109E9  |
| `grey`   | #EBEBEB  |
| `white`  | #F7F5FB  |
| `black`  | #0A141F  |
| `error`  | #D81E5B  |
| `warn`   | #FFD046  |

### Typography

#### Font Sizes

##### Fluid Typography

| Class        | Size                                            |
|--------------|--------------------------------------------------|
| `fluid-xs`   | clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)        |
| `fluid-sm`   | clamp(0.875rem, 0.8rem + 0.375vw, 1rem)          |
| `fluid-base` | clamp(1rem, 0.9rem + 0.5vw, 1.125rem)            |
| `fluid-lg`   | clamp(1.125rem, 1rem + 0.625vw, 1.25rem)         |
| `fluid-xl`   | clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)          |
| `fluid-2xl`  | clamp(1.5rem, 1.3rem + 1vw, 1.875rem)            |
| `fluid-3xl`  | clamp(1.875rem, 1.6rem + 1.375vw, 2.25rem)       |
| `fluid-4xl`  | clamp(2.25rem, 1.9rem + 1.75vw, 3rem)            |
| `fluid-5xl`  | clamp(3rem, 2.5rem + 2.5vw, 4rem)                |

##### Non-fluid Typography

| Class     | Size           | Size (px) |
|-----------|----------------|-----------|
| `tiny`    | 0.533rem       | 8.53px    |
| `small`   | 0.711rem       | 11.38px   |
| `base`    | 1rem           | 16px      |
| `h6`      | 1.125rem       | 18px      |
| `h5`      | 1.5rem         | 24px      |
| `h4`      | 2.25rem        | 36px      |
| `h3`      | 3.375rem       | 54px      |
| `h2`      | 5.062rem       | 81px      |
| `h1`      | 7.594rem       | 121.5px   |
| `eyebrow` | 0.583rem       | 9.33px    |

#### Line Heights

| Class            | Value |
|------------------|-------|
| `hug`            | 1     |
| `tight`          | 1.2   |
| `snug`           | 1.3   |
| `normal`         | 1.4   |
| `relaxed`        | 1.5   |
| `loose`          | 1.6   |
| `spacious`       | 1.7   |
| `extra-spacious` | 1.8   |

#### Letter Spacing

| Class         | Value    |
|---------------|----------|
| `extra-tight` | -0.02rem |
| `tight`       | -0.01rem |
| `normal`      | 0        |
| `wide`        | 0.01rem  |
| `wider`       | 0.02rem  |
| `widest`      | 0.04rem  |

#### Line Width (Measure)

| Class          | Value |
|----------------|-------|
| `extra-narrow` | 30ch  |
| `narrow`       | 45ch  |
| `medium`       | 60ch  |
| `wide`         | 75ch  |
| `extra-wide`   | 90ch  |

#### Font Families

| Class   | Font Stack                |
|---------|---------------------------|
| `sans`  | Sk-Modernist, sans-serif  |
| `mono`  | Sk-Modernist-Mono, monospace |
| `serif` | PlayfairDisplay, serif    |

## Z-Index Scale

EWDS provides a custom z-index scale:

| Class    | Value |
|----------|-------|
| `z-0`    | 0     |
| `z-10`   | 10    |
| `z-20`   | 20    |
| `z-30`   | 30    |
| `z-40`   | 40    |
| `z-50`   | 50    |
| `z-60`   | 60    |
| `z-70`   | 70    |
| `z-80`   | 80    |
| `z-90`   | 90    |
| `z-100`  | 100   |

## Shorthand Syntax

### Breakpoint Shorthand

The breakpoint shorthand syntax allows you to specify different classes for different breakpoints using a more concise, mobile-first notation.

```
class class class /breakpoint/ class class class /breakpoint/ class class class
```

Example:

```html
<div class="text-[fluid-base,bold,_,_,_,_,purple] /sm/ text-[fluid-lg,_,_,_,center,_,_] /lg/ text-[fluid-xl,_,_,_,_,_,_]">
  <!-- Content -->
</div>
```

### Grid Shorthand

Format: `grid-[columns,rows,gap,justify,align,flow]`

| Slot      | Values |
|-----------|--------|
| columns   | 1-12, or Tailwind's grid-cols-* values |
| rows      | 1-6, or Tailwind's grid-rows-* values |
| gap       | [Spacing Scale](#spacing-scale) |
| justify   | start, end, center, between, around, evenly |
| align     | start, end, center, stretch, baseline |
| flow      | row, col, row-dense, col-dense |

Example:
```html
<div class="grid-[3,2,d4,center,stretch,row]">
  <!-- Grid content -->
</div>
```

### Flex Container Shorthand

Format: `direction-[justify,align,wrap,content]`

| Slot      | Values |
|-----------|--------|
| direction | row, col, rowr (row-reverse), colr (column-reverse) |
| justify   | start, end, center, between, around, evenly |
| align     | start, end, center, stretch, baseline |
| wrap      | wrap, nowrap, wrap-reverse |
| content   | start, end, center, between, around, evenly |

Example:
```html
<div class="rowr-[between,center,wrap,_]">
  <!-- Flex container content -->
</div>
```

### Flex Item Shorthand

Format: `item-[grow,basis,shrink,align]`

| Slot   | Values |
|--------|--------|
| grow   | 0, 1, Tailwind's flex-grow-* values |
| basis  | 0, 1, 1/2, 1/3, 2/3, 1/4, 2/4, 3/4, 1/5, 2/5, 3/5, 4/5, d1-d13, c1-c13, s1-s13 |
| shrink | 0, 1, Tailwind's flex-shrink-* values |
| align  | auto, start, end, center, stretch, baseline |

Example:
```html
<div class="item-[1,c5,0,center]">
  <!-- Flex item content -->
</div>
```

### Margin/Padding Shorthand {#margin-padding-shorthand}

Format: `margin-[l,r,t,b]` or `pad-[l,r,t,b]`

| Slot | Values |
|------|--------|
| l    | d1-d13, c1-c13, s1-s13 (see [Spacing Scale](#spacing-scale)) |
| r    | d1-d13, c1-c13, s1-s13 |
| t    | d1-d13, c1-c13, s1-s13 |
| b    | d1-d13, c1-c13, s1-s13 |

Example:
```html
<div class="margin-[d4,d4,d4,d4] pad-[c2,c2,c2,c2]">
  <!-- Content with margin and padding -->
</div>
```
* Margin to be replaced with `mar` in a near future revision.

### Text Shorthand

Format: `text-[size,weight,family,height,align,spacing,color]`

| Slot    | Values |
|---------|--------|
| size    | fluid-xs, fluid-sm, fluid-base, fluid-lg, fluid-xl, fluid-2xl, fluid-3xl, fluid-4xl, fluid-5xl, tiny, small, base, h6, h5, h4, h3, h2, h1, eyebrow |
| weight  | thin, extralight, light, normal, medium, semibold, bold, extrabold, black |
| family  | sans, serif, mono |
| height  | tight, snug, normal, relaxed, loose, spacious, extra-spacious |
| align   | left, center, right, justify |
| spacing | extra-tight, tight, normal, wide, wider, widest |
| color   | purple, grey, white, black, error, warn |

Example:
```html
<p class="text-[fluid-lg,bold,sans,normal,center,wide,purple]">
  <!-- Text content -->
</p>
```

### Border Shorthand

Format: `border-[direction,width,style,color]`

| Slot      | Values |
|-----------|--------|
| direction | t (top), r (right), b (bottom), l (left), x (horizontal), y (vertical), or omit for all sides |
| width     | 0, 2, 4, 8 (Tailwind's border-width values) |
| style     | solid, dashed, dotted, double, none |
| color     | purple, grey, white, black, error, warn |

Example:
```html
<div class="border-[l,2,solid,purple]">
  <!-- Content with left border -->
</div>
```

### Span Shorthand

Format: `span-[columns,rows]`

| Slot    | Values |
|---------|--------|
| columns | 1-12   |
| rows    | 1-6    |

Example:
```html
<div class="span-[2,3]">
  <!-- Content spanning 2 columns and 3 rows -->
</div>
```

## Utility Extensions

### Baseline Grid Plugin

Adds a utility for displaying a baseline grid overlay:

```javascript
'.baseline-grid': {
  backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 1px, transparent 1px)',
  backgroundSize: '100% 0.25rem',
}
```

## Custom Plugins

WIP
