import { NextResponse } from 'next/server'

export async function POST() {
	try {
	} catch (error) {
		console.log(error)
		return NextResponse.json(
			{
				message: 'Internal Server Error',
				isImage: false,
			},
			{ status: 500 }
		)
	}
}
