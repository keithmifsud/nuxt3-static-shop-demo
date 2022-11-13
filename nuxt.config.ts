// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      appUrl: 'http://localhost:3000',
      stripePk: 'pk_test_xxxxxxxxxxxxxxxxxxxxxx',
    },
  }
  ,
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
