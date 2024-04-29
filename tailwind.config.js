/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'violec': '#170149',
        'bluec': '#d0cdff'
      }
    },
  },
  plugins: [],
}