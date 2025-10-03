/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        mint: "#1AAD7A",   
        secondary: "#ECFDF7",
        main : "#139E75",
        opacitygray:"#dadada",
        numberRed : '#D72F2F',
        Primary950:"#1AAD7A",
        textgray:"#94A3B8",
        LoginBG : "#F2FFF4"

      },
    },
  },
  plugins: [],
};
