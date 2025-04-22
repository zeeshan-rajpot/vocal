/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#c8c8c8', 
        primary2: '#ffd300', 
        hover: '#3c3c3c', 
      },
    },
  },
  plugins: [],
}