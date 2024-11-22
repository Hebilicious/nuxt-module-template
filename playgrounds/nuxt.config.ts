// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: [
		"../packages/nuxt-module-template/src/module"
		// "@example/my-module"
	],
	devtools: {
		enabled: true
	},
	compatibilityDate: "2024-11-22"
})
