import { NextResponse } from 'next/server'
import { validateModel, ChatModelCreateInput } from '@/lib/database/schema'
import prisma from '@/lib/database/prisma'

export async function POST(req: Request) {
	try {
		const body = await req.json()

		const validatedModel: ChatModelCreateInput = validateModel(body)

		// Here you would typically:

		// 1. Check if a model with the same slug already exists
		const existingModel = await prisma.chatModel.findUnique({
			where: { slug: validatedModel.slug },
		})

		if (existingModel) {
			return NextResponse.json(
				{
					message: 'A model with this slug already exists',
					status: 409,
				},
				{ status: 409 }
			)
		}

		// 2. Perform any additional processing or validation
		const sanitizedModel = {
			...validatedModel,
			name: validatedModel.name.trim(),
			about: validatedModel.about?.trim() || '',
		}

		// 3. Save the model to your database
		// const savedModel = await prisma.chatModel.create({
		// 	data: {
		// 		...sanitizedModel,
		// 		// Convert array fields to appropriate database storage
		// 		specialFeatures: sanitizedModel.specialFeatures || [],
		// 		hobbies: sanitizedModel.hobbies,
		// 		clothing: sanitizedModel.clothing,
		// 		// Optionally handle optional fields
		// 		breastSize: sanitizedModel.breastSize,
		// 		buttSize: sanitizedModel.buttSize,
		// 		dickSize: sanitizedModel.dickSize,
		// 	},
		// })

		// Return a success response
		return NextResponse.json(
			{
				message: 'Model created successfully',
				model: validatedModel, // You might want to omit sensitive data
				status: 201,
			},
			{ status: 201 }
		)
	} catch (error) {
		// Handle different types of errors
		if (error instanceof Error) {
			// Zod validation errors
			if (error.name === 'ZodError') {
				return NextResponse.json(
					{
						message: 'Validation failed',
						errors: JSON.parse(error.message),
						status: 400,
					},
					{ status: 400 }
				)
			}
		}

		// Fallback error handler
		return NextResponse.json(
			{
				message: 'An unknown error occurred',
				status: 500,
			},
			{ status: 500 }
		)
	}
}
