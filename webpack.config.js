const path = require("path");

module.exports = {
  entry: {
    App: "./src/assets/js/App.js",
    Vendor: "./src/assets/js/Vendor.js",
  },
  output: {
    filename: "[name].js",
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
