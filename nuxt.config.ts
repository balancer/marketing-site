// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxt/content',
    ],
    content: {
        // https://content.nuxtjs.org/api/configuration
        documentDriven: true,
    },
    components: {
        dirs: [
          '~/components/_global',
          '~/components/cards',
          '~/components/case-studies',
          '~/components/icons',
          '~/components/menu',
        ]
    },
    css: [
        '~/assets/css/tailwind.css',
        '~/assets/css/main.css'
      ],
})


