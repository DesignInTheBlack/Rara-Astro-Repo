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
  output: 'hybrid', // Ensure you're handling SSR in Cloudflare runtime
  srcDir: './compiled/src', // Custom source directory

  integrations: [
    alpinejs(), // Alpine.js integration
    tailwind({ configFile: './elevate/config/tailwind.config.mjs' }), // Tailwind config
  ],

  vite: {
    resolve: {
      alias: {
        '@scripts': path.resolve(__dirname, 'compiled/src/js'), // Custom script alias
      },
    },
    plugins: [
      tailwindShorthandPlugin({
        baseDir: 'site',
        include: ['**/*.astro', '**/*.html', '**/*.js', '**/*.ts'], // Tailwind shorthand plugin
      }),
    ],
  },

  adapter: cloudflare(), // Deploy to Cloudflare Workers with SSR
});
