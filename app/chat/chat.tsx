'use client'

import React, { useState, useEffect, useRef } from 'react'
import Chatbox from '@/components/chatbox'
import { ProfileSearch } from '@/components/profile-search'
import ModelPreview from '@/components/model-preview'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { PanelLeft } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useRouter, useSearchParams } from 'next/navigation'
import FemalemodelData from '@/utils/data/models'
import { useAiStream } from '@/hooks/useAiStream'

export type ChatMessageType = {
	id: number
	role: string
	isImage: boolean
	content: string
	imageUrl?: string
	createdAt: string
}

export default function Chat() {
	const router = useRouter()
	const searchParams = useSearchParams()
	const chatContainerRef = useRef<HTMLDivElement>(null)

	const modelSlug = searchParams.get('model-slug')!

	const [showModelPreview, setShowModelPreview] = useState(false)
	const modelData = FemalemodelData.find(model => model.slug === modelSlug)

	const { isStreaming, messages, sendMessage } = useAiStream({
		api: '/api/test',
		modelSlug: modelSlug,
	})

	// Redirect if model not found
	useEffect(() => {
		if (!modelSlug) router.push('/')
		if (!modelData) router.push('/')
	}, [modelData, router])

	const [inputMessage, setInputMessage] = useState('')

	// Scroll to bottom when messages update
	useEffect(() => {
		if (chatContainerRef.current) {
			chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
		}
	}, [messages])

	const handleSendMessage = () => {
		if (inputMessage.trim()) {
			sendMessage(inputMessage)
			setInputMessage('')
		}
	}

	if (!modelData) return null

	return (
		<div className="w-full flex h-svh">
			<div className="hidden md:block w-full max-w-80">
				<ProfileSearch />
			</div>
			<div className={cn('pb-20 w-full flex flex-col')}>
				<div className="border-b border-l p-4 flex items-center gap-4 w-full bg-background border-r sticky top-[64px] z-10">
					<Avatar>
						<AvatarImage src={modelData.avatar} />
						<AvatarFallback>{modelData.name?.substring(0, 2)}</AvatarFallback>
					</Avatar>
					<h3 className="text-xl font-bold truncate">{modelData.name}</h3>
					<Button
						size={'icon'}
						variant={'outline'}
						className="ml-auto rounded-full hover:cursor-pointer"
						onClick={() => {
							setShowModelPreview(prev => !prev)
						}}>
						<PanelLeft />
					</Button>
				</div>

				<div className="flex-grow overflow-hidden">
					<Chatbox modelData={modelData} messages={messages} ref={chatContainerRef} />
				</div>

				<div className="w-full border-x border-t flex gap-4 sticky bottom-0 px-4 py-3 bg-background">
					<Input
						className="bg-secondary-foreground/10 border-none rounded-full backdrop-blur-2xl py-2 px-4"
						placeholder={'Message ' + modelData.name}
						onKeyDown={e => {
							if (e.key === 'Enter' && !e.shiftKey) {
								e.preventDefault()
								handleSendMessage()
							}
						}}
						onChange={e => {
							setInputMessage(e.target.value)
						}}
						value={inputMessage}
						disabled={isStreaming}
					/>
					<Button className="bg-primary text-primary-foreground" onClick={handleSendMessage} disabled={isStreaming}>
						Send
					</Button>
				</div>
			</div>

			{showModelPreview && (
				<div className="w-full max-w-80">
					<ModelPreview modelData={modelData} />
				</div>
			)}
		</div>
	)
}
