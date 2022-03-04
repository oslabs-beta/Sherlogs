const { red } = require('@mui/material/colors');

module.exports = {
  content: ['./index.html', './src/**/*.{jsx, js}'],
  theme: {
    extend: {},
    colors: {
      'bright-turquoise': '#0ce9d1',
      dark: '#061f4d',
      'less-dark': '#2a487d',
      red: '#d94e3a',
      'dark-teal': '#0c7fa6',
      teal: '#0c9eb2',
      'lighter-blue': '#098ff0',
      'medium-blue': '#0b6cff',
      white: '#ffffff',
      slate: 'rgb(248 250 252)',
      'dark-cyan': '#0d81a6',
      tomato: '#ff5a33',
    },
  },
  plugins: [],
};
