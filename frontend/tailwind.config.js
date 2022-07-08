/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      fontFamily: {
        flexoBlack: 'Flexo-Black, sans-serif',
        flexoBold: 'Flexo-Bold, sans-serif',
        flexoBoldIt: 'Flexo-BoldIt, sans-serif',
        flexoMediumIt: 'Flexo-MediumIt, sans-serif',
        flexoRegular: 'Flexo-Regular, sans-serif',
      },
      colors: {
        blue: {
          400: '#228A95',
          600: '#187680'
        },
        orange: {
          400: '#EF9C4B',
          600: '#FD8030'
        },
        gray: {
          200: '#F8F8F8',
          900: '#777777'
        },

      }
    },
  },
  plugins: [],
}