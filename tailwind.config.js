/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './screens/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Poppins', 'sans-serif'],
      },
      color: {
        customOrange: '#D3A762',
      },
    },
  },
  plugins: [],
};
