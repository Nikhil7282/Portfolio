/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    // screens: {
    //   sm: "576px",
    // },
    screens: {
      xs: "576px",
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
