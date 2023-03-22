const { src, dest } = require("gulp");
const modernizr = require("gulp-modernizr");

function modernizrTask(cb) {
  return src(["./src/assets/css/**/*.css", "./src/assets/js/**/*.js"])
    .pipe(
      modernizr({
        options: ["setClasses"],
      })
    )
    .pipe(dest("./src/tmp/js/"));
  cb();
}

exports.modernizrTask = modernizrTask;
