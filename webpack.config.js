const path = require("path");

module.exports = {
  entry: ["@babel/polyfill", "whatwg-fetch", "./JS/script.js"],
  output: {
    path: path.resolve(__dirname, "./"),
    filename: "main.js/main.js",
  },
};
