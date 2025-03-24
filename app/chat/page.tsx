import { Suspense } from 'react'
import Chat from './chat'

export default async function ChatPage() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Chat />
		</Suspense>
	)
}
