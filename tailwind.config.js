/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        customGray:"#F9F9F9",
        darkGray:"#333333",
        button:"#42A5F5"
      }
    },
  },
  plugins: [],
}

