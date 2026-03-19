// Contém código gerado por IA
// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://vektordigital.com.br',
  vite: {
    plugins: [tailwindcss()]
  }
});