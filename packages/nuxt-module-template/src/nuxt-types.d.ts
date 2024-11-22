import type { ModuleOptions } from "./module"

declare module "@nuxt/schema" {
	interface RuntimeConfig {
		"my-module": ModuleOptions
	}
	interface PublicRuntimeConfig {
		"my-module": ModuleOptions
	}
}
