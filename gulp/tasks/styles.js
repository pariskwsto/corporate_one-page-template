const { src, dest } = require('gulp');
const postcss = require('gulp-postcss');
const cssImport = require('postcss-import');
const mixins = require('postcss-mixins');
const cssvars = require('postcss-simple-vars');
const nested = require('postcss-nested');
const hexrgba = require('postcss-hexrgba');
const autoprefixer = require('autoprefixer');

function cssTask(cb) {
  return src('./app/assets/css/styles.css')
    .pipe(postcss([cssImport, mixins, cssvars, nested, hexrgba, autoprefixer]))
    .pipe(dest('./app/temp/css'));
  cb();
}

exports.styles = cssTask;
