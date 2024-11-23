import { defineConfig } from 'astro/config';
import alpinejs from '@astrojs/alpinejs';
import tailwind from '@astrojs/tailwind';
import tailwindShorthandPlugin from './plugins/vite/vite-plugin-tailwind-shorthand';
import path from 'path';
import { fileURLToPath } from 'url';
import cloudflare from '@astrojs/cloudflare';
import events from 'events'; // Added for Node.js polyfill

// Convert import.meta.url to __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Astro configuration
export default defineConfig({
  output: 'hybrid',
  srcDir: './compiled/src',

  integrations: [
    alpinejs(),
    tailwind({ configFile: './elevate/config/tailwind.config.mjs' }),
  ],

  vite: {
    resolve: {
      alias: {
        '@scripts': path.resolve(__dirname, 'compiled/src/js'),
        events: 'events', // Add Node.js polyfill for "events"
      },
    },
    ssr: {
      noExternal: ['nodemailer'], // Ensure Nodemailer is bundled in SSR
    },
    plugins: [
      tailwindShorthandPlugin({
        baseDir: 'site',
        include: ['**/*.astro', '**/*.html', '**/*.js', '**/*.ts'],
      }),
    ],
  },

  adapter: cloudflare(),

  // Ensure Node.js environment variables are accessible for email transport configuration
  envPrefix: ['EMAIL_', 'NODE_'], // Allow access to specific environment variables
});
