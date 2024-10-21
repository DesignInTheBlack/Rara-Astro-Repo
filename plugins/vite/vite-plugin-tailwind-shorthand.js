// vite-plugin-tailwind-shorthand.js

import { createFilter } from '@rollup/pluginutils';
import path from 'path';
import fs from 'fs-extra';

// ====================================================================================
// Control Variable to Enable/Disable HTML Formatting
// ====================================================================================

const enableHtmlFormatting = false; // Set to false to disable HTML formatting

// ====================================================================================
// Configuration: Tags for Formatting
// ====================================================================================

// Tags around which to add extra newlines
const tagsWithExtraNewlines = [
  'header',
  'footer',
  'section',
  'article',
  'nav',
  'aside',
  'main',
  'figure',
  'figcaption',
  'div',
];

// Tags whose text content should be kept inline if under character width limit
const inlineTags = [
  'li',
  'span',
  'a',
  'strong',
  'em',
  'b',
  'i',
  'u',
  'p',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
];

// Maximum length of text content to keep inline
const maxInlineTextLength = 80; // Adjust as needed

// ====================================================================================
// Transform the entire class attribute, handling breakpoints and utility expansions
// ====================================================================================

function transformClassAttribute(classValue) {
  const BREAKPOINTS = ['2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl','4xl','5xl'];
  const segments = classValue.split('/');
  let resultClasses = [];
  let currentPrefix = '';

  segments.forEach((segment) => {
    segment = segment.trim();
    if (segment === '') return;

    if (BREAKPOINTS.includes(segment)) {
      currentPrefix = `${segment}:`;
    } else {
      const classes = segment.split(/\s+/).flatMap((cls) => {
        if (cls === 'row') {
          return [`${currentPrefix}flex`, `${currentPrefix}flex-row`];
        } else if (cls === 'col') {
          return [`${currentPrefix}flex`, `${currentPrefix}flex-col`];
        } else if (cls.includes('-[')) {
          return expandUtility(cls, currentPrefix);
        } else {
          return `${currentPrefix}${cls}`;
        }
      });
      resultClasses.push(...classes.filter((cls) => cls !== ''));
    }
  });

  return resultClasses.join(' ');
}

// ====================================================================================
// Utility Expansion Functions
// ====================================================================================

// Update the expandUtility function to include the new border shorthand
function expandUtility(cls, prefix) {
  const [utility, valuesStr] = cls.split('-[');
  if (!valuesStr) return [`${prefix}${cls}`];
  const values = valuesStr.slice(0, -1).split(',').map((v) => v.trim());

  switch (utility) {
    case 'grid':
      return expandGridShorthand(values, prefix);
    case 'row':
    case 'col':
    case 'rowr':
    case 'colr':
      return expandFlexShorthand(utility, values, prefix);
    case 'item':
      return expandFlexItemShorthand(values, prefix);
    case 'mar':
    case 'pad':
      return expandSpacingShorthand(utility, values, prefix);
    case 'text':
      return expandTextShorthand(values, prefix);
    case 'span':
      return expandSpanShorthand(values, prefix);
    case 'border':
      return expandBorderShorthand(values, prefix);
    default:
      return [`${prefix}${cls}`];
  }
}


// Grid Shorthand Expansion
function expandGridShorthand(values, prefix) {
  const [columns, rows, gap, justify, align, flow] = values;
  const gridClasses = [`${prefix}grid`];

  if (columns && columns !== '_') gridClasses.push(`${prefix}grid-cols-${columns}`);
  if (rows && rows !== '_') gridClasses.push(`${prefix}grid-rows-${rows}`);
  if (gap && gap !== '_') gridClasses.push(`${prefix}gap-${gap}`);
  if (justify && justify !== '_') gridClasses.push(`${prefix}justify-${justify}`);
  if (align && align !== '_') gridClasses.push(`${prefix}items-${align}`);
  if (flow && flow !== '_') gridClasses.push(`${prefix}grid-flow-${flow}`);

  return gridClasses;
}

//Border Shorthand Expansion
function expandBorderShorthand(values, prefix) {
  const [direction, width, style, color] = values;
  const borderClasses = [];

  // Handle direction
  if (direction && direction !== '_') {
    if (['t', 'r', 'b', 'l', 'x', 'y'].includes(direction)) {
      borderClasses.push(`${prefix}border-${direction}`);
    } else {
      borderClasses.push(`${prefix}border`); // Default to all sides if invalid direction
    }
  } else {
    borderClasses.push(`${prefix}border`); // No direction specified, apply to all sides
  }

  // Handle width
  if (width && width !== '_') {
    borderClasses.push(`${prefix}border-${width}`);
  }

  // Handle style
  if (style && style !== '_') {
    borderClasses.push(`${prefix}border-${style}`);
  }

  // Handle color
  if (color && color !== '_') {
    borderClasses.push(`${prefix}border-${color}`);
  }

  return borderClasses;
}

