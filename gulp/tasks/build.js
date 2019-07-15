const { src, dest, series } = require('gulp');
const del = require('del');
const { icons } = require('./sprites');
const imagemin = require('gulp-imagemin');
const { styles } = require('./styles');
const { scripts } = require('./scripts');
const usemin = require('gulp-usemin');
const rev = require('gulp-rev');
const cssnano = require('gulp-cssnano');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create();

// Delete build folder
function deleteBuildTask(cb) {
  return del('./build');
  cb();
}

// Copy other future folders and files
function copyOtherFilesTask(cb) {
  const pathsToCopy = [
    './app/**/*',
    '!./app/index.html',
    '!./app/assets/images/**',
    '!./app/assets/css/**',
    '!./app/assets/js/**',
    '!./app/temp',
    '!./app/temp/**'
  ];

  return src(pathsToCopy)
    .pipe(dest('./build'));
  cb();
}

// Optimize images
function optimizeImagesTask(cb) {
  return src(
    [
      './app/assets/images/**/*',
      '!./app/assets/images/icons',
      '!./app/assets/images/icons/**/*',
    ])
    .pipe(imagemin({
      // Optimize jpeg|jpg files
      progressive: true,
      // Optimize gif files
      interlaced: true,
      // Optimize svg files
      multipass: true
    }))
    .pipe(dest('./build/assets/images'));
  cb();
}

// Copy and compress the main app folder and files
function useminTask(cb) {
  return src('./app/index.html')
    .pipe(usemin({
      css: [function() {return rev()}, function() {return cssnano()}],
      js: [function() {return rev()}, function() {return uglify()}]
    }))
    .pipe(dest('./build'));
  cb();
}

function previewBuildTask(cb) {
  browserSync.init({
      server: {
          baseDir: "build"
      }
  });
  cb();
}

exports.build = series(
  deleteBuildTask,
  icons,
  copyOtherFilesTask,
  optimizeImagesTask,
  styles,
  scripts,
  useminTask
);

exports.previewBuild = previewBuildTask;
