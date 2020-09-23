module.exports = {
  purge: {
    enabled: true
  },
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  plugins: [
    require('@tailwindcss/ui'),
    require('./plugin'),
  ]
}
