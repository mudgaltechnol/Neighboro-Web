'use server';
/**
 * @fileOverview An AI tool to suggest optimized meta titles, descriptions, and relevant keyword tags for the landing page.
 *
 * - aiSeoMetadataSuggestion - A function that generates SEO metadata suggestions.
 * - AiSeoMetadataSuggestionInput - The input type for the aiSeoMetadataSuggestion function.
 * - AiSeoMetadataSuggestionOutput - The return type for the aiSeoMetadataSuggestion function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const AiSeoMetadataSuggestionInputSchema = z.object({
  customerAppDescription: z.string().describe('The full description of the customer app (Neighboro).'),
  partnerAppDescription: z.string().describe('The full description of the partner app (Neighboro Partner).'),
  targetAudienceDetails: z.string().describe('Details about the target audience, including locations and user demographics.'),
  websitePurpose: z.string().describe('The overall purpose and goal of the landing page.'),
});
export type AiSeoMetadataSuggestionInput = z.infer<typeof AiSeoMetadataSuggestionInputSchema>;

const AiSeoMetadataSuggestionOutputSchema = z.object({
  metaTitle: z.string().describe('An optimized meta title for the landing page (max 60 characters).'),
  metaDescription: z.string().describe('An optimized meta description for the landing page (max 160 characters).'),
  keywords: z.array(z.string()).describe('A list of relevant keyword tags for SEO.'),
});
export type AiSeoMetadataSuggestionOutput = z.infer<typeof AiSeoMetadataSuggestionOutputSchema>;

export async function aiSeoMetadataSuggestion(input: AiSeoMetadataSuggestionInput): Promise<AiSeoMetadataSuggestionOutput> {
  return aiSeoMetadataSuggestionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiSeoMetadataSuggestionPrompt',
  input: { schema: AiSeoMetadataSuggestionInputSchema },
  output: { schema: AiSeoMetadataSuggestionOutputSchema },
  prompt: `You are an expert SEO specialist and marketing manager. Your goal is to generate optimized meta titles, descriptions, and relevant keyword tags for a landing page that promotes two Android apps.

The landing page's purpose is: {{{websitePurpose}}}

Here are the details for the customer app (Neighboro):
Customer App Description: {{{customerAppDescription}}}

Here are the details for the partner app (Neighboro Partner):
Partner App Description: {{{partnerAppDescription}}}

Target Audience Details: {{{targetAudienceDetails}}}

Based on the provided information, generate an SEO-optimized meta title (under 60 characters), a meta description (under 160 characters), and a list of relevant keyword tags that are highly relevant to hyper-local discovery, local businesses, and the specified regions (like Panipat, Haryana, Delhi NCR). Incorporate keywords like "local shops near me", "nearby offers", "shop visibility", "hyperlocal deals", "Panipat local shops". Focus on improving search engine rankings and attracting organic traffic.

Output your response in JSON format according to the provided schema.
`,
});

const aiSeoMetadataSuggestionFlow = ai.defineFlow(
  {
    name: 'aiSeoMetadataSuggestionFlow',
    inputSchema: AiSeoMetadataSuggestionInputSchema,
    outputSchema: AiSeoMetadataSuggestionOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
