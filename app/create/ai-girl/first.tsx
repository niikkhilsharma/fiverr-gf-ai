'use client'
import { Clover } from 'lucide-react'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { ChatModel } from '@prisma/client'

export default function First({
	femaleModel,
	setFemaleModel,
	setNextCount,
}: {
	femaleModel: Partial<ChatModel>
	setFemaleModel: React.Dispatch<React.SetStateAction<Partial<ChatModel>>>
	setNextCount: React.Dispatch<React.SetStateAction<number>>
}) {
	return (
		<>
			<h1 className="mt-2 mb-4 text-center font-semibold">Choose your girlfriend&apos;s style</h1>
			<div className="w-full py-2 px-2 h-13 bg-muted-foreground/10 font-semibold flex items-center justify-start rounded-lg">
				<p className="p-2 text-xs text-foreground">Want to be surprised?</p>
				<p className="p-2 px-3 text-sm text-foreground bg-destructive-foreground h-full flex items-center justify-start rounded-lg">
					<Clover width={16} height={16} className="mr-1" />
					I&apos;m feeling lucky
				</p>
			</div>
			<div className="mt-4 w-full flex gap-4">
				<div className="relative w-full max-h-[28rem]">
					<Image
						src={'/assets/images/girl-model-placeholder.webp'}
						width={500}
						height={780}
						alt="girl-image"
						className={cn(
							'w-full h-full object-cover rounded-lg overflow-hidden',
							femaleModel.isRealistic && 'border-4 border-destructive-foreground'
						)}
						onClick={() => {
							setFemaleModel(prev => ({ ...prev, isRealistic: true }))
							setNextCount(2)
						}}
					/>
					<div className="absolute left-0 bottom-4 w-full flex justify-center items-center">
						<Badge
							variant="default"
							className="font-bold text-sm hover:bg-destructive-foreground hover:cursor-pointer hover:text-foreground duration-0">
							Realistic
						</Badge>
					</div>
				</div>
				<div className="relative w-full max-h-[28rem]">
					<Image
						src={'/assets/images/anime-girl-model-placeholder.webp'}
						width={500}
						height={780}
						alt="girl-image"
						className={cn(
							'w-full h-full object-cover rounded-lg overflow-hidden',
							!femaleModel.isRealistic && 'border-4 border-destructive-foreground'
						)}
						onClick={() => {
							setFemaleModel(prev => ({ ...prev, isRealistic: false }))
							setNextCount(2)
						}}
					/>
					<div className="absolute left-0 bottom-4 w-full flex justify-center items-center">
						<Badge
							variant="default"
							className="font-bold text-sm hover:bg-destructive-foreground hover:cursor-pointer hover:text-foreground duration-0">
							Anime
						</Badge>
					</div>
				</div>
			</div>
		</>
	)
}
