import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { ChatMessageType } from '@/app/chat/chat'

const ChatBubble = ({
	message,
	avatar,
	isImage,
	imageUrl,
}: {
	message: ChatMessageType
	avatar: string
	isImage: boolean
	imageUrl?: string
}) => {
	return (
		<div className="flex gap-2 mr-4 w-full">
			{message.role !== 'user' && (
				<Avatar>
					<AvatarImage src={avatar} />
					<AvatarFallback>CN</AvatarFallback>
				</Avatar>
			)}
			<div className={cn('text-sm w-full')}>
				<div className={cn('max-w-[40ch] w-fit', message.role === 'user' ? 'ml-auto' : '')}>
					{isImage && imageUrl ? (
						<Image
							unoptimized
							width={300}
							height={300}
							src={imageUrl}
							alt="Generated image"
							className="w-full rounded-lg"
							style={{ maxWidth: '40ch' }}
						/>
					) : (
						<p className={cn('bg-foreground/15 p-2 pr-4 rounded-lg')}>{message.content}</p>
					)}
					<p className="text-end mt-1 text-[0.55rem]">{message.createdAt}</p>
				</div>
			</div>
		</div>
	)
}

export default ChatBubble
