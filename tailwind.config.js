/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
      colors: {
        primary: {
          50:  '#f0f9ff',
          100: '#e0f2fe',
          200: '#b9e6fe',
          300: '#7cd3fd',
          400: '#38bdf8',
          500: '#2b90cf',
          600: '#1e78b5',
          700: '#165f90',
          800: '#144d76',
          900: '#144061',
          950: '#0b2640',
        },
        accent: {
          50:  '#f0fdfb',
          100: '#ccfbf3',
          200: '#9af5e8',
          300: '#5ee9d6',
          400: '#2dd3bc',
          500: '#4ebcaa',
          600: '#3aa896',
          700: '#2b8878',
          800: '#256c60',
          900: '#21564e',
          950: '#10312e',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
