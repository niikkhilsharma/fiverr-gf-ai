'use client'

import { useChat } from '@ai-sdk/react'
import React from 'react'

const Chatbox = () => {
	const { messages, input, handleSubmit, handleInputChange, status } = useChat()

	return (
		<div>
			{messages.map(message => (
				<div key={message.id}>
					<div>{message.role}</div>
					<div>{message.content}</div>
				</div>
			))}

			<form onSubmit={handleSubmit}>
				<input value={input} placeholder="Send a message..." onChange={handleInputChange} disabled={status !== 'ready'} />
			</form>
		</div>
	)
}

export default Chatbox
