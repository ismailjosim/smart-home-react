/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#63e894",

          "secondary": "#87d33f",

          "accent": "#f7b4e9",

          "neutral": "#18232A",

          "base-100": "#F1F1F4",

          "info": "#4B8EEC",

          "success": "#17968B",

          "warning": "#F5C238",

          "error": "#E8646D",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
