const path = require("path");

module.exports = {
  entry: "./src/assets/js/App.js",
  output: {
    filename: "App.js",
    path: path.resolve(__dirname, "./src/tmp/js"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
