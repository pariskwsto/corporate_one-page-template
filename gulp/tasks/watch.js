const { series, watch, src } = require('gulp');
const { styles } = require('./styles');
const { scripts } = require('./scripts');
const browserSync = require('browser-sync').create();

function cssInjectTask(cb) {
  return src("./app/temp/css/styles.css")
    .pipe(browserSync.stream());
}

function watchTask(cb) {
  browserSync.init({
      server: {
          baseDir: "app"
      }
  });

  watch('./app/index.html').on('change', browserSync.reload);
  watch('./app/assets/css/**/*.css', series([styles, cssInjectTask]));
  watch('./app/assets/js/**/*.js').on('change', series([scripts, browserSync.reload]));
  cb();
}

exports.watch = watchTask;
