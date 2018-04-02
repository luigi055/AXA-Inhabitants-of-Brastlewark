const autoprefixer = require("autoprefixer");
const mqPacker = require("css-mqpacker"); // Pack css code within same media query size

module.exports = {
  plugins: [
    autoprefixer({
      browsers: ["last 2 versions", "ie >= 10", "and_chr >= 2.3"]
    }),
    mqPacker
  ]
};
