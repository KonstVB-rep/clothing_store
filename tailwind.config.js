const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: "480px",
      },
      gridTemplateColumns: {
        // Простая сетка из 16 столбцов
        fit: "repeat(auto-fit, minmax(250px, 1fr))",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
});
