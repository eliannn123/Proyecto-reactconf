/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        principal: ["Nunito", "sans-serif"],
        second: ["Quicksand", "sans-serif"],
      },
      colors: {
        lochmara: {
          50: "#f0faff",
          100: "#e0f4fe",
          200: "#bae6fd",
          300: "#7dd1fc",
          400: "#38b7f8",
          500: "#0e9fe9",
          600: "#0284c7",
          700: "#036ba1",
          800: "#075a85",
          900: "#0c4d6e",
          950: "#083349",
        },
      },
    },
  },
  plugins: [],
};
