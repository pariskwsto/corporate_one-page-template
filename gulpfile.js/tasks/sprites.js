const { src, dest, series, parallel } = require("gulp");
const svgSprite = require("gulp-svg-sprite");
const rename = require("gulp-rename");
const del = require("del");
const svg2png = require("gulp-svg2png");

const config = {
  shape: {
    spacing: {
      padding: 1,
    },
  },
  mode: {
    css: {
      variables: {
        replaceSvgToPng: function () {
          return function (sprite, render) {
            return render(sprite).split(".svg").join(".png");
          };
        },
      },
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

function createPngCopyTask() {
  return src("./src/tmp/sprite/css/*.svg")
    .pipe(svg2png())
    .pipe(dest("./src/tmp/sprite/css"));
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
  createPngCopyTask,
  parallel(copySpriteGraphicTask, copySpriteCSSTask),
  endCleanSpritesTask
);
