const multiThemePlugin = require("./multi-theme-plugin.js");
const themes = require("./themes.json");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [multiThemePlugin({
    colorThemes: themes,
  })],
};
