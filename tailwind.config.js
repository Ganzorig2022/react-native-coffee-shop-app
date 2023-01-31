/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './src/screens/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        customOrange: '#D3A762',
        gray100: '#EAEAEA',
        gray500: '#969495',
      },
    },
  },
  plugins: [],
};
