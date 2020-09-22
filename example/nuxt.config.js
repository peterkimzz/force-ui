export default {
  server: {
    port: 3001
  },
  target: 'server',
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
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  buildModules: ['@nuxtjs/tailwindcss'],
  modules: [],
  // plugins: [
  //   {
  //     src: '~/plugins/force-ui'
  //   }
  // ],
  components: true,
  build: {}
}