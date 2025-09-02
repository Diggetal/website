/** @type {import('tailwindcss').Config} */
const path = require('path')

module.exports = {
  content: [
    path.join(__dirname, 'index.html')
  ],
  theme: {
    extend: {
      fontFamily: {
        'fredoka': ['Fredoka', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
