/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
      },
      colors: {
        primary: {
          50: "#454545",
          100: "#202020",
        },
        grey: {
          100: "#BABABA",
        },
      },
    },
  },
  plugins: [],
};
