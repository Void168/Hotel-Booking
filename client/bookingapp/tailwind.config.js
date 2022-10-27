module.exports = {
  content: [
    './src/screens/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    colors: {
      'light-blue': '#92B4EC',
      'light-yellow': '#FFE69A',
      white: '#FFFFFF',
      'dark-light-yellow': '#FFD24C',
    },
    container: {
      center: true,
    },
    backgroundImage: {
      'header-pic':
        "url('https://img.freepik.com/premium-photo/beautiful-panoramic-background-with-flying-plane-blue-sky-passenger-airplane-with-landing-gear-released-takes-off-sky-travel-concept_105428-4447.jpg?w=2000')",
    },
  },
  plugins: [],
}
