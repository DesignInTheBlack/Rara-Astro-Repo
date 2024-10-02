// tailwindShorthandPlugin.js

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
  const BREAKPOINTS = ['xs', 'sm', 'md', 'lg', 'xl'];
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
        if (cls.includes('-[')) {
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

// Expand a single utility shorthand into full Tailwind classes
function expandUtility(cls, prefix) {
  const [utility, valuesStr] = cls.split('-[');
  if (!valuesStr) return [`${prefix}${cls}`];
  const values = valuesStr.slice(0, -1).split(',').map((v) => v.trim());

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

// Flex Shorthand Expansion
function expandFlexShorthand(direction, values, prefix) {
  const [justify, align, wrap, content] = values;
  const flexClasses = [`${prefix}flex`, `${prefix}flex-${direction}`];

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

// Spacing Shorthand Expansion
function expandSpacingShorthand(type, values, prefix) {
  const property = type === 'margin' ? 'm' : 'p';
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

export default function tailwindShorthandPlugin({
  include = ['**/*.astro', '**/*.html'],
  baseDir = 'precompiled_src',
} = {}) {
  // Resolve the base directory to an absolute path to ensure correct filtering
  const resolvedBaseDir = path.resolve(baseDir);
  console.log(`tailwindShorthandPlugin: Resolved baseDir to ${resolvedBaseDir}`);

  // Create absolute filter patterns
  const filterPatterns = include.map((pattern) => path.join(resolvedBaseDir, pattern));
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
  };

  // Function to process a file: read, transform, write to 'src', and format original
  async function processFile(filePath) {
    const normalizedId = path.resolve(filePath);
    console.log(`tailwindShorthandPlugin: Processing file: ${filePath}`);

    if (!filter(normalizedId)) {
      console.log(`tailwindShorthandPlugin: File ${filePath} does not match filter.`);
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

      // ============================
      // Step 2: Format the Original File (if enabled)
      // ============================
      if (enableHtmlFormatting) {
        // Strip existing formatting and minify the code
        const minifiedCode = minifyHtml(code);
        // Format the code with proper indentation and newlines
        const formattedCode = formatHtmlWithIndentation(minifiedCode);

        // Write the formatted code back to the original file
        await fs.writeFile(filePath, formattedCode);
        console.log(`tailwindShorthandPlugin: Formatted original file: ${filePath}`);
      }
    } catch (error) {
      console.error(`tailwindShorthandPlugin: Error processing file ${filePath}:`, error);
    }
  }

  function minifyHtml(html) {
    // Split the content into tokens (tags and text nodes)
    const tokens = html.match(/<!--[\s\S]*?-->|{[\s\S]*?}|<\/?[^>]+>|[^<>]+/g);

    // Process each token
    const minifiedTokens = tokens.map((token) => {
      if (token.startsWith('<!--') || (token.startsWith('{') && token.endsWith('}'))) {
        // Preserve comments and Astro expressions as is
        return token.trim();
      } else if (token.startsWith('<')) {
        // Tag
        return token.replace(/\s+/g, ' ').trim();
      } else {
        // Text node - trim leading and trailing whitespace
        return token.replace(/^\s+|\s+$/g, '');
      }
    });

    // Reconstruct the minified HTML
    return minifiedTokens.join('');
  }

  function formatHtmlWithIndentation(html) {
    // Step 1: Split frontmatter and HTML/Astro content
    const frontmatterMatch = html.match(/^---\s*\n[\s\S]*?\n---\s*\n?/);
    let frontmatter = '';
    let htmlContent = html;
  
    if (frontmatterMatch) {
      frontmatter = frontmatterMatch[0];
      htmlContent = html.slice(frontmatter.length);
      console.log(`tailwindShorthandPlugin: Frontmatter detected and preserved.`);
    }
  
    // List of void elements
    const voidElements = [
      'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input',
      'link', 'meta', 'param', 'source', 'track', 'wbr'
    ];
  
    // Step 2: Format the HTML content
    const indentChar = '  '; // Use two spaces for indentation; adjust as needed
    let indentLevel = 0;
    let formatted = '';
    const tokens = htmlContent.match(/<!--[\s\S]*?-->|{[\s\S]*?}|<\/?[^>]+>|[^<>]+/g);
  
    const tagStack = [];
  
    tokens.forEach((token) => {
      token = token.trim();
      if (!token) return;
  
      // Match different types of tokens
      const openingTagMatch = token.match(/^<([A-Za-z][A-Za-z0-9_-]*)(\s[^>]*)?>$/);
      const closingTagMatch = token.match(/^<\/([A-Za-z][A-Za-z0-9_-]*)>$/);
      const selfClosingTagMatch = token.match(/^<([A-Za-z][A-Za-z0-9_-]*)(\s[^>]*)?\/>$/);
  
      if (token.startsWith('<!--')) {
        // Comment
        formatted += indentChar.repeat(indentLevel) + token + '\n';
      } else if (selfClosingTagMatch) {
        // Self-closing tag
        formatted += indentChar.repeat(indentLevel) + token + '\n';
      } else if (openingTagMatch) {
        // Opening tag
        const tagName = openingTagMatch[1];
        const lowerTagName = tagName.toLowerCase();
        const isVoidElement = voidElements.includes(lowerTagName);
  
        // Add extra newline before opening tag if in tagsWithExtraNewlines
        if (tagsWithExtraNewlines.includes(lowerTagName)) {
          if (!formatted.endsWith('\n\n')) {
            formatted = formatted.trimEnd() + '\n\n';
          }
        }
  
        formatted += indentChar.repeat(indentLevel) + token;
  
        if (!isVoidElement) {
          indentLevel++;
          tagStack.push({ tagName, isInline: inlineTags.includes(lowerTagName) });
        }
  
        formatted += '\n';
      } else if (closingTagMatch) {
        // Closing tag
        indentLevel = Math.max(indentLevel - 1, 0);
        const { tagName, isInline } = tagStack.pop() || {};
  
        if (isInline) {
          // Inline element
          formatted = formatted.trimEnd();
          formatted += `</${tagName}>\n`;
        } else {
          formatted += indentChar.repeat(indentLevel) + `</${tagName}>\n`;
        }
  
        // Add extra newline after closing tag if in tagsWithExtraNewlines
        if (tagsWithExtraNewlines.includes(tagName.toLowerCase())) {
          formatted += '\n';
        }
      } else if (token.startsWith('{') && token.endsWith('}')) {
        // Astro expression
        formatted += indentChar.repeat(indentLevel) + token + '\n';
      } else {
        // Text node
        const parent = tagStack[tagStack.length - 1] || {};
        const isInlineParent = parent.isInline;
        token = token.replace(/^\s+|\s+$/g, '');
  
        if (token.length === 0) {
          // Skip empty text nodes
          return;
        }
  
        if (isInlineParent && token.length <= maxInlineTextLength) {
          // Keep inline with the opening tag
          formatted = formatted.trimEnd() + token;
        } else {
          // Place text on a new line
          formatted += indentChar.repeat(indentLevel) + token + '\n';
        }
      }
    });
  
    // Reduce multiple newlines to a maximum of two
    formatted = formatted.replace(/\n{3,}/g, '\n\n');
  
    return frontmatter + formatted.trimEnd() + '\n'; // Ensure single newline at the end
  }
  
  
}
