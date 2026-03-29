'use server';
/**
 * @fileOverview A Genkit flow for generating localized content variations for a landing page.
 *
 * - aiLocalizedContentGeneration - A function that generates localized content variations.
 * - LocalizedContentInput - The input type for the aiLocalizedContentGeneration function.
 * - LocalizedContentOutput - The return type for the aiLocalizedContentGeneration function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const LocalizedContentInputSchema = z.object({
  contentType: z
    .enum(['headline', 'call-to-action', 'benefit-statement'])
    .describe('The type of content to generate variations for (e.g., headline, call-to-action).'),
  originalText: z.string().describe('The original text to localize and vary.'),
  keywords: z
    .array(z.string())
    .describe('A list of keywords to naturally incorporate into the variations (e.g., "Panipat local shops").'),
  numVariations: z
    .number()
    .optional()
    .default(3)
    .describe('The number of variations to generate. Defaults to 3.'),
});
export type LocalizedContentInput = z.infer<typeof LocalizedContentInputSchema>;

const LocalizedContentOutputSchema = z.object({
  variations: z.array(z.string()).describe('An array of generated localized content variations.'),
});
export type LocalizedContentOutput = z.infer<typeof LocalizedContentOutputSchema>;

export async function aiLocalizedContentGeneration(input: LocalizedContentInput): Promise<LocalizedContentOutput> {
  return aiLocalizedContentGenerationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'localizedContentGenerationPrompt',
  input: {schema: LocalizedContentInputSchema},
  output: {schema: LocalizedContentOutputSchema},
  prompt: `You are an expert UI/UX designer and landing page copywriter specializing in mobile apps, with a deep understanding of the Indian market and "Hinglish" language nuances.

Your task is to generate {{{numVariations}}} diverse copy variations for a landing page {{{contentType}}}.
The goal is to make the content resonate strongly with the target Indian audience, improve conversion rates, and have a local 'Hinglish feel'.

Here is the original content:
```
{{{originalText}}}
```

Incorporate the following keywords naturally into the generated variations:
{{#each keywords}}
- {{{this}}}
{{/each}}

Ensure the output is a JSON array of strings under the key "variations", where each string is a unique copy variation. The output should strictly adhere to the JSON schema, do not include any extra text.`,
});

const aiLocalizedContentGenerationFlow = ai.defineFlow(
  {
    name: 'aiLocalizedContentGenerationFlow',
    inputSchema: LocalizedContentInputSchema,
    outputSchema: LocalizedContentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    if (!output) {
      throw new Error('Failed to generate localized content variations.');
    }
    return output;
  }
);
