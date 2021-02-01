module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        pink: "#ed5a6c",
        brown: "#2e050a",
        pinkGray: "#fdf1f3",
      },
    },
    boxShadow: {
      sm: "0 1px 2px 0 rgba(237, 90, 108, 0.05)",
      DEFAULT:
        "0 1px 3px 0 rgba(237, 90, 108, 0.1), 0 1px 2px 0 rgba(237, 90, 108, 0.06)",
      md:
        "0 4px 6px -1px rgba(237, 90, 108, 0.1), 0 2px 4px -1px rgba(237, 90, 108, 0.06)",
      lg:
        "0 10px 15px -3px rgba(237, 90, 108, 0.1), 0 4px 6px -2px rgba(237, 90, 108, 0.05)",
      xl:
        "0 20px 25px -5px rgba(237, 90, 108, 0.1), 0 10px 10px -5px rgba(237, 90, 108, 0.04)",
      "2xl": "0 25px 50px -12px rgba(237, 90, 108, 0.25)",

      "3xl": "0 35px 60px -15px rgba(237, 90, 108, 0.3)",
      inner: "inset 0 2px 4px 0 rgba(237, 90, 108, 0.06)",
      none: "none",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
