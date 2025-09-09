/**
 * @fileOverview An AI assistant flow that answers questions based on project documentation.
 *
 * - assistantFlow - A function that handles answering questions.
 * - AssistantInput - The input type for the assistantFlow function.
 * - AssistantOutput - The return type for the assistantFlow function.
 */
'use server';

import {ai} from '@/ai/genkit';
import {z} from 'zod';
import {
  documentationContext
} from './documentationContext';

const AssistantInputSchema = z.object({
  query: z.string().describe('The user\'s question about the documentation.'),
});
export type AssistantInput = z.infer<typeof AssistantInputSchema>;

const AssistantOutputSchema = z.object({
  answer: z.string().describe('The AI-generated answer to the user\'s question.'),
});
export type AssistantOutput = z.infer<typeof AssistantOutputSchema>;


const assistantPrompt = ai.definePrompt({
  name: 'assistantPrompt',
  input: {
    schema: AssistantInputSchema
  },
  output: {
    schema: AssistantOutputSchema
  },
  prompt: `You are a helpful AI assistant for the KeittWeb project. Your role is to answer user questions based *only* on the provided documentation context. Be concise and clear in your answers.

  If the answer is not found in the documentation, politely state that you don't have information on that topic. Do not invent answers.

  Documentation Context:
  ---
  ${documentationContext}
  ---

  User's Question: {{{query}}}
  `,
  config: {
    model: 'googleai/gemini-2.0-flash',
    temperature: 0.2,
  },
});

export async function getAssistantResponse(
  input: AssistantInput
): Promise < AssistantOutput > {
  const llmResponse = await assistantPrompt(input);
  return llmResponse.output !;
}