/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'cryon-navy': '#0A192F',
        'cryon-cyan': '#64FFDA',
        'cryon-secondary': '#495670',
      },
      borderRadius: {
        'cryon': '8px',
      },
    },
  },
  plugins: [],
}
