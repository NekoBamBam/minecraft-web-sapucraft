/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        minecraft:["Minecraft", "sans-serif"],
        arial:["arial"],
        futura:["futura-bold"],
        icon:["icon"],
      },
    },
  },
  plugins: [require("daisyui")],
};
