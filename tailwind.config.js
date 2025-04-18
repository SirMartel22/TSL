/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pink': '#FF4DCA',
        'purple': '#A64DFF',
        'darkpurple': '#1A0B2E',
        'lighterpurple': '#2E1A47',
        'newColor':'#4B1A6F'
      },
    },
  },
  plugins: [],
}
