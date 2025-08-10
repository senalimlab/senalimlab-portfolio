/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		  './index.html',
		  './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		  './components/**/*.{astro,html,js,jsx,ts,tsx,vue}',
		  './layouts/**/*.{astro,html,js,jsx,ts,tsx,vue}',
		],
	theme: {
		extend: {
			fontFamily: {
			        serif: ['Playfair Display', 'serif'],
				libertinus: ['"Libertinus Sans"', 'sans-serif'],
			      },
			colors: {
			        miloYellow: '#fcdb05', // '#e80558', // nice yellow for hero circle\
					textYellow: '#ebcc05',
				miloPurple: '#7200FF',     
			},
			fontSize: {
			      '4-5xl': '2.75rem', // 42px
				  '8-9xl': '7rem', 
			    },
			backgroundImage: {
		        'clarity-gradient': 'radial-gradient(circle, #5DADEC 55%, #D4A017 85%, #F5F7FA 100%)',
		      },
		},
	},
	plugins: [require("@tailwindcss/typography"),require("daisyui")],
	daisyui: {
		themes: true, // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
		darkTheme: "dark", // name of one of the included themes for dark mode
		logs: false, // Shows info about daisyUI version and used config in the console when building your CSS
	  }
}
