/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif"
      },
       colors: {
      orange: {
        200: '#FFD69B', // Or customize as per your UI design
      },
    },
    },
  },
  plugins: [require("daisyui")],
}

