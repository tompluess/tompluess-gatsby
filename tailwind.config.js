const colors = require("tailwindcss/colors");
module.exports = {
  theme: {
    extend: {
      width: {
        28: "7rem",
        80: "20rem",
        100: "25rem",
        120: "30rem",
        160: "48rem",
      },
      height: {
        28: "7rem",
        80: "20rem",
        96: "24rem",
        100: "25rem",
        110: "27rem",
        120: "30rem",
      },
      maxWidth: {
        48: "12rem",
        "12xl": "106rem",
      },
      margin: {
        "-1/2": "-50%",
        revertFooter: "-5rem",
        80: "20rem",
      },
      colors: {
        current: "currentColor",
        yellow: { ...colors.amber, 500: "#f9b233" },
        purple: { ...colors.violet, 500: "#454c9b" },
        blue: { ...colors.blue, 500: "#00adef" },
        gray: {
          ...colors.gray,
          100: "#f8f8f8",
          200: "#f0f0ef",
          400: "#d1d1d1",
          700: "#7a7a7a",
          900: "#191919",
        },
        green: { ...colors.emerald, 500: "#63b450" },
        red: { ...colors.red, 500: "#e8336e" },
        orange: { 500: "#ed8936" },
      },
      opacity: {
        90: "0.9",
      },
      fontSize: {
        "7xl": "6rem",
      },
      zIndex: {
        "-1": "-1",
      },
    },
  },
  plugins: [ ],
  content: ["./src/**/*.js"],
};
