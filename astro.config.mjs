import { defineConfig } from 'astro/config';
import alpinejs from '@astrojs/alpinejs';
import tailwind from '@astrojs/tailwind';
import tailwindShorthandPlugin from './elevate/vite/vite-plugin-tailwind-shorthand';
import path from 'path';  // Import path for resolving directories

// https://astro.build/config
export default defineConfig({
  integrations: [
    alpinejs(),
    tailwind(),
  ],
  vite: {
    plugins: [
      tailwindShorthandPlugin({
        baseDir: path.resolve('./precompiled_src'),  // Ensures the path is absolute
        include: ['**/*.astro', '**/*.html'],         // Explicitly define include patterns
      }),
    ],
  },
});
