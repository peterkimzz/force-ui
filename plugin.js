const plugin = require('tailwindcss/plugin')

module.exports = plugin.withOptions(
  function () {
    return function ({ addBase, addUtilities, addComponents, config }) {
      addBase({
        html: {
          '-webkit-font-smoothing': 'antialiased',
          '-moz-osx-font-smoothing': 'grayscale'
        }
      })

      const BaseUtility = {
        '.input--base': {
        },
        '.input--size-small': {

        },
        '.input--size-default': {

        },
        '.input--size-large': {

        },
        '.input--border': {
          borderWidth: config('theme.borderWidth.default'),
          borderColor: config('theme.colors.gray.400'),
          borderStyle: 'solid',
          borderRadius: config('theme.borderRadius.lg'),
        }
      }

      addUtilities({
        '.btn-default': {
          color: config('theme.colors.gray.900'),
          backgroundColor: config('theme.colors.white'),
          fontWeight: config('theme.fontWeight.bold'),
          borderWidth: config('theme.borderWidth.default'),
          borderColor: config('theme.colors.gray.400'),
          borderStyle: 'solid',
          borderRadius: config('theme.borderRadius.lg'),
          outline: 'none',
          display: 'inline-block',
        },
        '.btn-size-small': {
          paddingTop: config('theme.spacing.1'),
          paddingBottom: config('theme.spacing.1'),
          paddingLeft: config('theme.spacing.4'),
          paddingRight: config('theme.spacing.4'),
          fontSize: config('theme.fontSize.xs')
        },
        '.btn-size-default': {
          paddingTop: config('theme.spacing.2'),
          paddingBottom: config('theme.spacing.2'),
          paddingLeft: config('theme.spacing.5'),
          paddingRight: config('theme.spacing.5'),
          fontSize: config('theme.fontSize.sm')
        },
        '.btn-size-large': {
          paddingTop: config('theme.spacing.3'),
          paddingBottom: config('theme.spacing.3'),
          paddingLeft: config('theme.spacing.6'),
          paddingRight: config('theme.spacing.6'),
          fontSize: config('theme.fontSize.base')
        },
      })
    }
  },
  function () {
    return {
      theme: {
        fontSize: {
          xs: '0.8rem',
          sm: '0.875rem',
          base: '1rem',
          lg: '1.125rem',
          xl: '1.25rem',
          '2xl': '1.5rem',
          '3xl': '1.875rem',
          '4xl': '2.25rem',
          '5xl': '3rem',
          '6xl': '4rem',
        },
        spacing: {
          px: '1px',
          '0': '0',
          '1': '0.35rem',
          '2': '0.5rem',
          '3': '0.75rem',
          '4': '1rem',
          '5': '1.25rem',
          '6': '1.5rem',
          '8': '2rem',
          '10': '2.5rem',
          '12': '3rem',
          '16': '4rem',
          '20': '5rem',
          '24': '6rem',
          '32': '8rem',
          '40': '10rem',
          '48': '12rem',
          '56': '14rem',
          '64': '16rem',
        },
        extend: {
          colors: {
            primary: {
              100: "#dee5fe",
              200: "#becbfd",
              300: "#9db0fc",
              400: "#7d96fb",
              500: "#5c7cfa",
              600: "#4a63c8",
              700: "#374a96",
              800: "#253264",
              900: "#121932"
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
        },
      }
    }
  }
)
