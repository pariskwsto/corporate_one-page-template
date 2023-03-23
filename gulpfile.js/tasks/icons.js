const del = require("del");
const { src, dest, series, parallel } = require("gulp");
const rename = require("gulp-rename");
const svgSprite = require("gulp-svg-sprite");
const svg2png = require("gulp-svg2png");

const { cssPath, imgPath, tmpPath } = require("../config");

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
  return del([`${tmpPath}/sprite`, `${imgPath}/sprites`]);
}

function createSpriteTask() {
  return src(`${imgPath}/icons/**/*.svg`)
    .pipe(svgSprite(config))
    .pipe(dest(`${tmpPath}/sprite/`));
}

function createPngCopyTask() {
  return src(`${tmpPath}/sprite/css/*.svg`)
    .pipe(svg2png())
    .pipe(dest(`${tmpPath}/sprite/css`));
}

function copySpriteGraphicTask() {
  return src(`${tmpPath}/sprite/css/**/*.{svg,png}`).pipe(
    dest(`${imgPath}/sprites`)
  );
}

function copySpriteCSSTask() {
  return src(`${tmpPath}/sprite/css/*.css`)
    .pipe(rename("_sprite.css"))
    .pipe(dest(`${cssPath}/modules`));
}

function endCleanSpritesTask() {
  return del(`${tmpPath}/sprite`);
}

exports.icons = series(
  startCleanSpritesTask,
  createSpriteTask,
  createPngCopyTask,
  parallel(copySpriteGraphicTask, copySpriteCSSTask),
  endCleanSpritesTask
);
