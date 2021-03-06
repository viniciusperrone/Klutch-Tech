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
        flexoMedium: 'Flexo-Medium, sans-serif',
        flexoMediumIt: 'Flexo-MediumIt, sans-serif',
        flexoRegular: 'Flexo-Regular, sans-serif',
      },
      colors: {
        blue: {
          100: '#E8F3F4',
          400: '#228A95',
          500: '#2D98B4',
          600: '#187680'
        },
        orange: {
          400: '#EF9C4B',
          600: '#FD8030'
        },
        green: {
          100: '#E8FFE3',
          300: '#91E28D',
          700: '#31AC2B'
        },
        gray: {
          200: '#F8F8F8',
          300: '#E6E6E6',
          900: '#777777'
        },
        red: {
          200: '#FF7070'
        }

      },
      keyframes: {
        apperFromLeft: {
          'from': { transform: 'translateX(0)' },
          'to': { transform: 'translateX(-50%)' }
        },
        appearFromBottom: {
          'from': { transform: 'translateY(100px)' },
          'to': { transform: 'translateY(0)' }
        },
        actionAppear: 'apperFromLeft 0.1s appearFromBottom 0.5s'
      }
    },
  },
  plugins: [],
}
