import { defineCollection, z } from 'astro:content';
import { docsSchema } from '@astrojs/starlight/schema';

const blog = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		published_at: z.coerce.date(),
	}),
});
export const collections = {
    blog,
    docs: defineCollection({ schema: docsSchema() }),
};
