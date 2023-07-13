const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom_img: "0 0 10px 1px rgba(0, 0, 0)",
        focus_link: "inset 0 0 0 10px rgba(0, 0, 0,0.6)",
      },
      screens: {
        mobile: "480px",
        mobile_350: "350px",
      },
      gridTemplateColumns: {
        fit: "repeat(auto-fit, minmax(240px, 400px))",
        300: "repeat(auto-fit, minmax(240px, 300px))",
        main: "repeat(auto-fit, minmax(240px, 1fr))",
        nav: "repeat(auto-fit,minmax(90px, 1fr))",
        main_lg: "repeat(4, 1fr);",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
});
