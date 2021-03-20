module.exports = {
  parser: "postcss-scss",
  plugins: [
    require("tailwindcss"),
    require("cssnano")(),
    require("autoprefixer")
  ]
};
