/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'teal-darker': '#003f34',
      'teal-dark': '#015346',
      'teal': '#006D5B',
      'teal-light': '#28b69e',
      'teal-lighter': '#b9f5eb',
      // 'teal': '#006D5B',
      'white': '#f7f7f7',
      "black": '#000000',
      'dark': '#222222',
      'grey': '#ecebff',

      // 'purple': '#3f3cbb',
      // 'midnight': '#090841',
      // 'metal': '#565584',
      // 'tahiti': '#3ab7bf',
      // 'bubble-gum': '#ff77e9',
      // 'bermuda': '#78dcca',
    },
  },
  plugins: [],
}

