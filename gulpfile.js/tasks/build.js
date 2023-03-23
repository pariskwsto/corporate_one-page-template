const del = require("del");
const { src, dest, series } = require("gulp");
const cssnano = require("gulp-cssnano");
const imagemin = require("gulp-imagemin");
const rev = require("gulp-rev");
const uglify = require("gulp-uglify");
const usemin = require("gulp-usemin");

const {
  distPath,
  srcPath,
  cssPath,
  imgPath,
  jsPath,
  tmpPath,
  htmlPath,
} = require("../config");

const { scripts } = require("./scripts");
const { icons } = require("./icons");
const { styles } = require("./styles");

function deleteDistFolderTask() {
  return del(distPath);
}

function copyOtherFilesTask() {
  const pathsToCopy = [
    `${srcPath}/**/*`,
    `!${cssPath}/**`,
    `!${imgPath}/**`,
    `!${jsPath}/**`,
    `!${tmpPath}`,
    `!${tmpPath}/**`,
    `!${htmlPath}`,
  ];

  return src(pathsToCopy).pipe(dest(distPath));
}

function optimizeImagesTask() {
  return src([`${imgPath}/**/*`, `!${imgPath}/icons`, `!${imgPath}/icons/**/*`])
    .pipe(
      imagemin({
        // optimize jpeg|jpg files
        progressive: true,
        // optimize gif files
        interlaced: true,
        // optimize svg files
        multipass: true,
      })
    )
    .pipe(dest(`${distPath}/assets/img`));
}

function useminTask() {
  return src(htmlPath)
    .pipe(
      usemin({
        css: [
          function () {
            return rev();
          },
          function () {
            return cssnano();
          },
        ],
        js: [
          function () {
            return rev();
          },
          function () {
            return uglify();
          },
        ],
      })
    )
    .pipe(dest(distPath));
}

exports.build = series(
  deleteDistFolderTask,
  icons,
  copyOtherFilesTask,
  optimizeImagesTask,
  styles,
  scripts,
  useminTask
);
