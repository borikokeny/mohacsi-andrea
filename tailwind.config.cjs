/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        aboreto: ["Aboreto", "system-ui"],
        quicksand: ["Quicksand", "sans-serif"],
      },
        colors: {
        heromenta: "#CFF4EC",
        heroturquoise: "#7ED9D0",
        heroseablue: "#2DA6A6",
        herodarkseablue: "#025959",
        herogray: "#D9D9D9",
      },
    },
  },
  plugins: [],
}
