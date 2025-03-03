import Image from 'next/image'
import React from 'react'

enum Relationship {
	Stranger = 'Stranger',
	Acquaintance = 'Acquaintance',
	Friend = 'Friend',
	CloseFriend = 'CloseFriend',
	Lover = 'Lover',
	Soulmate = 'Soulmate',
}

enum Personality {
	Shy = 'Shy',
	Playful = 'Playful',
	Romantic = 'Romantic',
	Mysterious = 'Mysterious',
	Confident = 'Confident',
	Caring = 'Caring',
	Wild = 'Wild',
}

interface ModelCardProps {
	about: string
	age: number
	avatar: string
	name: string
	personality: string
	relationship: string
	slug: string
}

const ModelCard = ({ model }: { model: ModelCardProps }) => {
	return (
		<div className="max-w-64 w-full border rounded-xl overflow-hidden relative h-96">
			<div className="absolute top-0 h-full">
				<Image
					src={model.avatar}
					alt={model.name}
					width={200}
					height={200}
					className="h-full w-full object-contain object-left-top"
				/>
			</div>
		</div>
	)
}

export default ModelCard
