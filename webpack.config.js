const path = require('path');

module.exports = {
  entry: {
    App: "./app/assets/js/App.js",
    Vendor: "./app/assets/js/Vendor.js"
  },
  output: {
    path: path.resolve(__dirname, "./app/temp/js"),
    filename: "[name].js"
  },
  // Source url
  // https://github.com/babel/babel-loader
  module: {
    rules: [
      {
        // we want to use loader only for javascript files
        test: /\.m?js$/,
        // except node_modules or bower_components
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}
