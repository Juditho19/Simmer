

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#F7EEDD",
        secondary: "#B35E41",
        dimSecondary: "rgba(179, 94, 65, 0.44)",
        green: "#24402D",
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

