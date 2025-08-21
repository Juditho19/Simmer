

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "linear-gradient(180deg, #FFFDF9 0%, #F2F6F1 100%);",
        secondary: "#B35E42",
        dimSecondary: "rgba(179, 94, 65, 0.44)",
        green: "#24402D",
        mutedGreen: "#333333"
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        montec: ['MonteCarlo', 'cursive'],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};

