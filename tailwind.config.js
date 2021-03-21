const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [
    "./_includes/**/*.html",
    "./_layouts/**/*.html",
    "./_posts/*.md",
    "./*.html"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    flex: {
      "2": "2 2 0%",
      ...defaultTheme.flex
    },
    fontFamily: {
      default: '"Raleway", Helvetica Neue, Helvetica, Arial, sans-serif',
      sans: '"Roboto", Helvetica Neue, Helvetica, Arial, sans-serif',
      heading: ["'Lilita One'", "cursive"]
    },
    extend: {
      backgroundImage: theme => ({
        "hero-landscape": "url('/images/home/landing.landscape.png')",
        "hero-portrait": "url('/images/home/landing.portrait.png')",
        "hero-separator":
          "linear-gradient(-3.5deg, rgba(255,240,239,1) 49%, rgba(255,240,239,0) 50%);"
      }),
      colors: {
        primary: {
          50: "#FFF0EF",
          100: "#F8E0E2",
          200: "#F5CCCE",
          500: "#DC4179",
          700: "#9E648E",
          800: "#92405E",
          900: "#6A214F"
        }
      }
    },
    typography: theme => ({
      DEFAULT: {
        css: {
          color: "#6D5966",
          fontFamily: theme("fontFamily.default"),
          h1: {
            fontFamily: theme("fontFamily.heading")
          },
          button: {
            fontFamily: theme("fontFamily.button")
          }
        }
      }
    })
  },
  variants: {
    extend: {}
  },
  plugins: [require("@tailwindcss/typography")]
};
