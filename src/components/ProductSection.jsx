import React from 'react'
import { Typography, Card } from '@material-tailwind/react'

const ProductSection = () => {
	return (
		<div
			id='Product'
			className='h-screen pt-24 mx-auto max-w-screen-md py-12'
		>
			<Typography variant='h2' color='blue-gray' className='mb-2'>
				Product
			</Typography>

			<Typography color='gray' className='font-normal'>
				Our main objective of our project is to allow users of our web
				application to perform multi-factor transaction authorisation
				based on QR code, with the usage of biometric information.
			</Typography>
			<Card className='mb-12 overflow-hidden'>
				<img
					className='max-h-[32rem] w-full object-cover object-center'
					src='/assets/Screenshot_2.png
					'
				/>
			</Card>
		</div>
	)
}

export default ProductSection
