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
        'newColor':'#4B1A6F',
        'pink2': '#FF5E62',
        'purple2': '#A855F7',
        'hover': '#222222'
      },
      boxShadow:{
      'glow': 'rgba(0, 0, 0, 0.16) 0px 1px 4px;'
      }
    },
  },
  plugins: [],
}

// from-[#ff5e62] to-[#a855f7]