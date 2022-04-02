module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cust_back: "#f9f3e0",
        cust_primary: "#372137",
        cust_secondary: "#6a3a6b",
        cust_tertiary: "#a16997",
        cust_orange: "#e19088",
      },

      spacing: {
        128: "32rem",
        144: "36rem",
        184: "40rem",
      },
    },
  },
  fontFamily: {
    openSans: ["Open Sans", "sans-serif"],
  },
  plugins: [require("tailwind-scrollbar-hide")],
}
