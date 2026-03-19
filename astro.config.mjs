// Contém código gerado por IA
// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://vektordigital.com.br',
  i18n: {
    defaultLocale: "pt-br",
    locales: ["pt-br", "en-us", "es", "fr", "de"],
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
```