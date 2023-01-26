const { src, dest, series, parallel } = require("gulp");
const svgSprite = require("gulp-svg-sprite");
const rename = require("gulp-rename");
const del = require("del");

const config = {
  mode: {
    css: {
      sprite: "sprite.svg",
      render: {
        css: {
          template: "./gulpfile.js/templates/sprite.css",
        },
      },
    },
  },
};

function startCleanSpritesTask() {
  return del(["./src/tmp/sprite", "./src/assets/img/sprites"]);
}

function createSpriteTask() {
  return src("./src/assets/img/icons/**/*.svg")
    .pipe(svgSprite(config))
    .pipe(dest("./src/tmp/sprite/"));
}

function copySpriteGraphicTask() {
  return src("./src/tmp/sprite/css/**/*.{svg,png}").pipe(
    dest("./src/assets/img/sprites")
  );
}

function copySpriteCSSTask() {
  return src("./src/tmp/sprite/css/*.css")
    .pipe(rename("_sprite.css"))
    .pipe(dest("./src/assets/css/modules"));
}

function endCleanSpritesTask() {
  return del("./src/tmp/sprite");
}

exports.icons = series(
  startCleanSpritesTask,
  createSpriteTask,
  parallel(copySpriteGraphicTask, copySpriteCSSTask),
  endCleanSpritesTask
);
