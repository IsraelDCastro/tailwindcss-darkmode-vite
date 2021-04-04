module.exports = {
  purge: ['./**/*.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        'xl-light': '0 6px 25px -5px rgba(229, 231, 235, 0.1), 0 3px 10px -5px rgba(229, 231, 235, 0.04)',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
