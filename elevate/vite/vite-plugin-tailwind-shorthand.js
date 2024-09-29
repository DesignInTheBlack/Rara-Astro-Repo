import { createFilter } from '@rollup/pluginutils';
import path from 'path';
import fs from 'fs-extra';

// ====================================================================================
// Transform the entire class attribute, handling breakpoints and utility expansions
function transformClassAttribute(classValue) {
  const BREAKPOINTS = ['xs', 'sm', 'md', 'lg', 'xl'];
  const segments = classValue.split('/');
  let resultClasses = [];
  let currentPrefix = '';

  segments.forEach(segment => {
    segment = segment.trim();
    if (segment === '') return;

    if (BREAKPOINTS.includes(segment)) {
      currentPrefix = `${segment}:`;
    } else {
      const classes = segment.split(/\s+/).flatMap(cls => {
        if (cls.includes('-[')) {
          return expandUtility(cls, currentPrefix);
        } else {
          return `${currentPrefix}${cls}`;
        }
      });
      resultClasses.push(...classes.filter(cls => cls !== ''));
    }
  });

  return resultClasses.join(' ');
}

// ====================================================================================
// Utility Expansion
// ====================================================================================
// Expand a single utility shorthand into full Tailwind classes
function expandUtility(cls, prefix) {
  const [utility, valuesStr] = cls.split('-[');
  if (!valuesStr) return [`${prefix}${cls}`];
  const values = valuesStr.slice(0, -1).split(',').map(v => v.trim());

  switch (utility) {
    case 'grid':
      return expandGridShorthand(values, prefix);
    case 'row':
    case 'col':
      return expandFlexShorthand(utility, values, prefix);
    case 'item':
      return expandFlexItemShorthand(values, prefix);
    case 'margin':
    case 'pad':
      return expandSpacingShorthand(utility, values, prefix);
    case 'text':
      return expandTextShorthand(values, prefix);
    default:
      return [`${prefix}${cls}`];
  }
}

// ====================================================================================
// Grid Shorthand Expansion
// ====================================================================================
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

// ====================================================================================
// Flex Shorthand Expansion
// ====================================================================================
function expandFlexShorthand(direction, values, prefix) {
  const [justify, align, wrap, content] = values;
  const flexClasses = [`${prefix}flex`, `${prefix}flex-${direction}`];

  if (justify && justify !== '_') flexClasses.push(`${prefix}justify-${justify}`);
  if (align && align !== '_') flexClasses.push(`${prefix}items-${align}`);
  if (wrap && wrap !== '_') flexClasses.push(`${prefix}flex-${wrap}`);
  if (content && content !== '_') flexClasses.push(`${prefix}content-${content}`);

  return flexClasses;
}

// ====================================================================================
// Flex Item Shorthand Expansion
// ====================================================================================
function expandFlexItemShorthand(values, prefix) {
  const [grow, basis, shrink, align] = values;
  const itemClasses = [];

  if (grow && grow !== '_') itemClasses.push(`${prefix}flex-grow-${grow}`);
  if (basis && basis !== '_') itemClasses.push(`${prefix}flex-basis-${basis}`);
  if (shrink && shrink !== '_') itemClasses.push(`${prefix}flex-shrink-${shrink}`);
  if (align && align !== '_') itemClasses.push(`${prefix}self-${align}`);

  return itemClasses;
}

// ====================================================================================
// Spacing Shorthand Expansion
// ====================================================================================
function expandSpacingShorthand(type, values, prefix) {
  const property = type === 'margin' ? 'm' : 'p';
  const directions = ['l', 'r', 't', 'b'];
  const validValues = values.filter(value => value !== '_');

  if (validValues.length === 0) {
    return [];
  } else if (validValues.length === 1) {
    return [`${prefix}${property}-${validValues[0]}`];
  } else if (validValues.length === 2) {
    return [
      `${prefix}${property}x-${validValues[0]}`,
      `${prefix}${property}y-${validValues[1]}`
    ];
  } else if (validValues.length === 4) {
    return validValues.map((value, index) =>
      `${prefix}${property}${directions[index]}-${value}`
    );
  }

  return [];
}

// ====================================================================================
// Text Shorthand Expansion
// ====================================================================================
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
// Vite Plugin with File Name Influencing Output Directory
// ====================================================================================
export default function tailwindShorthandPlugin({ include = ['**/*.astro', '**/*.html'], baseDir = 'precompiled_src' } = {}) {
  // Resolve the base directory to an absolute path to ensure correct filtering
  const resolvedBaseDir = path.resolve(baseDir);
  console.log(`tailwindShorthandPlugin: Resolved baseDir to ${resolvedBaseDir}`);

  // Create absolute filter patterns
  const filterPatterns = include.map(pattern => path.join(resolvedBaseDir, pattern));
  const filter = createFilter(filterPatterns);

  return {
    name: 'tailwind-shorthand-transform',
    enforce: 'pre',

    configureServer(server) {
      console.log(`tailwindShorthandPlugin: Watching directory: ${baseDir}/**/*`);
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
        const outputPath = path.join('src', relativePath);
        await fs.remove(outputPath);
        console.log(`tailwindShorthandPlugin: Removed output file: ${outputPath}`);
      });
    },

    // Remove the transform hook as we're handling transformations via watchers
    // transform(code, id) { ... }

  };

  // Function to process a file: read, transform, write to 'src'
  async function processFile(filePath) {
    const normalizedId = path.resolve(filePath);
    console.log(`tailwindShorthandPlugin: Processing file: ${filePath}`);

    if (!filter(normalizedId)) {
      console.log(`tailwindShorthandPlugin: File ${filePath} does not match filter.`);
      return;
    }

    try {
      const code = await fs.readFile(filePath, 'utf8');
      const classRegex = /class\s*=\s*["']([^"']*)["']/g;
      const transformedCode = code.replace(classRegex, (match, classAttribute) => {
        const transformedClasses = transformClassAttribute(classAttribute);
        console.log(`tailwindShorthandPlugin: Transformed classes: "${transformedClasses}"`);
        return `class="${transformedClasses}"`;
      });

      // Determine the relative path inside baseDir
      const relativePath = path.relative(resolvedBaseDir, filePath);
      // Define the output path in the src directory
      const outputPath = path.join('src', relativePath);
      await fs.ensureDir(path.dirname(outputPath));
      await fs.writeFile(outputPath, transformedCode);
      console.log(`tailwindShorthandPlugin: Wrote transformed file to: ${outputPath}`);
    } catch (error) {
      console.error(`tailwindShorthandPlugin: Error processing file ${filePath}:`, error);
    }
  }
}
