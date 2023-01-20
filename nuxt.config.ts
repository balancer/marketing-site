import { TITLE, headMeta } from './lib/meta'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxt/content',
        '@funken-studio/sitemap-nuxt-3'
    ],
    content: {
        // https://content.nuxtjs.org/api/configuration
        documentDriven: true,
    }, 
  // Global page headers: https://go.nuxtjs.dev/config-head
  app: {
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
        }
    },    
    css: [
        '~/assets/css/tailwind.css',
        '~/assets/css/main.css'
    ],
    components: {
        dirs: [
          '~/components/_global',
          '~/components/cards',
          '~/components/case-studies',
          '~/components/icons',
          '~/components/menu',
        ]
    },     
    buildModules: [
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
    ],
    sitemap: {
        hostname: 'https://balancer.fi',
    },
})
