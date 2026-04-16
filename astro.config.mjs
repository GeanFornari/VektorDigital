// Contém código gerado por IA
// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://vektordigital.com.br',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
  integrations: [sitemap()],
  i18n: {
    defaultLocale: "pt",
    locales: ["pt", "en", "es", "fr", "de"],
    routing: {
      prefixDefaultLocale: true,
      fallbackType: "redirect",
    }
  },
  vite: {
    plugins: [tailwindcss()]
  }
});