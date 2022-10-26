/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './screens/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js, ts, jsx, tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    colors: {
      lightBlue: '#B5EAEA',
      lightLime: '#EDF6E5',
      lightPink: '#FFBCBC',
      darkLightPink: '#F38BA0',
    },
  },
  plugins: [],
}
