// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	alias: {
		assets: '/<rootDir>/assets',
	},
	app: {
		head: {
			charset: 'utf-8',
			viewport: 'width=device-width, initial-scale=1',
			title: 'E-Plete',
		},
	},
	css: [
		'primevue/resources/primevue.min.css',
		'primeicons/primeicons.css',
		'~/assets/css/main.css',
		'~/assets/css/theme-green.css',
		//diri ibutang ang css sa theme, check designer primevue
	],
	build: {
		transpile: ['primevue'],
	},
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
});
