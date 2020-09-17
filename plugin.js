const plugin = require('tailwindcss/plugin')

module.exports = plugin.withOptions(
  function() {
    return function({ addBase }) {
      addBase({
        html: {
          '-webkit-font-smoothing': 'antialiased',
          '-moz-osx-font-smoothing': 'grayscale'
        }
      })
    }
  },
  function() {
    return {
      theme: {
        extend: {
          colors: {
            primary: {
              100: '#f5dbd4',
              200: '#ebb8a9',
              300: '#e0947f',
              400: '#d67154',
              500: '#cc4d29',
              600: '#a33e21',
              700: '#7a2e19',
              800: '#521f10',
              900: '#290f08'
            },
            secondary: {
              100: '#ecf5fb',
              200: '#d9ebf8',
              300: '#c7e0f4',
              400: '#b4d6f1',
              500: '#a1cced',
              600: '#81a3be',
              700: '#617a8e',
              800: '#40525f',
              900: '#20292f'
            }
          }
        }
      }
    }
  }
)
