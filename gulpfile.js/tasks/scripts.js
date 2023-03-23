const { series } = require("gulp");
const webpack = require("webpack");

const { modernizrTask } = require("./modernizr");

function scriptsTask(cb) {
  webpack(require("../../webpack.config.js"), function (error, stats) {
    if (error) {
      console.log(error.toString());
    }

    console.log(stats.toString());
    cb();
  });
}

exports.scripts = series(modernizrTask, scriptsTask);
