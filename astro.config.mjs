import { defineConfig } from 'astro/config';
import alpinejs from '@astrojs/alpinejs';
import tailwind from '@astrojs/tailwind';
import tailwindShorthandPlugin from './plugins/vite/vite-plugin-tailwind-shorthand';
import path from 'path';

// https://astro.build/config
export default defineConfig({
  srcDir: './compiled/src',
  publicDir: './elevate/public',
  integrations: [
    alpinejs(),
    tailwind({configFile: './elevate/config/tailwind.config.mjs'}),
  ],
  vite: {
    plugins: [
      tailwindShorthandPlugin({
        baseDir: 'elevate/templates',
        include: ['**/*.astro', '**/*.html'],
      }),
    ],
    logLevel: 'error', // Add this line to reduce Vite logging
  },
  server: {
    logLevel: 'error', // Add this line to reduce Astro server logging
  },
});