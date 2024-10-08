import { defineConfig } from 'astro/config';
import alpinejs from '@astrojs/alpinejs';
import tailwind from '@astrojs/tailwind';
import tailwindShorthandPlugin from './elevate/vite/vite-plugin-tailwind-shorthand';
import path from 'path';

// https://astro.build/config
export default defineConfig({
  integrations: [
    alpinejs(),
    tailwind(),
  ],
  vite: {
    plugins: [
      tailwindShorthandPlugin({
        baseDir: path.resolve('./precompiled_src'),
        include: ['**/*.astro', '**/*.html'],
      }),
    ],
    logLevel: 'error', // Add this line to reduce Vite logging
  },
  server: {
    logLevel: 'error', // Add this line to reduce Astro server logging
  },
});