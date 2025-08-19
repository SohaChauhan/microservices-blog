const js = require("@eslint/js");

module.exports = [
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        console: "readonly", // allow console
        require: "readonly", // allow require
        module: "readonly",
        process: "readonly",
      },
    },
  },
];
