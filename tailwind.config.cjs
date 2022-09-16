/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'anyline': '#0099ff',
        'anylineDark': '#028ce8'
      }
    },
  },
  plugins: [],
}
