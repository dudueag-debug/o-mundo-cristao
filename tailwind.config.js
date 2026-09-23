/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        wesleyan: {
          50: '#fdf8f4',
          100: '#faefe6',
          200: '#f5ddcc',
          300: '#ecc4a7',
          400: '#e1a37c',
          500: '#d78356',
          600: '#c86b3e',
          700: '#a65331',
          800: '#85432c',
          900: '#6c3a27',
          950: '#3a1c12',
        },
        navy: {
          800: '#14213d',
          900: '#0b132b',
          950: '#070a14'
        },
        gold: {
          400: '#f4d06f',
          500: '#e0a93b',
          600: '#c48924'
        }
      },
      fontFamily: {
        serif: ['Merriweather', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif']
      }
    },
  },
  plugins: [],
}
