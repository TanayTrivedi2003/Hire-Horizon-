/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50:  '#f0f4fb',
          100: '#d9e3f5',
          200: '#b3c8eb',
          300: '#7da3da',
          400: '#4a7ec8',
          500: '#2a60b5',
          600: '#1a4fa0',
          700: '#153f80',
          800: '#0d2a5c',
          900: '#0c1b35',
          950: '#060e1e',
        },
        gold: {
          50:  '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#f5c842',
          500: '#c9930a',
          600: '#a77108',
          700: '#895507',
          800: '#6b400a',
          900: '#4a2c0c',
        },
      },
      fontFamily: {
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
