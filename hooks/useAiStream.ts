import { useState, useCallback } from 'react'
import { parseStreamChunk } from '@/utils/streamparser'
import { ChatMessageType } from '@/app/chat/chat'

export function useAiStream({ api, modelSlug }: { api: string; modelSlug: string }) {
	const [isStreaming, setIsStreaming] = useState(false)
	const [isError, setIsError] = useState(false)
	const [messages, setMessages] = useState<ChatMessageType[]>([
		{
			id: 0,
			role: 'bot',
			isImage: false,
			content: 'Hello, darling. I am your AI girlfriend. How can I help you today?',
			createdAt: '12:00am',
		},
	])

	const currentTime = () => {
		const now = new Date()
		let hours = now.getHours()
		const minutes = now.getMinutes().toString().padStart(2, '0')
		const ampm = hours >= 12 ? 'pm' : 'am'
		hours = hours % 12
		hours = hours ? hours : 12
		return `${hours}:${minutes}${ampm}`
	}

	const sendMessage = useCallback(
		async (inputMessage: string) => {
			if (!inputMessage.trim()) return

			// Create user message
			const userMessage = {
				id: messages.length,
				isImage: false,
				role: 'user',
				content: inputMessage,
				createdAt: currentTime(),
			}

			// Add user message to state
			setMessages(prev => [...prev, userMessage])

			// Create bot message ID for the upcoming response
			const botMessageId = messages.length + 1

			// Add empty bot message that will be streamed into
			setMessages(prev => [
				...prev,
				{
					id: botMessageId,
					role: 'bot',
					isImage: false,
					content: '',
					createdAt: currentTime(),
				},
			])

			setIsStreaming(true)
			setIsError(false)

			try {
				const response = await fetch(api, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						message: inputMessage,
						modelSlug,
					}),
				})

				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`)
				}

				// Check if the response is an image from the X-Is-Image header
				const isImageResponse = response.headers.get('X-Is-Image') === 'true'

				if (isImageResponse) {
					// For image responses, get the JSON data containing image information
					const imageData = await response.json()

					if (imageData.isImage && imageData.imageData) {
						// Create a data URL from the base64 encoded image
						const imageUrl = `data:image/jpeg;base64,${imageData.imageData}`

						// Update the message with the image
						setMessages(prev =>
							prev.map(msg =>
								msg.id === botMessageId
									? {
											...msg,
											isImage: true,
											imageUrl,
											content: 'Generated image', // Optional caption or description
									  }
									: msg
							)
						)
					} else {
						// Handle case where image data is missing
						setMessages(prev =>
							prev.map(msg =>
								msg.id === botMessageId ? { ...msg, content: imageData.message || 'Failed to generate image.' } : msg
							)
						)
					}
				} else {
					// Handle text streaming response
					const reader = response.body?.getReader()
					let accumulatedText = ''

					if (reader) {
						while (true) {
							const { value, done } = await reader.read()

							if (done) break

							// Convert the Uint8Array to text
							const chunk = new TextDecoder().decode(value)
							const extractedText = parseStreamChunk(chunk)

							if (extractedText) {
								accumulatedText += extractedText

								// Update the bot message with the accumulated text
								setMessages(prev => prev.map(msg => (msg.id === botMessageId ? { ...msg, content: accumulatedText } : msg)))
							}
						}
					}
				}
			} catch (error) {
				console.error('Error sending message:', error)
				setIsError(true)

				// Update the bot message with an error
				setMessages(prev =>
					prev.map(msg =>
						msg.id === botMessageId ? { ...msg, content: 'Sorry, I encountered an error. Please try again.' } : msg
					)
				)
			} finally {
				setIsStreaming(false)
			}
		},
		[api, messages, modelSlug]
	)

	const clearMessages = useCallback(() => {
		setMessages([
			{
				id: 0,
				role: 'bot',
				isImage: false,
				content: 'Hello, darling. I am your AI girlfriend. How can I help you today?',
				createdAt: currentTime(),
			},
		])
	}, [])

	return {
		isStreaming,
		isError,
		messages,
		sendMessage,
		clearMessages,
		setMessages,
	}
}
