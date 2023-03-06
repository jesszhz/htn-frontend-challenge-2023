/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        'orange-1': '#EA9D0A',
        'blue-1': '#107FF3',
        'pink-1': '#E455BC',
        'midnight-1': '#1C2B35'
      }
    },
    fontFamily: {
      heading: ['Castledown', "'Segoe UI'", 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      sans: ['Satoshi', "'Segoe UI'", 'Roboto', 'Helvetica', 'Arial', 'sans-serif']
    }
  },
  plugins: [require('@tailwindcss/line-clamp')]
};
