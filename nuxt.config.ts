// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/content", "nuxt-icon"],
  app: {
    head: {
      link: [{ rel: "icon", type: "image/svg", href: "/accessolotl.svg" }],
      // language
      htmlAttrs: {
        lang: "en",
      },
    },
  },
  tailwindcss: {
    // see in tailwind.config.js, not here
  },
});
