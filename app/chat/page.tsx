'use client'

import { useChat } from '@ai-sdk/react'
import { useSearchParams } from 'next/navigation'
import { useState, useRef, useEffect, Suspense } from 'react'
import { Send, User, Bot } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

export default function ChatPage() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Chat />
		</Suspense>
	)
}

function Chat() {
	const searchParams = useSearchParams()
	const modelSlug = searchParams.get('model-slug')
	const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
		sendExtraMessageFields: true,
	})

	const messagesEndRef = useRef<HTMLDivElement>(null)
	const [, setMounted] = useState(false)

	// Scroll to bottom when messages change
	useEffect(() => {
		if (messagesEndRef.current) {
			messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
		}
	}, [messages])

	// Handle dark mode detection
	useEffect(() => {
		setMounted(true)
	}, [])

	return (
		<div className="flex flex-col w-full max-w-2xl mx-auto h-[calc(100vh-80px)]">
			<div className="flex-1 overflow-y-auto p-4 space-y-4">
				{messages.length === 0 ? (
					<div className="flex items-center justify-center h-full text-center text-muted-foreground">
						<div>
							<h3 className="text-lg font-medium mb-2">Welcome to the Chat</h3>
							<p>Start a conversation by typing a message below.</p>
						</div>
					</div>
				) : (
					messages.map(message => (
						<div
							key={message.id}
							className={cn('flex items-start gap-3 mb-4', message.role === 'user' ? 'justify-end' : 'justify-start')}>
							{message.role !== 'user' && (
								<div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
									<Bot className="h-5 w-5 text-primary" />
								</div>
							)}

							<div
								className={cn(
									'rounded-lg px-4 py-2 max-w-[80%] break-words',
									message.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted'
								)}>
								<div className="whitespace-pre-wrap">{message.content}</div>
							</div>

							{message.role === 'user' && (
								<div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
									<User className="h-5 w-5 text-primary-foreground" />
								</div>
							)}
						</div>
					))
				)}
				<div ref={messagesEndRef} />
			</div>

			<div className="border-t p-4 bg-background">
				<form onSubmit={e => handleSubmit(e, { body: { message: input, model: modelSlug } })} className="flex gap-2">
					<Input
						value={input}
						onChange={handleInputChange}
						placeholder="Type your message..."
						className="flex-1"
						disabled={isLoading}
					/>
					<Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
						<Send className="h-4 w-4" />
						<span className="sr-only">Send message</span>
					</Button>
				</form>
			</div>
		</div>
	)
}
