const { src, dest } = require("gulp");
const postcss = require("gulp-postcss");
const cssImport = require("postcss-import");
const simpleVars = require("postcss-simple-vars");
const nested = require("postcss-nested");
const autoprefixer = require("autoprefixer");
const mixins = require("postcss-mixins");
const hexrgba = require("postcss-hexrgba");

function stylesTask() {
  return src("./src/assets/css/styles.css")
    .pipe(
      postcss([cssImport, mixins, simpleVars, nested, hexrgba, autoprefixer])
    )
    .pipe(dest("./src/tmp/css"));
}

exports.styles = stylesTask;
