// Contém código gerado por IA
// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://vektordigital.com.br',
  integrations: [sitemap()],
  i18n: {
    // TODO: mudar para en-us quando as linguagens estiverem prontas.
    defaultLocale: "pt-br",
    locales: ["pt-br", "en-us", "es", "fr", "de"],
  },
  vite: {
    plugins: [tailwindcss()]
  }
});