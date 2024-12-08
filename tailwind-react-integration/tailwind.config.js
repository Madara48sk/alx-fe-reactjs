/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", //  This is crucial!  It tells Tailwind where to find your React components.
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}