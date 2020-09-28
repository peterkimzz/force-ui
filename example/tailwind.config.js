const isProd = process.env.NODE_ENV === 'production'

const plugins = [require('@tailwindcss/ui')]

if (isProd) {
  plugins.push(require('force-ui/plugin'))
}
else {
  plugins.push(require('../plugin'))
}

module.exports = {
  variants: {},
  important: true,
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  plugins,
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
