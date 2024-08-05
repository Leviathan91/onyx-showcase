// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    apiKey: process.env.NUXT_API_KEY,
    authCookieName: process.env.NUXT_AUTH_COOKIE_NAME,
    public: {
      baseApiUrl: process.env.NUXT_BASE_API_URL,
    },
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@sit-onyx/nuxt'],
});
