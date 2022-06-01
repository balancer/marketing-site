import { TITLE, headMeta } from './lib/meta'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  ssr: false,

  server: {
    host: '0.0.0.0'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: TITLE,
    htmlAttrs: {
      lang: 'en',
      prefix: 'og: http://ogp.me/ns#'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ...headMeta()
    ],
    link: [      
      { rel: 'icon', href: '/favicon.svg' },
      { rel: 'mask-icon', href: '/favicon.svg', color: '#000000' }
    ],   
    script: [
      { src: 'https://scientific-type.balancer.fi/script.js', site: process.env.FATHOM_SITE_ID || 'xxx', defer: true, 'data-spa': 'auto' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/tailwind.css',
    '~/assets/css/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    '~/components/_global',
    '~/components/menu',
    '~/components/cards',
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/sentry',
    '@nuxtjs/sitemap',
    '@nuxt/content'
  ],
  content: {
    // Options
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  sentry: {
    dsn: 'https://991f8a3901034e0db96f0ff7bf10d24e@o574636.ingest.sentry.io/5818459'
  },

  sitemap: {
    hostname: 'https://balancer.fi',
  }
}
