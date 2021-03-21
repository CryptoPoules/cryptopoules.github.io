const jekyllEnv = process.env.JEKYLL_ENV || "development";

module.exports = {
  plugins: [
    require("postcss-nested"),
    require("postcss-import"),
    require("tailwindcss"),
    require("autoprefixer"),
    ...(jekyllEnv != "development"
      ? [require("cssnano")({ preset: "default" })]
      : [])
  ]
};
