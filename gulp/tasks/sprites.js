const { series, src, dest } = require('gulp');
const svgSprite = require('gulp-svg-sprite');
const rename = require('gulp-rename');
const del = require('del');
const svg2png = require('gulp-svg2png');

// Source url
// https://www.npmjs.com/package/gulp-svg-sprite
var config = {
  shape: {
    spacing: {
      padding: 1
    }
  },
  mode: {
    css: {
      variables: {
        replaceSvgToPng: function() {
          return function(sprite, render) {
            return render(sprite).split('.svg').join('.png');
          }
        }
      },
      sprite: 'sprite.svg',
      render: {
        css: {
          template: './gulp/templates/sprite.css'
        }
      }
    }
  }
};

function startCleanSpritesTask(cb) {
  return del(['./app/temp/sprite', './app/assets/images/sprites']);
  cb();
}

function createSpriteTask(cb) {
  return src('./app/assets/images/icons/**/*.svg')
    .pipe(svgSprite(config))
    .pipe(dest('./app/temp/sprite/'));
  cb();
}

function createPngCopyTask(cb){
  return src('app/temp/sprite/css/*.svg')
    .pipe(svg2png())
    .pipe(dest('app/temp/sprite/css'));
  cb();
}

function copySpriteGraphicTask(cb) {
  return src('./app/temp/sprite/css/**/*.{svg,png}')
    .pipe(dest('./app/assets/images/sprites'));
  cb();
}

function copySpriteCSSTask(cb) {
  return src('./app/temp/sprite/css/*.css')
    .pipe(rename('_sprite.css'))
    .pipe(dest('./app/assets/css/modules'));
  cb();
}

function endCleanSpritesTask(cb) {
  return del('./app/temp/sprite');
  cb();
}

exports.icons = series(
  startCleanSpritesTask,
  createSpriteTask,
  createPngCopyTask,
  copySpriteGraphicTask,
  copySpriteCSSTask,
  endCleanSpritesTask
);
