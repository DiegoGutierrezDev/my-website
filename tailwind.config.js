/** @type {import('tailwindcss').Config} */

// const {fontFamily} = require("tailwindcss/defaultTheme");

export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      colors: {
        'main-blue': '#66fcf1',
        'darker-blue': '#397977',
        dark: '#1b222c',
        'grey-dark': '#202833',
        'grey-dark-2': '#252e3b',
        'grey-blue': '#243443',
        'white-grey': '#80858b',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        della: ['Della Respira', 'serif'],
        hind: ['Hind', 'sans-serif'],
        proza: ['Proza Libre', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
