/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      },
      colors: {
        'code-blue': '#2a00ff',
        'code-black': '#03040d',
        'code-coklat': '#6b0900',
        'code-purple': '#7f0099',
        'code-green': '#409900',
        'code-aqua': '#478585',
        'code-primary': 'rgb(245, 245, 245)',
      }
    },
  },
  plugins: [],
}

