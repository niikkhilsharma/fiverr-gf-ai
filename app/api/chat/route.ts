import { NextResponse } from 'next/server'

export async function POST(request: Request) {
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
