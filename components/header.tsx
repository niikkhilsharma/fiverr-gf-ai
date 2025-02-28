import { Link } from 'lucide-react'
import React from 'react'

const Header = () => {
	return (
		<header className="w-full fixed top-0 backdrop-blur-sm border-b border-b-accent z-[1100] bg-background h-[60px] flex items-center">
			<div className="px-2 md:px-4 lg:px-6 w-full">
				<div className="w-full flex justify-between items-center">
					<button className="p-2 -mr-1 rounded lg:hidden flex-shrink-0">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width={24}
							height={24}
							viewBox="0 0 24 24"
							fill="none"
							color="currentColor"
							className="size-8">
							<path
								d="M3 5C3 4.44772 3.44772 4 4 4L20 4C20.5523 4 21 4.44772 21 5C21 5.55229 20.5523 6 20 6L4 6C3.44772 6 3 5.55228 3 5Z"
								fill="currentColor"
								fillRule="evenodd"
							/>
							<path
								d="M3 12C3 11.4477 3.44772 11 4 11L20 11C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13L4 13C3.44772 13 3 12.5523 3 12Z"
								fill="currentColor"
								fillRule="evenodd"
							/>
							<path
								d="M3 19C3 18.4477 3.44772 18 4 18L20 18C20.5523 18 21 18.4477 21 19C21 19.5523 20.5523 20 20 20L4 20C3.44772 20 3 19.5523 3 19Z"
								fill="currentColor"
								fillRule="evenodd"
							/>
						</svg>
					</button>
					<button className="p-2 rounded lg:hidden flex-shrink-0">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width={24}
							height={24}
							viewBox="0 0 24 24"
							fill="none"
							color="currentColor"
							className="size-6">
							<path
								d="M16.7929 16.7929C17.1834 16.4024 17.8166 16.4024 18.2071 16.7929L22.7071 21.2929C23.0976 21.6834 23.0976 22.3166 22.7071 22.7071C22.3166 23.0976 21.6834 23.0976 21.2929 22.7071L16.7929 18.2071C16.4024 17.8166 16.4024 17.1834 16.7929 16.7929Z"
								fill="currentColor"
								fillRule="evenodd"
							/>
							<path
								d="M1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11ZM11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3Z"
								fill="currentColor"
								fillRule="evenodd"
							/>
						</svg>
					</button>
					<Link className="flex items-center ml-2 lg:ml-0" href="/">
						<img src="/logo-dark.svg" alt="FantasyGF.ai Logo" className="w-auto h-7 hidden sm:block" />
						<img src="/logo-dark-no-icon.svg" alt="FantasyGF.ai Logo" className="w-auto h-7 block sm:hidden relative top-[2px]" />
					</Link>
					<div className="hidden lg:block lg:flex-shrink-0 lg:ml-4">
						<button className="w-[150px] max-w-full flex items-center gap-2 bg-accent/30 rounded-xl h-8 px-3 hover:bg-accent/50 transition-colors duration-300 text-muted-foreground">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width={24}
								height={24}
								viewBox="0 0 24 24"
								fill="none"
								color="currentColor"
								className="size-4 flex-shrink-0">
								<path
									d="M16.7929 16.7929C17.1834 16.4024 17.8166 16.4024 18.2071 16.7929L22.7071 21.2929C23.0976 21.6834 23.0976 22.3166 22.7071 22.7071C22.3166 23.0976 21.6834 23.0976 21.2929 22.7071L16.7929 18.2071C16.4024 17.8166 16.4024 17.1834 16.7929 16.7929Z"
									fill="currentColor"
									fillRule="evenodd"
								/>
								<path
									d="M1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11ZM11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3Z"
									fill="currentColor"
									fillRule="evenodd"
								/>
							</svg>
							<span className="text-sm">Search</span>
						</button>
					</div>
					<div className="h-[40px] absolute top-full left-0 bg-background-lighter backdrop-blur-sm border-t border-t-accent w-full lg:ml-4 lg:h-[60px] lg:relative lg:bg-transparent lg:border-t-0 lg:backdrop-blur-none lg:w-auto">
						<div className="flex items-center justify-stretch h-full w-full">
							<button className="flex items-center px-4 w-full justify-center h-full text-sm font-bold border-b-[3px] transition-colors duration-300 group border-brand-500 text-brand-500">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									className="inline-block size-6 mr-1 flex-shrink-0 transition-colors group-hover:text-brand-500">
									<path
										fill="currentColor"
										d="M17.5 9.5C17.5 6.46 15.04 4 12 4S6.5 6.46 6.5 9.5c0 2.7 1.94 4.93 4.5 5.4V17H9v2h2v2h2v-2h2v-2h-2v-2.1c2.56-.47 4.5-2.7 4.5-5.4m-9 0C8.5 7.57 10.07 6 12 6s3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5"
									/>
								</svg>
								Girls
							</button>
							<button className="flex items-center px-4 w-full justify-center h-full text-sm font-bold border-b-[3px] border-transparent transition-colors duration-300 group">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 128 128"
									className="inline-block size-4 flex-shrink-0 transition-colors mr-2 group-hover:text-brand-500">
									<path
										d="m55.09 50.96s18.116-1.506 18.587 15.481c0.47 16.987-16.235 19.339-26.587 18.869-10.352-0.471-32.232-14.822-30.585-37.644l1.277-8.128 3.639-4.185s8.369-16.921 27.474-22.015c0 0 1.637-2.729 3.639-2.729 2.001 0 3.639 2.183 6.55 2.547s4.003-2.729 6.732-2.547 2.911 2.183 5.822 2.729 17.103 2.183 28.565 17.831c0 0 0.546 4.003 2.183 4.731s5.458 2.365 6.004 3.639 4.367 14.919 4.003 20.742c-0.364 5.822-2.001 32.932-20.014 41.301l-0.364 4.912s-13.464 12.008-34.024 10.553-26.096-3.621-30.93-10.189c-0.666-0.905-1.637-4.185-1.637-4.185l-1.819-3.821s-1.637-2.729 1.819-2.183c3.457 0.546 16.011 5.458 22.925 5.64s10.553-3.457 11.826-3.821c1.274-0.364 8.733-3.275 10.917-3.639 2.183-0.364 15.647-8.602 17.649-28.408s-15.83-31.451-26.019-31.633c0 0-6.368-0.182-7.824 0.728s-10.917 5.276-15.101 5.822c0 0-3.457 3.275-2.911 7.278s0.546 17.78 15.101 17.805c0 0 3.476-1.876 3.103-15.481z"
										fill="currentColor"
									/>
								</svg>
								Anime
							</button>
							<button className="flex items-center px-4 w-full justify-center h-full text-sm font-bold border-b-[3px] border-transparent transition-colors duration-300 group">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									className="inline-block size-6 mr-1 flex-shrink-0 transition-colors group-hover:text-brand-500">
									<path
										fill="currentColor"
										d="M9.5 11c1.93 0 3.5 1.57 3.5 3.5S11.43 18 9.5 18S6 16.43 6 14.5S7.57 11 9.5 11m0-2C6.46 9 4 11.46 4 14.5S6.46 20 9.5 20s5.5-2.46 5.5-5.5c0-1.16-.36-2.23-.97-3.12L18 7.42V10h2V4h-6v2h2.58l-3.97 3.97C11.73 9.36 10.66 9 9.5 9"
									/>
								</svg>
								Guys
							</button>
						</div>
					</div>
					<div className="flex-shrink-0 ml-auto pl-3">
						<div>
							<div className="flex items-center text-xs font-medium">
								<div className="flex items-center gap-2">
									<button className="relative inline-flex items-center justify-center whitespace-nowrap font-semibold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-primary-foreground shadow h-9 text-sm bg-brand-600 hover:bg-brand-800 rounded-xl px-5">
										<span className="md:hidden font-bold">Join Free</span>
										<span className="hidden md:inline font-bold">Create Free Account</span>
									</button>
									<button className="relative inline-flex items-center justify-center whitespace-nowrap font-semibold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 rounded-xl px-3.5 text-sm">
										Sign in
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
