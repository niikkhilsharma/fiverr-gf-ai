'use client'
import { useState } from 'react'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Input } from './ui/input'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const Navbar = () => {
	const [searchText, setSearchText] = useState('')

	return (
		<div className="border-b px-4 py-4 flex gap-4 items-center w-full z-20 sticky top-0 bg-background">
			{/* <Image src="/logo.jpg" width={500} height={500} alt="logo" className="m-4 w-16 h-10" /> */}
			<div>AI Ruby</div>
			<div className="flex flex-1 gap-4 justify-between">
				<div className="flex gap-4">
					<Input
						type="text"
						placeholder="Search"
						className="rounded-lg bg-muted text-muted-foreground"
						value={searchText}
						onChange={e => setSearchText(e.target.value)}
					/>
					<div>
						<Tabs defaultValue="account" className="w-[400px]">
							<TabsList className="w-full">
								<TabsTrigger className="w-full hover:cursor-pointer" value="girls">
									Girls
								</TabsTrigger>
								<TabsTrigger className="w-full hover:cursor-pointer" value="anime">
									Anime
								</TabsTrigger>
								<TabsTrigger className="w-full hover:cursor-pointer" value="guys">
									Guys
								</TabsTrigger>
							</TabsList>
						</Tabs>
					</div>
				</div>
				<div>
					<Avatar>
						<AvatarImage src="https://github.com/shadcn.png" />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
				</div>
			</div>
		</div>
	)
}

export default Navbar
