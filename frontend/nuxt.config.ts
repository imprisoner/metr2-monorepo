// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from "@primeuix/themes/aura";
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  modules: [
    "@nuxt/eslint",
    "@nuxt/image",
    "@primevue/nuxt-module",
    "@pinia/nuxt",
  ],
  primevue: {
    options: {
      theme: {
        preset: Aura,
        darkModeSelector: ".app-dark",
        options: {
          cssLayer: {
            name: "primevue",
            order: "theme, base, primevue",
          },
        },
      },
    },
  },
  css: ["~/assets/css/main.css", "~/assets/scss/main.scss"],
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    format: ["webp"],
  },
  routeRules: {
    "/write": {},
    "/write/**": { ssr: false },
  },
});
