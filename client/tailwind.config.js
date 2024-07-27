/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "300px",
      xsm: "500px",
      sm: "640px",
      md: "768px",
      ml: "828px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1536px",
    },
    extend: {
      animation: {
        circle: "circle 6s linear infinite",
        "circle-reverse": "circle-reverse 6s linear infinite",
      },
      fontFamily: {
        sans: ["Oswald", "sans-serif"],
        bebas: ["Bebas Neue", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
