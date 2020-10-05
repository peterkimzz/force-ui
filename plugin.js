const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

const fontSize = {
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
}

module.exports = plugin.withOptions(
  function () {
    return function ({ addBase, addUtilities, addComponents, config }) {
      addBase({
        html: {
          '-webkit-font-smoothing': 'antialiased',
          '-moz-osx-font-smoothing': 'grayscale',
          // backgroundColor: config('theme.colors.gray.50')
        }
      })

      /** Utilities */
      const InputUtility = {
        '.input--default': {
          outline: 'none',
          display: 'inline-block',
          maxWidth: '100%',
          transitionProperty: config('theme.transitionProperty.all'),
          transitionDuration: config('theme.transitionDuration.150'),
          transitionTimingFunction: config('theme.transitionTimingFunction.in-out'),
        },
        '.input--box-shadow': {
          boxShadow: config('theme.boxShadow.sm')
        },
        '.input--border-default': {
          borderStyle: 'solid',
          borderWidth: config('theme.borderWidth.default'),
          borderColor: config('theme.colors.gray.300'),
          borderRadius: config('theme.borderRadius.lg'),
        },
        '.input--text-color-default': {
          color: config('theme.colors.gray.800'),
        },
        '.input--bg-color-default': {
          backgroundColor: config('theme.colors.white'),
        },
        '.input--bg-color-default-hover': {
          backgroundColor: config('theme.colors.gray.100'),
        },
        '.input--outline': {
          boxShadow: config('theme.boxShadow.outline-gray'),
        },
        '.input--hover-default': {
          borderColor: config('theme.colors.gray.400'),
        },
        '.input--size-small': {
          paddingTop: config('theme.spacing[1.5]'),
          paddingBottom: config('theme.spacing[1.5]'),
          paddingLeft: config('theme.spacing.4'),
          paddingRight: config('theme.spacing.4'),
          fontSize: config('theme.fontSize.xs')
        },
        '.input--size-medium': {
          paddingTop: config('theme.spacing.2'),
          paddingBottom: config('theme.spacing.2'),
          paddingLeft: config('theme.spacing.4'),
          paddingRight: config('theme.spacing.4'),
          fontSize: config('theme.fontSize.sm')
        },
        '.input--size-large': {
          paddingTop: config('theme.spacing.3'),
          paddingBottom: config('theme.spacing.3'),
          paddingLeft: config('theme.spacing.5'),
          paddingRight: config('theme.spacing.5'),
          fontSize: config('theme.fontSize.base')
        },
        '.input--prefix-icon-padding': {
          paddingLeft: config('theme.spacing.10')
        },
        '.input--suffix-icon-padding': {
          paddingRight: config('theme.spacing.10')
        },
      }

      addUtilities({
        ...InputUtility
      })
    }
  },
  function () {
    return {
      theme: {
        fontSize,
        fontFamily: {
          sans: [
            'Inter',
            ...defaultTheme.fontFamily.sans
          ]
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
          },
        }
      }
    }
  }
)
