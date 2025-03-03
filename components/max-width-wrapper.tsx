import React from 'react'
import { cn } from '@/lib/utils'

export function MaxWidthWrapper({ children, className = '' }: { children: React.ReactNode; className?: string }) {
	return <div className={cn('max-w-screen-xl mx-auto px-4 sm:px-4 xl:px-8', className)}>{children}</div>
}
