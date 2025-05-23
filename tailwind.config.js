/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',        
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Varela Round"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
          display: ['"Amatic SC"', 'cursive']
        }
    },
  },
  plugins: [],
}

