module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: [],
  theme: {
    extend: {
      width: {
        100: "28rem",
        120: "40rem",
      },
      boxShadow: {
        "3xl": "inset 2px 0px 3px",
      },
      dropShadow: {
        "3xl": "0 35px 35px rgba(0, 0, 0, 0.25)",
        "4xl": [
          "0 35px 35px rgba(0, 0, 0, 0.25)",
          "0 45px 65px rgba(0, 0, 0, 0.15)",
        ],
      },
    },
  },
  plugins: [],
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
};
