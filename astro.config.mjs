// Contém código gerado por IA
// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://vektordigital.com.br',
  output: 'hybrid',
  adapter: vercel(),
  integrations: [sitemap()],
  i18n: {
    defaultLocale: "pt",
    locales: ["pt", "en", "es", "fr", "de"],
  },
  vite: {
    plugins: [tailwindcss()]
  }
});