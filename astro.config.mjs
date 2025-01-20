import { defineConfig } from 'astro/config';
import alpinejs from '@astrojs/alpinejs';
import path from 'path';
import { fileURLToPath } from 'url';
import cloudflare from '@astrojs/cloudflare';

// Convert import.meta.url to __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  output: 'hybrid', // Ensure you're handling SSR in Cloudflare runtime
  srcDir: './src', // Custom source directory

  integrations: [
    alpinejs(), // Alpine.js integration
  ],

  vite: {
    resolve: {
      alias: {
        '@scripts': path.resolve(__dirname, 'src/js'), // Custom script alias
      },
    },
  },

  adapter: cloudflare(), // Deploy to Cloudflare Workers with SSR
});
