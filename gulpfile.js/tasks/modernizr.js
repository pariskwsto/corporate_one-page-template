const { src, dest } = require("gulp");
const modernizr = require("gulp-modernizr");

const { cssPath, jsPath, tmpPath } = require("../config");

function modernizrTask(cb) {
  return src([`${cssPath}/**/*.css`, `${jsPath}/**/*.js`])
    .pipe(
      modernizr({
        options: ["setClasses"],
      })
    )
    .pipe(dest(`${tmpPath}/js/`));
  cb();
}

exports.modernizrTask = modernizrTask;
