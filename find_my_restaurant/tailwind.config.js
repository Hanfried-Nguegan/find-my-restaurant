/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pinkychoco: "#F4A4AB",
        pinkyhard: "#FA6D7A",
        yellowishBackground: "#F7DF9B",
      }
    },
  },
  variants: {
    extend: {},
  },
};

