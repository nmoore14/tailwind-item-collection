module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minHeight: {
        30: "30rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
