/** @type {import('tailwindcss').Config} */

export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      colors: {
        'main-bg': '#0A435D',
        'main': '#08354a',
        'secondary-blue': '#00A0F4',
        'light-blue': '#00BDFF',
        'orange': '#EA9A28',
        'green-lime': '#CBF279'
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
