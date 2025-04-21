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
      boxShadow:{
      'glow': 'rgba(0, 0, 0, 0.16) 0px 1px 4px;'
      }
    },
  },
  plugins: [],
}
