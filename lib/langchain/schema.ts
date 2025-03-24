import { z } from 'zod'

export const imageGenertionCheckShema = z.object({
	generateImage: z.boolean().nullish().describe('Whether to generate an image'),
})

export const imageDescriptionSchema = z.object({
	imageDescription: z.string().describe('the description of image user wants to generate'),
})