// Flex Shorthand Expansion
function expandFlexShorthand(direction, values, prefix) {
  const [justify, align, wrap, content] = values;
  
  let flexClasses = [`${prefix}flex`];

  // Handle direction-specific logic for reverse flex directions
  if (direction === 'rowr') {
    flexClasses.push(`${prefix}flex-row-reverse`);
  } else if (direction === 'colr') {
    flexClasses.push(`${prefix}flex-col-reverse`);
  } else if (direction === 'row') {
    flexClasses.push(`${prefix}flex-row`);
  } else if (direction === 'col') {
    flexClasses.push(`${prefix}flex-col`);
  }

  // Add additional flex classes
  if (justify && justify !== '_') flexClasses.push(`${prefix}justify-${justify}`);
  if (align && align !== '_') flexClasses.push(`${prefix}items-${align}`);
  if (wrap && wrap !== '_') flexClasses.push(`${prefix}flex-${wrap}`);
  if (content && content !== '_') flexClasses.push(`${prefix}content-${content}`);

  return flexClasses;
}

// Flex Item Shorthand Expansion
function expandFlexItemShorthand(values, prefix) {
  const [grow, basis, shrink, align] = values;
  const itemClasses = [];

  if (grow && grow !== '_') itemClasses.push(`${prefix}flex-grow-${grow}`);
  if (basis && basis !== '_') itemClasses.push(`${prefix}basis-${basis}`);
  if (shrink && shrink !== '_') itemClasses.push(`${prefix}flex-shrink-${shrink}`);
  if (align && align !== '_') itemClasses.push(`${prefix}self-${align}`);

  return itemClasses;
}

//Grid Span Shorthand Expansion
function expandSpanShorthand(values, prefix) {
  const [columns, rows] = values;
  const spanClasses = [];

  if (columns && columns !== '_') {
    spanClasses.push(`${prefix}col-span-${columns}`);
  }

  if (rows && rows !== '_') {
    spanClasses.push(`${prefix}row-span-${rows}`);
  }

  return spanClasses;
}

// Spacing Shorthand Expansion
function expandSpacingShorthand(type, values, prefix) {
  const property = type === 'mar' ? 'm' : 'p';
  const directions = ['t', 'r', 'b', 'l'];
  const validValues = values.filter((value) => value !== '_');

  if (validValues.length === 0) {
    return [];
  } else if (validValues.length === 1) {
    return [`${prefix}${property}-${validValues[0]}`];
  } else if (validValues.length === 2) {
    return [
      `${prefix}${property}y-${validValues[0]}`,
      `${prefix}${property}x-${validValues[1]}`,
    ];
  } else if (validValues.length === 4) {
    return validValues.map((value, index) => `${prefix}${property}${directions[index]}-${value}`);
  }

  return [];
}

// Text Shorthand Expansion
function expandTextShorthand(values, prefix) {
  const [size, weight, family, height, align, spacing, color] = values;
  const textClasses = [];

  if (size && size !== '_') textClasses.push(`${prefix}text-${size}`);
  if (weight && weight !== '_') textClasses.push(`${prefix}font-${weight}`);
  if (family && family !== '_') textClasses.push(`${prefix}font-${family}`);
  if (height && height !== '_') textClasses.push(`${prefix}leading-${height}`);
  if (align && align !== '_') textClasses.push(`${prefix}text-${align}`);
  if (spacing && spacing !== '_') textClasses.push(`${prefix}tracking-${spacing}`);
  if (color && color !== '_') textClasses.push(`${prefix}text-${color}`);

  return textClasses;
}

// ====================================================================================
// Vite/Rollup Plugin with Formatting Enhancements
// ====================================================================================

export default function Elevate({
  include = ['**/*.astro', '**/*.html','**/*.js'],
  baseDir = 'templates',
} = {}) {
  // Resolve the base directory to an absolute path to ensure correct filtering
  const resolvedBaseDir = path.resolve(baseDir);


  // Create absolute filter patterns
  const filterPatterns = include.map((pattern) => path.join(resolvedBaseDir, pattern));
  const filter = createFilter(filterPatterns);

  return {
    name: 'tailwind-shorthand-transform',
    enforce: 'pre',

    configureServer(server) {
      server.watcher.add(`${baseDir}/**/*`);

      // Set up event listeners for file changes
      server.watcher.on('add', async (filePath) => {
        await processFile(filePath);
      });

      server.watcher.on('change', async (filePath) => {
        await processFile(filePath);
      });

      server.watcher.on('unlink', async (filePath) => {
        const relativePath = path.relative(resolvedBaseDir, filePath);
        const outputPath = path.join('compiled/src', relativePath);
        await fs.remove(outputPath);
        console.log(`Elevate: Removed output file: ${outputPath}`);
      });
    },
  };

  // Function to process a file: read, transform, write to 'src', and format original
  async function processFile(filePath) {
    const normalizedId = path.resolve(filePath);

    if (!filter(normalizedId)) {
      console.log(normalizedId)
      return;
    }

    try {
      // Read the original file content
      const code = await fs.readFile(filePath, 'utf8');

      // ============================
      // Step 1: Transform Class Attributes
      // ============================
      const classRegex = /class\s*=\s*["']([^"']*)["']/g;
      const transformedCode = code.replace(classRegex, (match, classAttribute) => {
        const transformedClasses = transformClassAttribute(classAttribute);
        return `class="${transformedClasses}"`;
      });

      // Determine the relative path inside baseDir
      const relativePath = path.relative(resolvedBaseDir, filePath);
      // Define the output path in the src directory
      const outputPath = path.join('compiled/src', relativePath);
      await fs.ensureDir(path.dirname(outputPath));
      await fs.writeFile(outputPath, transformedCode);
      console.log(`Elevate: Wrote transformed file to: ${outputPath}`);
      
    } catch (error) {
      console.error(`Elevate: Error processing file ${filePath}:`, error);
    }
  }
}