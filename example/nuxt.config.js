const isProd = process.env.NODE_ENV === 'production'

const config = {
  server: {
    port: 3001
  },
  ssr: false,
  target: 'static',
  head: {
    title: process.env.npm_package_name || '',
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
  components: true,
}
console.log(config)

export default config