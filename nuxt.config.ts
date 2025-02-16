// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: {
    enabled: true,
  },
  modules: [
    "@nuxt/content",
    "@nuxt/icon",
    "@nuxt/ui",
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@primevue/nuxt-module",
    "@vee-validate/nuxt",
    "@vueuse/nuxt",
    "shadcn-nuxt",
  ],
  // shadcn: {
  //   prefix: "shad-",
  // },
});
