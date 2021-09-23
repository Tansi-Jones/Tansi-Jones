module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        opacBlack: "rgba(0,0,0,0.5)",
        blueDark: "#292635",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
