import React from 'react'
import { Typography, Card, Button } from '@material-tailwind/react'

const DocumentationSection = () => {
	return (
		<div
			id='Documentation'
			className='h-screen pt-24 mx-auto max-w-screen-md py-12'
		>
			<Typography variant='h2' color='blue-gray' className='mb-2'>
				Documentation
			</Typography>

			<Typography color='gray' className='font-normal mb-4'>
				<p>Documentation links for the project</p>
				<p>Click to open in Google Docs site</p>
			</Typography>

			<div className='mb-4'>
				<Button
					color='blue'
					size='sm'
					onClick={() =>
						window.open(
							'https://docs.google.com/document/d/1oAAtZ7JdQ2IMIPQc7XDmDeI68uffFEDmoOF9bs9yzEM/edit?usp=drive_link'
						)
					}
				>
					User Story & Requirements
				</Button>
			</div>

			<div className='mb-4'>
				<Button
					color='blue'
					size='sm'
					onClick={() =>
						window.open(
							'https://docs.google.com/document/d/1glY6sRcfu7CdhykO78m36R0FUGrIiNCdzufo2puPSv4/edit?usp=drive_link'
						)
					}
				>
					Use Case Description
				</Button>
			</div>
			<div className='mb-4'>
				<Button
					color='blue'
					size='sm'
					onClick={() =>
						window.open(
							'https://docs.google.com/document/d/1kPwlxFc0DgMFnvgk-cxDwj_N73luPQ8F/edit?usp=drive_link'
						)
					}
				>
					Technical Manual
				</Button>
			</div>
			<div className='mb-4'>
				<Button
					color='blue'
					size='sm'
					onClick={() =>
						window.open(
							'https://docs.google.com/document/d/1uqHR3XwlFLJy7QdV4CwHyxw3nP5xlRL1pvhV4fniRo4/edit?usp=drive_link'
						)
					}
				>
					Research & Literature Review
				</Button>
			</div>
			<div className='mb-4'>
				<Button
					color='blue'
					size='sm'
					onClick={() =>
						window.open(
							'https://docs.google.com/document/d/1HHbhynLMThlrS5vT9QuOE_dGSeI6jcYW/edit?usp=drive_link'
						)
					}
				>
					Requirement Specification
				</Button>
			</div>
			<div className='mb-4'>
				<Button
					color='blue'
					size='sm'
					onClick={() =>
						window.open(
							'https://docs.google.com/document/d/1yciQHMZoiKRP4KkAKZTRVZOd63ioq_dm/edit?usp=drive_link'
						)
					}
				>
					Progress Report
				</Button>
			</div>
			<div className='mb-4'>
				<Button
					color='blue'
					size='sm'
					onClick={() =>
						window.open(
							'https://docs.google.com/document/d/1tqIm16mEyoruYYmkHQ6BKrLhBqcYmpG1/edit?usp=drive_link'
						)
					}
				>
					Design Specification
				</Button>
			</div>

			{/* Add more links as needed */}
		</div>
	)
}

export default DocumentationSection
