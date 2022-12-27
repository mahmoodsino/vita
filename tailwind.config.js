/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins"],
      },
      colors: {
        gray1: "#616161",
        gray2:"#787878",
        gray3:"#F6F6F6",
        skyblue:"#00ACED",
        primary:"#95D2E8",
        secondary:"#DB00FF",
        pink1:"#DF00A1"
      },
    },
  },
  plugins: [],
};
