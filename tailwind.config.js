const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./dist/**/*.html"],
  darkMode: 'class',
  theme: {
    container: {
      padding: '0.938rem',
    },
    extend: {
      screens: {
        'xs': {'max': '499px'},
        '2xs': {'max': '600px'},
        'sm': {'max': '767px'},
        'md': {'max': '1023px'},
        'only-md': {'min': '768px', 'max': "1023px"},
        'lg': "1024px",
        'only-lg': {'min': '1024px', 'max': "1199px"},
        'xl': "1200px",
        'only-xl': {'min': '1200px', 'max': "1536px"},
      },
      fontFamily: {
        heebo: ["Heebo", ...defaultTheme.fontFamily.sans],
        rubik: ["Rubik", ...defaultTheme.fontFamily.sans]
      },
      colors: {
        primary: '#333333',
        accent1: '#EE5F38',
        paragraph: "#636363",
        heading: "#000248",
        accent1_rgb: 'rgba(var(--accent1-rgb), 0.19)', 
        dark_primary_bg: "#212428",
        dark_accent1: "#181A1D"
      }
    },
  },
  corePlugins: {
    container: false
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          width: '100%',
          padding: '0 15px',
          '@screen md': {
            maxWidth: '750x',
          },
          '@screen lg': {
            maxWidth: '992px',
          },
          '@screen xl': {
            maxWidth: '1200px',
          },
        }
      })
    }
  ]
}
