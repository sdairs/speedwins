import { z, defineCollection } from 'astro:content';

const toolSchema = z.object({
    name: z.string(),
    logo: z.string().nullable(),
    url: z.string(),
    pros: z.array(z.string()),
    cons: z.array(z.string()),
    foss: z.boolean()
})

const toolsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        tools: z.array(toolSchema),
    }),
});


export const collections = {
    'tools': toolsCollection,
};