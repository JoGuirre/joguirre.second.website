/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        textcolor: "#faf3dd", //beige
        secondcolor: "#c8d5b9", // light green
        thirdcolor: "#8fc0a9", // seafoam
        fourthcolor: "#68b0ab", // verdigris
        fifthcolor: "#4B90AD", // grayish
        sixthcolor: "#767DAD", //compliment to first
        bgcolor: "#87A0AD",
      },
    },
  },
  plugins: [],
};
