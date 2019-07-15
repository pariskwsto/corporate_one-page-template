const { src, dest } = require('gulp');
const modernizr = require('gulp-modernizr');

function modernizrTask(cb) {
  return src(['./app/assets/css/**/*.css', './app/assets/js/**/*.js'])
    .pipe(modernizr({
      "options" : [
        "setClasses"
      ]
    }))
    .pipe(dest('./app/temp/js/'));
  cb();
}

exports.modernizr = modernizrTask;
