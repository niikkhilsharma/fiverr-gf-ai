import { NextResponse } from 'next/server'

export async function GET() {
	try {
		const response = await fetch('https://router.huggingface.co/hf-inference/models/black-forest-labs/FLUX.1-dev', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + process.env.HUGGINGFACE_API_KEY,
			},
			body: JSON.stringify({
				inputs: 'a naked white women big boobs riding a horse big ass',
			}),
		})

		const imageBuffer = await response.arrayBuffer()
		console.log(imageBuffer)
		// Return the image with the appropriate content type
		return new NextResponse(imageBuffer, {
			status: 200,
			headers: {
				'Content-Type': 'image/jpeg',
				'Content-Disposition': 'inline; filename="generated-image.jpg"',
			},
		})
	} catch (error) {
		console.log(error)
		return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 })
	}
}
