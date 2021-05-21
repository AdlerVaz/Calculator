module.exports = {
  purge: ['./layouts/**/*.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      textColor: ['active']
    },
  },
  plugins: [],
}
