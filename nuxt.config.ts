// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Solid Timber",
    }
  },
  ssr: false,
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/apollo', '@nuxtjs/google-fonts'],
  apollo: {
    clients: {
      default: "./apollo/prepr.ts",
      asegment: "./apollo/asegment.ts",
      bsegment: "./apollo/bsegment.ts",
    },
  },
  runtimeConfig: {
    public: {
      PREPR_ACCESS_TOKEN: process.env.PREPR_ACCESS_TOKEN,
    },
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  build: {
    transpile: ["tslib"],
  },
})
