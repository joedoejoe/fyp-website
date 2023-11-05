const withMT = require('@material-tailwind/react/utils/withMT')

module.exports = withMT({
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				purple: '#343a5e',
				// blue: '#1E40AF',
				'light-blue': '#3B82F6',
				brown: '#AC8B54',
				'light-brown': '#4C453C',
				'dark-brown': '#272320',
				'light-gray': '#d1d5db',
				'dark-gray': '#4b5563',
				red: '#ef4444',
				'light-cyan': '#9CFFE7',
				cyan: '#ccd6f6',
				'dark-cyan': '#0e7490',
				gold: '#D4B238',
				'smoke-white': '#F0F8FF',
			},
		},
	},
	plugins: [],
})
