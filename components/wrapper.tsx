import { cn } from '@/lib/utils'
import React from 'react'

const Wrapper = ({
	children,
	className = '',
}: Readonly<{ children: React.ReactNode; className: string }>) => {
	return <div className={cn('max-w-screen-xl mx-auto', className)}>{children}</div>
}

export default Wrapper
