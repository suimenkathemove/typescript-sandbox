module.exports = {
  plugins: ["stylelint-order"],
  extends: ["stylelint-config-standard", "stylelint-config-recess-order"],
  rules: {
    // "string-quotes": "single",
    "color-hex-length": "long",
  },
  ignoreFiles: "node_modules/**",
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      customSyntax: "postcss-styled-syntax",
    },
    {
      files: ["**/*.scss"],
      customSyntax: "postcss-scss",
    },
  ],
};
