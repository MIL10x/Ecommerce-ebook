/** @type {import('tailwindcss').Config} */
export default {
  darkMode:"selector",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      fontFamily:{
        "Fontz": ["Playwrite CU", "cursive","sans-serif"],
        "Pop":["Poppins", "sans-serif"]
      }
    },
  },
  plugins: [],
}

