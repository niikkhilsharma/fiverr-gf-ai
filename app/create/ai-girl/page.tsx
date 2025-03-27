'use client'
import { ArrowRight } from 'lucide-react'
import React, { useState } from 'react'
import First from './first'
import { Button } from '@/components/ui/button'
import {
	BodyType,
	ChatModel,
	Clothing,
	Ethnicity,
	EyeColor,
	HairColor,
	HairStyle,
	ModelGender,
	Occupation,
	Personality,
	Relationship,
} from '@prisma/client'
import Second from './second'

export default function CreateAiGirl() {
	const [nextCount, setNextCount] = React.useState<number>(1)

	const [femalModel, setFemaleModel] = useState<Partial<ChatModel>>({
		name: '',
		age: 20,
		slug: '',
		avatar: '',
		about: '',
		ethnicity: Ethnicity.ARABIC,
		eyeColor: EyeColor.BLUE,
		hairStyle: HairStyle.BANGS,
		hairColor: HairColor.BLACK,
		bodyType: BodyType.FIT,
		personality: Personality.LOVER,
		occupation: Occupation.ACTRESS,
		relationship: Relationship.STRANGER,
		specialFeatures: [],
		hobbies: [],
		clothing: Clothing.BASKETBALL,
		isRealistic: true,
		breastSize: '',
		buttSize: '',
		gender: ModelGender.FEMALE,
	})

	return (
		<div className="px-4 w-full py-10 overflow-y-scroll pb-40 h-svh">
			<h1 className="text-4xl font-bold text-center">Create your own AI Girl</h1>
			<p className="text-sm text-foreground/80 text-center mt-3">Then you can chat, ask for pictures, or get videos.</p>

			<div className="mt-8">
				<div className="flex gap-6 items-center mx-auto justify-center">
					{Array.from({ length: 9 }, (_, i) => i + 1).map(i => (
						<div
							key={i}
							className="w-3 h-3 aspect-square rounded-full bg-destructive-foreground ring-4 ring-destructive-foreground/30 "></div>
					))}
				</div>
				<div className="mt-10 border shadow-md w-full max-w-[55rem] p-4 sm:p-8 rounded-lg mx-auto bg-foreground/5">
					{nextCount === 1 && <First femaleModel={femalModel} setFemaleModel={setFemaleModel} setNextCount={setNextCount} />}
					{nextCount === 2 && <Second femaleModel={femalModel} setFemaleModel={setFemaleModel} setNextCount={setNextCount} />}
				</div>
			</div>
			<div className="w-[-webkit-fill-available] fixed bottom-8 flex justify-center items-center">
				<Button variant={'destructive'} className="w-64 sm:w-96 bg-destructive-foreground hover:bg-destructive" size={'lg'}>
					Next <ArrowRight />
				</Button>
			</div>
		</div>
	)
}
