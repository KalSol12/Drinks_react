/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        medium: '550px',
      },
      fontFamily: {
        main: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
