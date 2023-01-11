/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'college': "url('/src/assets/p1.jpg')",
      }
    },
  },
  plugins: [],
}