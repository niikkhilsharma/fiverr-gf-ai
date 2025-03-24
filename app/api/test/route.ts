import { imageGenertionCheckShema, imageDescriptionSchema } from '@/lib/langchain/schema'
import { ChatPromptTemplate } from '@langchain/core/prompts'
import { ChatOpenAI } from '@langchain/openai'
import { NextResponse } from 'next/server'
import { streamText } from 'ai'
import { createOpenAICompatible } from '@ai-sdk/openai-compatible'
import FemalemodelData from '@/utils/data/models'

export const maxDuration = 60

// Model for detecting if user wants to generate an image
const llm = new ChatOpenAI({
	model: 'gpt-4o-mini',
	temperature: 0,
})

export async function POST(request: Request) {
	try {
		const { message, modelSlug } = await request.json()

		// Check if the user wants to generate an image
		const shouldGenerateImage = await generateImageCheck(message)

		if (shouldGenerateImage) {
			const imageDescription = await parseUserImageMessage(message)
			const finalDescription = imageDescription || message
			return await generateImageResponse({ message: finalDescription })
		} else {
			// Generate text response
			return await generateTextResponse({ message, modelSlug })
		}
	} catch (error) {
		console.error('Error processing request:', error)
		return NextResponse.json(
			{
				message: 'Internal Server Error',
				isImage: false,
			},
			{ status: 500 }
		)
	}
}

// Function to check if the user wants to generate an image
async function generateImageCheck(prompt: string) {
	const promptTemplate = ChatPromptTemplate.fromMessages([
		[
			'system',
			`You are an expert extraction algorithm.
       Only extract relevant information from the text.
       If you do not know the value of an attribute asked to extract,
       return null for the attribute's value. If user is asking for sending image then remember he want's to generate a image.`,
		],
		['human', '{text}'],
	])

	const structured_llm = llm.withStructuredOutput(imageGenertionCheckShema, { name: 'imageGenerationCheck' })
	const promptResponse = await promptTemplate.invoke({
		text: prompt,
	})

	const shouldGenerateImage = (await structured_llm.invoke(promptResponse)).generateImage
	console.log('Should generate image:', shouldGenerateImage)
	return shouldGenerateImage
}

// Function to extract image description from user message
async function parseUserImageMessage(message: string) {
	const promptTemplate = ChatPromptTemplate.fromMessages([
		[
			'system',
			`You are an expert extraction algorithm.
       Only extract relevant information from the text.
       If you do not know what description of image user
       wants to generate then return the original message.
       But you cannot return null.`,
		],
		['human', '{text}'],
	])

	const structured_llm = llm.withStructuredOutput(imageDescriptionSchema, { name: 'imageDescription' })
	const promptResponse = await promptTemplate.invoke({
		text: message,
	})

	const imageDescription = (await structured_llm.invoke(promptResponse)).imageDescription
	console.log('Image description:', imageDescription)
	return imageDescription
}

// Function to provide text response
async function generateTextResponse({ message, modelSlug }: { message: string; modelSlug: string }) {
	const selectedModel = FemalemodelData.find(model => model.slug === modelSlug)

	const result = streamText({
		model: createOpenAICompatible({
			baseURL: 'https://router.huggingface.co/novita',
			apiKey: process.env.HUGGINGFACE_API_KEY,
			name: 'teknium',
		}).chatModel('teknium/openhermes-2.5-mistral-7b'),
		prompt: message,
		system: `You are my sexy girlfriend. You are a sexy, hot, and horny girlfriend. And these are your properties ${JSON.stringify(
			selectedModel
		)}`,
	})

	// Explicitly indicate this is not an image response
	const responseStream = result.toDataStreamResponse()

	// Set a custom header to indicate this is not an image
	responseStream.headers.set('X-Is-Image', 'false')

	return responseStream
}

// Function to generate image response
async function generateImageResponse({ message }: { message: string }) {
	try {
		const response = await fetch('https://router.huggingface.co/hf-inference/models/black-forest-labs/FLUX.1-dev', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + process.env.HUGGINGFACE_API_KEY,
			},
			body: JSON.stringify({
				inputs: message,
			}),
		})

		if (!response.ok) {
			throw new Error(`Image generation failed with status: ${response.status}`)
		}

		// Check if the response is actually an image
		const imageBuffer = await response.arrayBuffer()

		return NextResponse.json(
			{
				isImage: true,
				imageData: Buffer.from(imageBuffer).toString('base64'),
				filename: 'generated-image.jpg',
			},
			{
				status: 200,
				headers: {
					'Cache-Control': 'no-cache, no-store, must-revalidate',
					Pragma: 'no-cache',
					'X-Is-Image': 'true',
					Expires: '0',
				},
			}
		)
	} catch (error) {
		console.error('Error generating image:', error)
		return NextResponse.json(
			{
				isImage: false,
				message: 'Failed to generate image due to an error.',
			},
			{ status: 500 }
		)
	}
}
