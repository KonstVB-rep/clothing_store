const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom_img: "0 0 10px 1px rgba(0, 0, 0)",
      },
      screens: {
        mobile: "480px",
        mobile_350: "350px",
      },
      gridTemplateColumns: {
        fit: "repeat(auto-fit, minmax(240px, 1fr))",
        175: "repeat(auto-fit, minmax(175px, 1fr))",
        nav: "repeat(auto-fit,minmax(90px, 1fr))",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
});
