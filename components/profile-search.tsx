import Link from 'next/link'
import { Button, buttonVariants } from './ui/button'
import { Input } from './ui/input'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'

export function ProfileSearch() {
	return (
		<div className="w-full h-full">
			<div className="space-y-2 sticky top-0 p-4">
				<Input
					className="bg-secondary-foreground/10 border-none rounded-full backdrop-blur-2xl py-2 px-4"
					placeholder={'Search for a profile...'}
				/>
				<Tabs defaultValue="all">
					<TabsList className="w-full rounded-full py-5">
						<TabsTrigger className="w-full hover:cursor-pointer rounded-full py-1.5" value="all">
							All
						</TabsTrigger>
						<TabsTrigger className="w-full hover:cursor-pointer rounded-full py-1.5" value="my">
							My AIs
						</TabsTrigger>
					</TabsList>
				</Tabs>
				<Link
					href="#"
					className={cn(
						buttonVariants({
							variant: 'destructive',
							size: 'lg',
						}),
						'rounded-xl bg-destructive-foreground hover:bg-destructive-foreground/90 w-full hover:text-white'
					)}>
					Create AI Girl
				</Link>
			</div>
		</div>
	)
}
