import { streamText } from 'ai'
import { createOpenAICompatible } from '@ai-sdk/openai-compatible'
import { NextResponse } from 'next/server'
import FemalemodelData from '@/utils/data/models'

export async function POST(req: Request) {
	try {
		const { message, model } = await req.json()
		const selectedModel = FemalemodelData.filter(id => id.slug === model)
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
		return result.toDataStreamResponse()
	} catch (error) {
		console.log(error)
		return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 })
	}
}
