// Source url
// https://gulpjs.com/docs/en/getting-started/quick-start
const { icons } = require('./gulp/tasks/sprites');
const { watch } = require('./gulp/tasks/watch');
const { build, previewBuild } = require('./gulp/tasks/build');

// Type `gulp icons` to create new svg and png icons sprite
exports.icons = icons;
// Type `gulp watch` to start the development server
exports.watch = watch;
// Type `gulp build` to build project
exports.build = build;
// Type `gulp previewBuild` to preview the built project
exports.previewBuild = previewBuild;

// see all available tasks
// $ gulp --tasks
