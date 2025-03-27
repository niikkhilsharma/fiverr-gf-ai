'use client'

import { Badge } from '@/components/ui/badge'
import { Ethnicity, EyeColor } from '@prisma/client'
import Image from 'next/image'
import { ChatModel } from '@prisma/client'

export default function Second({
	femaleModel,
	setFemaleModel,
}: {
	femaleModel: Partial<ChatModel>
	setFemaleModel: React.Dispatch<React.SetStateAction<Partial<ChatModel>>>
	setNextCount: React.Dispatch<React.SetStateAction<number>>
}) {
	const allEthnicity = Object.values(Ethnicity)
	const allEyeColor = Object.values(EyeColor)

	return (
		<div>
			<div>
				<h4 className="text-center font-semibold">Choose Ethnicity</h4>
				<div className="grid grid-cols-3 md:grid-cols-6 gap-4 mt-4">
					{allEthnicity.map(ethnicity => (
						<div key={ethnicity} className="relative">
							<Image
								src={'/assets/images/create-female/ethnicity/' + ethnicity + '.webp'}
								width={1152}
								height={896}
								alt="ethnicity"
								className="h-40 object-cover border-4 rounded-lg"
							/>
							<div className="absolute left-0 bottom-2 w-full flex justify-center items-center">
								<Badge className="rounded-full">{ethnicity}</Badge>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Choose Age */}
			<div className="my-10">
				<h4 className="text-center font-semibold">Choose Age</h4>
				<div className="flex flex-col justify-center items-center my-4 space-y-4">
					<div className="rounded-xl mx-auto bg-destructive-foreground px-3 py-1.5">
						<span className="font-semibold">{femaleModel.age}</span> Years
					</div>
					<div className="max-w-96 flex items-center gap-4 w-full">
						18+{' '}
						<input
							type="range"
							name=""
							id=""
							className="w-full"
							min={18}
							max={60}
							onChange={e => setFemaleModel(prev => ({ ...prev, age: Number(e.target.value) }))}
						/>
						60+
					</div>
				</div>
			</div>

			{/* Choose Eye Color */}
			<div className="my-10">
				<h4 className="text-center font-semibold">Choose Eye Color</h4>
				<div className="grid grid-cols-3 md:grid-cols-6 gap-4 mt-4">
					{allEyeColor.map(color => (
						<div key={color} className="relative">
							<Image
								src={'/assets/images/create-female/ethnicity/' + color + '.webp'}
								width={1152}
								height={896}
								alt="ethnicity"
								className="h-40 object-cover border-4 rounded-lg"
							/>
							<div className="absolute left-0 bottom-2 w-full flex justify-center items-centerb">
								<Badge className="rounded-full">{color}</Badge>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
