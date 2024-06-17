// {
//   "singleQuote": false,
//   "trailingComma": "es5",
//   "printWidth": 80
// }

module.exports = {
  trailingComma: "es5",
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: false,
  printWidth: 120,
  bracketSpacing: true,
  jsxBracketSameLine: true,
  // "endOfLine": "lf",
  endOfLine: "auto",

  overrides: [
    {
      files: ["*.json", "*.xml"],
      options: {
        tabWidth: 2,
      },
    },
  ],
};