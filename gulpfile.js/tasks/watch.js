const { watch, src, series } = require("gulp");
const browserSync = require("browser-sync").create();
const { scripts } = require("./scripts");
const { styles } = require("./styles");

const reload = browserSync.reload;
const stream = browserSync.stream;

function cssInjectTask() {
  return src("./src/assets/css/styles.css").pipe(stream());
}

function watchTask() {
  browserSync.init({
    notify: false,
    server: {
      baseDir: "./src",
    },
  });

  watch("./src/index.html").on("change", reload);
  watch("./src/assets/css/**/*.css", series(styles, cssInjectTask));
  watch("./src/assets/js/**/*.js").on(
    "change",
    series(scripts, browserSync.reload)
  );
}

exports.watch = watchTask;
