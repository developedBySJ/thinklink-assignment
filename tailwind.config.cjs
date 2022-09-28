/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#811434",
        secondary: "#EF4859",
        "subtle-text": "#8C8CA1",
        "body-text": "#485572",
        success: "#2FCA72",
        error: "#FF1C1C",
        "light-gray": "#DADADB",
        "peach-light": "#FFF2EE",
        dark: "#262730",
        frozen: "#F4F7FF",
        "alice-gray": "#ECF1F4",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
