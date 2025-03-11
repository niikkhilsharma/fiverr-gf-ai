import { FemaleModelTypes } from '@/utils/data/models'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ModelCard = ({ model }: { model: FemaleModelTypes }) => {
	return (
		<Link
			href={`/chat?model-slug=${model.slug}`}
			className="max-w-64 w-full border rounded-xl overflow-hidden relative h-96 hover:cursor-pointer">
			<div className="absolute top-0 h-full">
				<Image
					src={model.avatar}
					alt={model.name}
					width={200}
					height={200}
					className="h-full w-full object-cover object-left-top scale-115 hover:scale-125 transition-all duration-300"
				/>
			</div>
			<div className="z-10 mt-auto absolute bottom-0 p-3">
				<h2 className="text-xl font-bold">
					{model.name} <span>{model.age}</span>
				</h2>
				<p className="line-clamp-2 text-sm">{model.about}</p>
			</div>
			<div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent pt-[100px]" />
		</Link>
	)
}

export default ModelCard
