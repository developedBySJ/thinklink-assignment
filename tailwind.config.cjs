/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#811434",
        secondary: "#EF4859",
        "subtle-text": "#8C8CA1",
      },
    },
  },
  plugins: [],
};
