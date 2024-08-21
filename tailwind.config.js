/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    fontFamily: {
      manrope: ["Manrope", "sans-serif"],
    },
    extend: {
      colors: {
        customGreen: "#ABEF5F",
      },
    },
  },
  plugins: [require("daisyui")],
};
