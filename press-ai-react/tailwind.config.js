/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#4361ee',
          700: '#3730a3',
          800: '#1e40af',
          900: '#1e3a8a',
        },
      },
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
      },
      spacing: {
        'header': '4rem',
        'sidebar': '16rem',
        'sidebar-collapsed': '64px',
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0,0,0,0.05)',
      },
      width: {
        'sidebar': '16rem'
      }
    },
  },
  plugins: [],
} 