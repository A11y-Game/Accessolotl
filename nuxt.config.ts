// https://nuxt.com/docs/api/configuration/nuxt-config
import Typography from '@tailwindcss/typography'

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/content'],
  app: {
    head: {
      link: [
        { rel: "icon", type: "image/svg", href: "/accessolotl.svg" }
      ]
    }
  },
  tailwindcss: {
    config: {
      plugins: [Typography()]
    }
  },
});
