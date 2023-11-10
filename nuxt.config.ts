export default defineNuxtConfig({
  app: {
    head: {
      title: 'Voor elke bouwopgave een oplossing in hout!',
      meta: [
        {
          name: 'description',
          content:
            'Een goed ontwerp tot en met realisatie van een houten constructie? Wij realiseren voor iedere bouwopgave een solide oplossing in hout. Wij zijn Solid Timber!',
        },
        {
          name: 'theme_color',
          content: '00665e',
        },
      ],
      htmlAttrs: { lang: 'nl' },
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap"',
        },
        { hid: 'canonical', rel: 'canonical', href: 'https://solidtimber.nl' },
      ],
    },
  },
  site: {
    url: 'https://solidtimber.nl',
    name: 'Solid Timber',
  },
  ssr: false, 
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/apollo',
    '@nuxtjs/google-fonts',
    'nuxt-icon',
    '@nuxtjs/eslint-module',
    '@nuxt/image',
    'nuxt-simple-sitemap',
    'nuxt-simple-robots',
    'vue3-carousel-nuxt',
  ],
  apollo: {
    clients: {
      default: './apollo/prepr.ts',
      asegment: './apollo/asegment.ts',
      bsegment: './apollo/bsegment.ts',
    },
  },
  runtimeConfig: {
    public: {
      PREPR_ACCESS_TOKEN: process.env.PREPR_ACCESS_TOKEN,
    },
  },
  css: ['~/assets/css/main.css'],
  image: {
    dir: 'assets/images',
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  build: {
    transpile: ['tslib'],
  },
})
