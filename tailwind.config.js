/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/client/index.html", "./src/client/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transitionProperty: {
        spacing: "margin",
      },
    },
  },
  plugins: [],
};
