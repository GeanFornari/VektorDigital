// Contém código gerado por IA
/**
 * Configuração das Content Collections do Astro v6+.
 * Define a collection 'legal' usando o glob() loader para os documentos legais
 * organizados em: src/content/legal/{app}/{document}/{lang}.md
 *
 * Funções/exports:
 *   - collections: objeto com todas as collections registradas no projeto
 */
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const legalCollection = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/legal',
  }),
  schema: z.object({}).optional(),
});

export const collections = {
  legal: legalCollection,
};
