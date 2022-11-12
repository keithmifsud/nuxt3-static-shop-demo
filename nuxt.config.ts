// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  nitro: {
    preset: 'node-server'
  },
  runtimeConfig: {
    stripePk: '',
  },
  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: [
          ['defineStore', 'definePiniaStore'],
        ],
      },
    ],
    '@nuxtjs/tailwindcss',
  ],
})
