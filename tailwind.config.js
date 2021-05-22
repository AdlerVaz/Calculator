module.exports = {
  purge: {
    enabled: true,
    content: ['./layouts/**/*.html'],
    options: {
      safelist:['dark']
    }
  },
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
