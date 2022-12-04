/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html/,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#8629FF",
          200: "#6A00F5",
          300: "#5300C0",
        },
      },
    },
  },
  plugins: [],
};
