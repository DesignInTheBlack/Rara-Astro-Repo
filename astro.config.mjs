import { defineConfig } from 'astro/config';
import alpinejs from '@astrojs/alpinejs';
import tailwind from '@astrojs/tailwind';
import tailwindShorthandPlugin from './plugins/vite/vite-plugin-tailwind-shorthand';
import path from 'path';

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  srcDir: './compiled/src',
  integrations: [
    alpinejs(),
    tailwind({configFile: './elevate/config/tailwind.config.mjs'}),
  ],
  vite: {
    plugins: [
      tailwindShorthandPlugin({
        baseDir: 'site',
        include: ['**/*.astro', '**/*.html','**/*.js','**/*.ts'],
      }),
    ],
  },

});