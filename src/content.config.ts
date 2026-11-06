import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string().max(220, 'Resume el proyecto en 1–2 frases.'),
    role: z.string(),
    year: z.number().int().min(2018).max(2100),
    context: z.enum(['Personal', 'Académico', 'Profesional']),
    stack: z.array(z.string()).min(1),

    demo: z.string().url().optional(),
    repo: z.string().url().optional(),

    cover: z.string().optional(),
    gallery: z
      .array(z.object({ src: z.string(), alt: z.string().default('') }))
      .optional(),

    featured: z.boolean().default(false),
    order: z.number().default(0),
    highlights: z.array(z.string()).optional(),

    description: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects };