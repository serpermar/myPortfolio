import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      year: z.number().int().min(2015).max(2100),
      role: z.enum(['Backend', 'Frontend', 'Full stack', 'Desktop', 'Móvil']),
      context: z.enum(['Profesional', 'Personal', 'Académico']),
      stack: z.array(z.string()).min(1),
      repo: z.string().url().optional(),
      demo: z.string().url().optional(),
      cover: image(),
      featured: z.boolean().default(false),
      order: z.number().default(0),
    }),
});

export const collections = { projects };
