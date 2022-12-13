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
        navbar: '#244C62',
        // navbar: '#465E6B',
        descriptionDark: '#D6D6D6',
        description: '#818181',
        divider: '#EFEFEF',
        themeDark: '#333E4E'
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
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
