'use client'
import { useState } from 'react'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Input } from './ui/input'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Image from 'next/image'

const Navbar = () => {
	const [searchText, setSearchText] = useState('')

	return (
		<div className="flex border-b px-4 h-[68px] bg-background gap-4 items-center w-full z-20 fixed top-0">
			<Image unoptimized src="/assets/images/logo.jpg" width={500} height={500} alt="logo" className="m-4 w-16 h-10" />
			<div className="flex flex-1 gap-4 justify-between">
				<div>
					<Tabs defaultValue="girls" className="w-[400px]">
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
				<div className="ml-auto">
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
