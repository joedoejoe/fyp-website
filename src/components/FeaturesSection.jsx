import React from 'react'
import { Typography, Card } from '@material-tailwind/react'

const FeaturesSection = () => {
	return (
		<div>
			<div
				id='Features'
				className='h-screen pt-24 mx-auto max-w-screen-md py-12'
			>
				<Typography variant='h2' color='blue-gray' className='mb-2'>
					Features
				</Typography>

				<Typography color='gray' className='font-normal'>
					<p>
						Features include a login with 2FA (utilizing biometrics
						authentication), allowing users to check their
						timetable, students to mark their attendance using
						biometrics authentication, staff/teachers to view the
						attendance rate of their classes. Super admins can also
						utilize our app to manage users, creating new user
						accounts or editing existing ones.
					</p>
					<br />
					<p>Major features require MFA via QR code scanning</p>
					<p>
						On this page, all users are required to scan the QR code
						and provide biometric authentication to proceed
					</p>
				</Typography>
				<Card className='mb-12 overflow-hidden'>
					<img
						alt='nature'
						className='max-h-[32rem] w-full object-cover object-center'
						src='/assets/Screenshot_4.png
					'
					/>
				</Card>
			</div>
			<div
				id='Features'
				className='h-screen pt-24 mx-auto max-w-screen-md py-12'
			>
				<Typography color='gray' className='font-normal'>
					Pending MFA Authentication on device{' '}
				</Typography>
				<Card className='mb-12 overflow-hidden'>
					<img
						alt='nature'
						className='max-h-[32rem] w-full object-cover object-center'
						src='/assets/Screenshot_5.png'
					/>
				</Card>
			</div>

			<div
				id='Features'
				className='h-screen pt-24 mx-auto max-w-screen-md py-12'
			>
				<Typography color='gray' className='font-normal'>
					Admin Dashboard
				</Typography>
				<Card className='mb-12 overflow-hidden'>
					<img
						alt='nature'
						className='max-h-[32rem] w-full object-cover object-center'
						src='/assets/Screenshot_8.png
					'
					/>
				</Card>
			</div>
			<div
				id='Features'
				className='h-screen pt-24 mx-auto max-w-screen-md py-12'
			>
				<Typography color='gray' className='font-normal'>
					Create User Account
				</Typography>
				<Card className='mb-12 overflow-hidden'>
					<img
						alt='nature'
						className='max-h-[32rem] w-full object-cover object-center'
						src='/assets/Screenshot_9.png
					'
					/>
				</Card>
			</div>
			<div
				id='Features'
				className='h-screen pt-24 mx-auto max-w-screen-md py-12'
			>
				<Typography color='gray' className='font-normal'>
					Lecturer Dashboard
				</Typography>
				<Card className='mb-12 overflow-hidden'>
					<img
						alt='nature'
						className='max-h-[32rem] w-full object-cover object-center'
						src='/assets/Screenshot_10.png
					'
					/>
				</Card>
			</div>
			<div
				id='Features'
				className='h-screen pt-24 mx-auto max-w-screen-md py-12'
			>
				<Typography color='gray' className='font-normal'>
					Student Dashboard
				</Typography>
				<Card className='mb-12 overflow-hidden'>
					<img
						alt='nature'
						className='max-h-[32rem] w-full object-cover object-center'
						src='/assets/Screenshot_14.png
					'
					/>
				</Card>
			</div>
			<div
				id='Features'
				className='h-screen pt-24 mx-auto max-w-screen-md py-12'
			>
				<Typography color='gray' className='font-normal'>
					Student Timetable View
				</Typography>
				<Card className='mb-12 overflow-hidden'>
					<img
						alt='nature'
						className='max-h-[32rem] w-full object-cover object-center'
						src='/assets/Screenshot_15.png
					'
					/>
				</Card>
			</div>
			<div
				id='Features'
				className='h-screen pt-24 mx-auto max-w-screen-md py-12'
			>
				<Typography color='gray' className='font-normal'>
					Student Take Attendance View
				</Typography>
				<Card className='mb-12 overflow-hidden'>
					<img
						alt='nature'
						className='max-h-[32rem] w-full object-cover object-center'
						src='/assets/Screenshot_16.png
					'
					/>
				</Card>
			</div>
			<div
				id='Features'
				className='h-screen pt-24 mx-auto max-w-screen-md py-12'
			>
				<Typography color='gray' className='font-normal'>
					Student Take Attendance MFA View
					<p>
						On this page, student is required to scan the QR code
						and provide biometric authentication to proceed
					</p>
				</Typography>
				<Card className='mb-12 overflow-hidden'>
					<img
						alt='nature'
						className='max-h-[32rem] w-full object-cover object-center'
						src='/assets/Screenshot_17.png
					'
					/>
				</Card>
			</div>
			<div
				id='Features'
				className='h-screen pt-24 mx-auto max-w-screen-md py-12'
			>
				<Typography color='gray' className='font-normal'>
					Student Marked Attendance View
				</Typography>
				<Card className='mb-12 overflow-hidden'>
					<img
						alt='nature'
						className='max-h-[32rem] w-full object-cover object-center'
						src='/assets/Screenshot_18.png
					'
					/>
				</Card>
			</div>
		</div>
	)
}

export default FeaturesSection
