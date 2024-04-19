// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon", "@nuxtjs/google-fonts"],
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
  googleFonts: {
    families: {
      "Montserrat Alternates": {
        wght: [600],
        ital: [600],
      },
      Montserrat: {
        wght: [400, 700],
        ital: [400, 700],
      },
      "Source Code Pro": {
        wght: [400],
      },
    },
    download: true,
    display: "swap",
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      cssnano:
        process.env.NODE_ENV === "production"
          ? { preset: ["default", { discardComments: { removeAll: true } }] }
          : false, // disable cssnano when not in production
    },
  },
});
