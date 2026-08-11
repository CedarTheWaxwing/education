import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    lessons: defineCollection({
      type: 'page',
      source: {
        include: 'courses/**/*.md',
        exclude: ['**/CURRICULUM.md'],
      },
      schema: z.object({
        lessonId: z.string(),
        order: z.number(),
        difficulty: z.enum(['beginner', 'intermediate', 'advanced']),
        starterCode: z.string(),
        expectedOutput: z.string(),
        objectives: z.array(z.string()),
        module: z.string(),
      }),
    }),
  },
})
