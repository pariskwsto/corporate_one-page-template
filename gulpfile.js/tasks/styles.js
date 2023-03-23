const autoprefixer = require("autoprefixer");
const { src, dest } = require("gulp");
const postcss = require("gulp-postcss");
const hexrgba = require("postcss-hexrgba");
const cssImport = require("postcss-import");
const mixins = require("postcss-mixins");
const nested = require("postcss-nested");
const simpleVars = require("postcss-simple-vars");

const { cssPath, tmpPath } = require("../config");

function stylesTask() {
  return src(`${cssPath}/styles.css`)
    .pipe(
      postcss([cssImport, mixins, simpleVars, nested, hexrgba, autoprefixer])
    )
    .pipe(dest(`${tmpPath}/css`));
}

exports.styles = stylesTask;
