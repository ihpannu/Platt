module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
      },
      boxShadow: {
        primary: "var(--primary-shadow)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
