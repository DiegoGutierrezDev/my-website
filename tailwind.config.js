/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {},
    colors: {
      'main-blue': '#0A435D',
      'secondary-blue': '#00A0F4',
      'light-blue': '#00BDFF',
      'orange': '#EA9A28',
      'green-lime': '#CBF279'
    },
  },
  plugins: [],
}

