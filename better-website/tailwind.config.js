/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        textcolor: "#faf3dd",
        bgcolor: "#87A0AD",
        bordercolor: "#ffa600",
        accentcolor: "#6ac3c4",
      },
    },
  },
  plugins: [],
};
