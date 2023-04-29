const browserSync = require("browser-sync").create();
const { watch, src, series } = require("gulp");

const { srcPath, cssPath, jsPath, tmpPath, htmlPath } = require("../config");

const { icons } = require("./icons");
const { scripts } = require("./scripts");
const { styles } = require("./styles");

const reload = browserSync.reload;
const stream = browserSync.stream;

function cssInjectTask() {
  return src(`${tmpPath}/css/styles.css`).pipe(stream());
}

function watchTask() {
  browserSync.init({
    notify: false,
    server: {
      baseDir: srcPath,
    },
  });

  watch(htmlPath).on("change", reload);
  watch(`${cssPath}/**/*.css`, series(styles, cssInjectTask));
  watch(`${jsPath}/**/*.js`).on("change", series(scripts, browserSync.reload));
}

exports.watch = series(icons, styles, scripts, watchTask);
