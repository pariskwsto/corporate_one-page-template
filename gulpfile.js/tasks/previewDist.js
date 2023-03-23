const browserSync = require("browser-sync").create();

const { distPath } = require("../config");

function previewDistTask() {
  browserSync.init({
    server: {
      baseDir: distPath,
    },
  });
}

exports.previewDist = previewDistTask;
