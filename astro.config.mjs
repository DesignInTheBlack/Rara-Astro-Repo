import { defineConfig } from 'astro/config';
import alpinejs from '@astrojs/alpinejs';
import tailwind from '@astrojs/tailwind';
import tailwindShorthandPlugin from './plugins/vite/vite-plugin-tailwind-shorthand';
import path from 'path';
import { fileURLToPath } from 'url';
import cloudflare from '@astrojs/cloudflare';

// Convert import.meta.url to __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
        events: 'events', // Alias for Node.js built-in "events"
        util: 'util/',    // Alias for Node.js built-in "util"
      },
    },
    ssr: {
      noExternal: ['nodemailer'], // Ensure Nodemailer is bundled for SSR
    },
    plugins: [
      tailwindShorthandPlugin({
        baseDir: 'site',
        include: ['**/*.astro', '**/*.html', '**/*.js', '**/*.ts'],
      }),
    ],
  },

  adapter: cloudflare(),

  envPrefix: ['EMAIL_', 'NODE_'], // Allow email-related env vars
});
