import { FaGoogle } from 'react-icons/fa'
import {
	AlertDialog,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from '@/components/ui/alert-dialog'

import { Button } from './ui/button'
import { signIn } from 'next-auth/react'

const AuthCard = ({ redirectTo }: { redirectTo?: string }) => {
	return (
		<div>
			<AlertDialog>
				<AlertDialogTrigger>Open</AlertDialogTrigger>
				<AlertDialogContent>
					<AlertDialogHeader>
						<AlertDialogTitle className="flex items-center justify-center">Please login to continue</AlertDialogTitle>
						<AlertDialogDescription className="flex justify-center items-center">
							<Button
								variant="outline"
								className="w-full max-w-48 my-4 hover:cursor-pointer"
								onClick={() => {
									if (redirectTo) {
										signIn('google', { redirectTo: '' })
									} else {
										signIn('google')
									}
								}}>
								<FaGoogle /> Continue with Google
							</Button>
						</AlertDialogDescription>
					</AlertDialogHeader>
				</AlertDialogContent>
			</AlertDialog>
		</div>
	)
}

export default AuthCard
