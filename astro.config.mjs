import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://carinojake.github.io',
  base: process.env.ASTRO_BASE_URL || '/',
  integrations: [tailwind()],
});
