'use client'
import { Compass, Image, Images, Instagram, Mail, MessageCircleMore, SmilePlusIcon } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from '@/components/ui/sidebar'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { ChevronUp, User2 } from 'lucide-react'
import { Button, buttonVariants } from './ui/button'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Separator } from '@/components/ui/separator'
import { usePathname } from 'next/navigation'

export function AppSidebar() {
	const pathname = usePathname()
	const activePath = pathname.split('/')[1]
	console.log(pathname, activePath)

	const generalItems = [
		{
			title: 'Explore',
			url: '/',
			icon: Compass,
		},
		// {
		// 	title: 'Leaderboard',
		// 	url: '#',
		// 	icon: Medal,
		// },
		{
			title: 'Generate Image',
			url: '/generate-image',
			icon: Image,
		},
	]
	const personalItems = [
		{ title: 'Chat', url: '/chat', icon: MessageCircleMore },
		{ title: 'My AIs', url: '/settings', icon: SmilePlusIcon },
		{ title: 'Gallery', url: '/gallery', icon: Images },
	]

	const socialItems = [
		{ title: 'Instagram', url: 'https://instagram.com/gf_ai', icon: Instagram },
		{ title: 'Contact', url: 'https://www.fiverr.com/gf_ai', icon: Mail },
	]

	return (
		<Sidebar>
			<SidebarHeader className="pt-12" />
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupContent>
						<SidebarMenu>
							<SidebarMenuItem className="my-4">
								<Link
									href={activePath === '' ? '/create/ai-girl' : '/create/ai-boy'}
									className={cn(
										buttonVariants({
											variant: 'destructive',
											size: 'lg',
										}),
										'rounded-full bg-destructive-foreground hover:bg-destructive-foreground/90 w-full hover:text-white'
									)}>
									Create AI Girl
								</Link>
							</SidebarMenuItem>
							{generalItems.map(item => (
								<SidebarMenuItem key={item.title}>
									<Link
										href={item.url}
										className={cn(
											buttonVariants({ variant: 'secondary' }),
											`justify-start w-full hover:bg-destructive-foreground ${item.title === 'Settings' && 'w-full bg-background'}`,
											activePath === item.url.replace('/', '') && 'bg-destructive-foreground'
										)}>
										<item.icon />
										<span>{item.title}</span>
									</Link>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
				<Separator />
				<SidebarGroup>
					<SidebarGroupContent>
						<SidebarMenu>
							<SidebarMenuItem>
								<Button variant="secondary" className="w-full justify-start hover:cursor-pointer">
									<Avatar className="h-6 w-6">
										<AvatarImage src="https://github.com/shadcn.png" />
										<AvatarFallback>CN</AvatarFallback>
									</Avatar>
									My Profile
								</Button>
							</SidebarMenuItem>
							{personalItems.map(item => (
								<SidebarMenuItem key={item.title}>
									<Link
										href={item.url}
										className={cn(
											buttonVariants({ variant: 'secondary' }),
											`justify-start w-full ${item.title === 'Settings' && 'w-full bg-background'}`,
											activePath === item.url.replace('/', '') && 'bg-destructive-foreground'
										)}>
										<item.icon />
										<span>{item.title}</span>
									</Link>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
				<Separator />
				<SidebarGroup>
					<SidebarGroupContent>
						<SidebarMenu>
							{socialItems.map(item => (
								<SidebarMenuItem key={item.title}>
									<Link
										href={item.url}
										className={cn(
											buttonVariants({ variant: 'secondary' }),
											`justify-start w-full ${item.title === 'Settings' && 'w-full bg-background'}`,
											activePath === item.url.replace('/', '') && 'bg-destructive-foreground'
										)}>
										<item.icon />
										<span>{item.title}</span>
									</Link>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
			<SidebarFooter>
				<SidebarMenu>
					<SidebarMenuItem>
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<SidebarMenuButton>
									<User2 /> Username
									<ChevronUp className="ml-auto" />
								</SidebarMenuButton>
							</DropdownMenuTrigger>
							{/* <DropdownMenuContent side="top" className="w-[--radix-popper-anchor-width]"> */}
							<DropdownMenuContent side="top">
								<DropdownMenuItem>
									<span>Account</span>
								</DropdownMenuItem>
								<DropdownMenuItem>
									<span>Billing</span>
								</DropdownMenuItem>
								<DropdownMenuItem>
									<span>Sign out</span>
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarFooter>
		</Sidebar>
	)
}
