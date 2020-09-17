module.exports = {
  variants: {},
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  // theme: {
  //   extend: {
  //     colors: {
  //       primary: {
  //         100: '#d6ebfc',
  //         200: '#add7f9',
  //         300: '#85c2f6',
  //         400: '#5caef3',
  //         500: '#339af0',
  //         600: '#297bc0',
  //         700: '#1f5c90',
  //         800: '#143e60',
  //         900: '#0a1f30'
  //       }
  //     }
  //   }
  // },
  // plugins: [require('@tailwindcss/ui'), require('../plugin')],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  }
}
