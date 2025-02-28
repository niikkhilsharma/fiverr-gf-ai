'use client'

import { useState, useEffect } from 'react'
import axios from 'axios'
import Image from 'next/image'

export default function Home() {
	const [imageData, setImageData] = useState<{ success: boolean; imageUrl?: string; error?: string } | null>(null)

	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const fetchImage = async () => {
			try {
				const res = await axios.get('/api/replicate')
				setImageData(res.data)
			} catch (error) {
				setImageData({
					success: false,
					error: error instanceof Error ? error.message : 'Failed to load image',
				})
			} finally {
				setLoading(false)
			}
		}

		fetchImage()
	}, [])

	if (loading) {
		return <div className="p-6">Loading...</div>
	}

	if (!imageData?.success) {
		return <div className="p-6 text-red-500">Error: {imageData?.error}</div>
	}

	return (
		<div className="p-6">
			{imageData.imageUrl && (
				// Since we're using base64, we can display it directly in an img tag
				// or use Next.js Image component with unoptimized prop
				<Image src={imageData.imageUrl} width={500} height={500} alt="Generated image" unoptimized priority />
			)}
		</div>
	)
}
