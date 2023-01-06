/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			'black': '#000',
			'white': '#fff',
			'blue': '#90a8ed',
			'yellow': '#ffc900',
			'pink': '#ff90e8',
			'orange': '#ffb7a3',
			'green': '#23a094',
			'gray': '#90aab7'
		},
		fontFamily: {
			sans: ['"M PLUS Rounded 1c"', 'sans-serif'],
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
