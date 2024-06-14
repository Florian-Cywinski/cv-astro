/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			gridTemplateColumns:
			{
			  '25/75': '25% 75%',
			},
			colors: {   // To add custom color classes
				primary: '#34404a',		// text-primary
				secondary: '#f1f1f1',	// text-secondary
			  },
			  fontFamily: { // To add custom fonts 
				roboto: ['Roboto', 'sans-serif'], 	// A Google font
				museoModerno: ['MuseoModerno', 'sans-serif'],	// A Google font - <p class="font-museoModerno darkGray">MMMWWWMMM</p>
			  },
		  },
	},
	plugins: [],
}