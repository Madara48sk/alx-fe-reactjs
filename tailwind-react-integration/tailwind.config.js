/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Path to your React components
    "./index.html",                // Path to your main HTML file
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: 'media', // or 'class'
  variants: {
    extend: {},
  },
};