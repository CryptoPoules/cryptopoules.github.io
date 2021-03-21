module.exports = {
  content: ["./docs/**/*.html"],
  css: ["./docs/css/base.css"],
  defaultExtractor: content => content.match(/[\w-:./]+(?<!:)/g) || []
};
