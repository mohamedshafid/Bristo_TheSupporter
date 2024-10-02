/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{html,js,jsx}"];
export const theme = {
  darkMode: "class",
  extend: {
    backgroundImage: {
      "bg_img": "url('./src/assets/robo.png')",
     }
  },
};
export const plugins = [];
