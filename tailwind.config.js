
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        red:{
          primary:"#cf2f27",
        },
        menu: {
          primary:"#9696a3"
        },
        black:{
          primary:"#191a1f"
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
