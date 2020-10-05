const isProd = process.env.NODE_ENV === 'production'

export default {
  server: {
    port: 4000
  },
  ssr: false,
  target: 'static',
  head: {
    title: 'Force UI - CSS Framework for Vue',
    description: `Don't customize theme, just use it. Made by Tailwind CSS.`,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { href: 'https://rsms.me/inter/inter.css', rel: 'stylesheet' },

      isProd ? {
        ...{ href: 'https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css', rel: 'stylesheet' },
        ...{ href: 'https://cdn.jsdelivr.net/npm/@tailwindcss/ui@latest/dist/tailwind-ui.min.css', rel: 'stylesheet' }
      } : {}
    ]
  },
  css: ['~/assets/css/tailwind.css'],
  buildModules: ['@nuxtjs/tailwindcss'],
  modules: [],
  plugins: [
    { src: '~/plugins/force-ui' }
  ],
  components: [
    { path: '~/components/', prefix: 'vue' }
  ],
}