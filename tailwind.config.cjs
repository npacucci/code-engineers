/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			'black': '#000',
			'white': '#fff',
			'blue': '#90a8ed',
			'pink': '#ff90e8',
			'orange': '#ffb7a3',
			'green': '#23a094',
			'yellow': '#ffc900',
			'gray': '#90aab7'
		},
		fontFamily: {
			sans: ['Inter', 'system-ui', 'sans-serif'],
			// serif: ['Merriweather', 'serif'],
			// sans: ['Graphik', 'sans-serif'],
			// serif: ['Merriweather', 'serif'],
		},
		container: {
			center: true,
		},
    extend: {
      screens: {
        'lg': '992px',
      },
    },
	},
	plugins: [],
}
