module.exports = {
  purge: ['./*.html'],
  // purge: [],
  darkMode: 'class',
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        'primary': '#FF7424',
        'primary-100': '#FF640A',
        'little-white': '#FFFAFA',
        'darken': '#203341'
      },
      boxShadow: {
        'base': '0 3px 20px rgb(32 51 65 / 5%)',
        'xl-light': '0 6px 25px -5px rgba(229, 231, 235, 0.1), 0 3px 10px -5px rgba(229, 231, 235, 0.04)',
      },
      backgroundImage: theme => ({
        'scape-park': "url('https://allpuntacanatours.com/wp-content/uploads/2021/07/punta-cana-transfer-hoyo-azul-blue-hole-2.jpeg')",
        'polaris-tour': "url('https://allpuntacanatours.com/wp-content/uploads/2021/07/polaris-punta-cana.jpeg')",
        'atv-tour': "url('https://allpuntacanatours.com/wp-content/uploads/2021/08/atv-tour.jpeg')",
        'adventure-buggy': "url('https://allpuntacanatours.com/wp-content/uploads/2021/07/buggy-punta-cana.jpeg')",
      })
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
