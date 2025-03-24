// Improved stream parsing function

export const parseStreamChunk = (chunk: string) => {
	try {
		// Look for content in the format 0:"text"
		const regex = /0:"([^"]*)"/g
		let match
		let extractedText = ''

		while ((match = regex.exec(chunk)) !== null) {
			extractedText += match[1]
		}

		return extractedText
	} catch (error) {
		console.error('Error parsing stream chunk:', error)
		return ''
	}
}
