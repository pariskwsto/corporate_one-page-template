const { src, dest, series } = require('gulp');
const { modernizr } = require('./modernizr');
const webpack = require('webpack');

function scriptsTask(cb) {
  webpack(require('../../webpack.config.js'), function(error, stats) {
    if (error) {
      console.log(error.toString());
    }

    console.log(stats.toString());
    cb();
  });
}

exports.scripts = series(modernizr, scriptsTask);
