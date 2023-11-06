/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
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
        'green-light': '#00665e',
        green: '#004b2e',
        'green-dark': '#003e39',
        'green-accent': '#dde3c3',
        coral: '#cd4631',
        'coral-old': '#f48668',
        'coral-dark': '#db785d',
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
  },
  plugins: [],
}
