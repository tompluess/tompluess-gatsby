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
        yellow: { ...colors.amber, 500: "#F9B233" },
        purple: { ...colors.violet, 500: "#454C9B" },
        blue: { ...colors.blue, 500: "#00ADEF" },
        gray: {
          ...colors.gray,
          100: "#F8F8F8",
          200: "#F0F0EF",
          400: "#D1D1D1",
          700: "#7A7A7A",
          900: "#191919",
        },
        green: { ...colors.emerald, 500: "#63B450" },
        red: { ...colors.red, 500: "#E8336E" },
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
