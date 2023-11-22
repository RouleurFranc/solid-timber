/** @type {import('tailwindcss').Config} */
import FormKitVariants from '@formkit/themes/tailwindcss'

export const content = [
  './components/**/*.{js,vue,ts}',
  './layouts/**/*.vue',
  './pages/**/*.vue',
  './plugins/**/*.{js,ts}',
  './nuxt.config.{js,ts}',
  './app.vue',
  './tailwind-theme.js',
]
export const theme = {
  screens: {
    sm: '480px',
    md: '768px',
    lg: '976px',
    xl: '1440px',
    xxl: '1800px',
  },
  fontFamily: {
    body: ['"Open Sans"', 'sans-serif'],
  },
  extend: {
    colors: {
      transparent: 'transparent',
      'green-light': '#003f39',
      green: '#004b2e',
      'green-dark': '#002522',
      'green-accent': '#99b2af',
      brown: '#d1bda5',
      'brown-dark': '#b79872',
      pink: '#CC9999',
      'pink-light': '#CC8585',
      'beige-light': '#fffff2',
      beige: '#f4eee0',
      gray: '#ebe9e9',
      white: '#ffffff',
      licorice: '#230903',
      black: '#000000',
      base: '464646',
    },
    spacing: {
      128: '32rem',
      144: '36rem',
    },
    borderRadius: {
      '4xl': '2rem',
    },
  },
}
export const plugins = [FormKitVariants]
