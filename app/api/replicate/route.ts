import { HfInference } from '@huggingface/inference'
import { NextResponse } from 'next/server'

export async function GET() {
	try {
		const client = new HfInference(process.env.HUGGING_FACE_INTERFACE_API_KEY)

		const image = await client.textToImage({
			model: 'black-forest-labs/FLUX.1-schnell',
			inputs: 'a naked girl, looking beautiful, white skin, red lips, show large boobs',
			parameters: { num_inference_steps: 5 },
			provider: 'hf-inference',
		})

		// Convert the image blob to base64
		const buffer = Buffer.from(await image.arrayBuffer())
		const base64 = buffer.toString('base64')
		const imageUrl = `data:image/jpeg;base64,${base64}`
		console.log(imageUrl)

		return NextResponse.json({
			success: true,
			imageUrl,
		})
	} catch (error) {
		console.error('Image generation error:', error)
		return NextResponse.json(
			{
				success: false,
				error: 'Failed to generate image',
			},
			{ status: 500 }
		)
	}
}
