/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        // navbar: '#244C62',
        // navbar: '#465E6B',
        navbar: '#5E7E8F',
        navbarDark: '#466679',
        subHeader: '#AEAEAE',
        descriptionDark: '#D6D6D6',
        description: '#818181',
        divider: '#EFEFEF',
        themeDark: '#333E4E',
        cardDark: '#3E4B5E',
        // themeDark: '#2A3544'
        // themeDark: '#3D4D59'
      },
      height: {
        'screen': [
          '100vh','100dvh'
        ]
      },
      minHeight: {
        'screen': [
          '100vh','100dvh'
        ]
      },
      maxHeight: {
        'screen': [
          '100vh','100dvh'
        ]
      },
      keyframes: {
        wiggle: {
          '0%': { transform: 'rotate(0deg) translateY(0px)' },
          '25%': { transform: 'rotate(-1deg) translateY(-4px)' },
          '50%': { transform: 'rotate(0deg) translateY(0px)' },
          '75%': { transform: 'rotate(1deg) translateY(4px)' },
          '100%': { transform: 'rotate(0deg) translateY(0px)' },
        },
      },
      animation: {
        'wiggle': 'wiggle 3s linear infinite',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}