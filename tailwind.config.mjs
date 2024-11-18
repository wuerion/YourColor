/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'lato': ['Lato'],
				'inconsolata': ['Inconsolata'],
			},
			animation: {
				'spin-slow': 'spin 4s linear infinite'
			},
			colors : {
				'buttonLink': 'linear-gradient(0deg, black, rgb(170, 170, 170))',
			},
		},
	},
	plugins: [],
}
