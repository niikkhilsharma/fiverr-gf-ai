import React from 'react'
import Image from 'next/image'
import ChatBubble from './chat-bubble'
import { FemaleModelTypes } from '@/utils/data/models'
import { ChatMessageType } from '@/app/chat/chat'

const ChatBox = ({
	modelData,
	messages,
	ref,
}: {
	modelData: FemaleModelTypes
	messages: ChatMessageType[]
	ref?: React.Ref<HTMLDivElement>
}) => {
	if (!modelData) return null

	return (
		<div ref={ref} className="w-full p-4 overflow-y-auto border-x h-full">
			<div className="flex flex-col items-center justify-center">
				<div className="flex justify-center items-center w-52 h-52 rounded-xl overflow-hidden">
					<Image
						unoptimized
						src={modelData.avatar}
						width={500}
						height={500}
						alt={`${modelData.name} avatar`}
						className="w-52 h-52 rounded-xl aspect-square hover:scale-125 transition-all"
					/>
				</div>
				<h3 className="text-md font-bold mt-2">
					{modelData.name}, <span className="text-foreground/80 font-normal">{modelData.age} Years</span>
				</h3>
				<p className="text-xs text-foreground/60 line-clamp-2 max-w-[40ch] text-center mt-2">
					All communication is private. No one else can see your messages.
				</p>
			</div>
			<div className="flex flex-col gap-4 mt-8 pb-4">
				{messages.length > 0 &&
					messages.map(message => (
						<ChatBubble
							avatar={modelData.avatar}
							message={message}
							key={message.id}
							isImage={message.isImage}
							imageUrl={message.imageUrl}
						/>
					))}
			</div>
		</div>
	)
}

export default ChatBox
