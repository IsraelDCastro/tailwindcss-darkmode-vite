module.exports = {
  purge: ['./*.html'],
  // purge: [],
  darkMode: 'class',
  mode: 'jit',
  theme: {
    extend: {
      boxShadow: {
        'xl-light': '0 6px 25px -5px rgba(229, 231, 235, 0.1), 0 3px 10px -5px rgba(229, 231, 235, 0.04)',
      }
    },
  },
  variants: [
    'dark',
    'dark-hover'
  ],
  plugins: [
    require('tailwindcss-dark-mode')(),
  ],
}
