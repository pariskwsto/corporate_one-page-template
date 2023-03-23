const { build } = require("./tasks/build");
const { icons } = require("./tasks/icons");
const { previewDist } = require("./tasks/previewDist");
const { scripts } = require("./tasks/scripts");
const { styles } = require("./tasks/styles");
const { watch } = require("./tasks/watch");

exports.build = build;
exports.icons = icons;
exports.previewDist = previewDist;
exports.scripts = scripts;
exports.styles = styles;
exports.watch = watch;
