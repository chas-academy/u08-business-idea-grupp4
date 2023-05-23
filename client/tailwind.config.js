/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    letterSpacing: {
      wide: '.025em',
      wider: '.15em',
      widest: '.25em',
    },
    extend: {},
  },
  plugins: [],
}