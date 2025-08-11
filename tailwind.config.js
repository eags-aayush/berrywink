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
        bg: {
          light: '#FAFAFA',
          dark: '#2E2E2E',
        },
        'bg-secondary': {
          light: '#f5c5ff',
          dark: '#19011f',
        },
        text: {
          light: '#2E2E2E',
          dark: '#FAFAFA',
        },
        primary: '#D72638',
        secondary: '#EAADFF',
        accent: '#B8F2E6',
        card: {
          light: '#ffffff',
          dark: '#1A1A1A',
        },
      },
      boxShadow: {
        'soft': '0 4px 30px rgba(0, 0, 0, 0.1)',
        'soft-dark': '0 4px 30px rgba(0, 0, 0, 0.3)',
      },
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  plugins: [],
}