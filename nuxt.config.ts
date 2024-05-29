// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@/assets/css/custom.css", "@/assets/css/theme.css"],
  experimental: { viewTransition: true },
  modules: ["@pinia/nuxt", "vue3-carousel-nuxt"],
  carousel: {
    prefix: 'MyPrefix'
  }
});
