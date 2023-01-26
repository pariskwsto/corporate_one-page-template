const { build } = require("./tasks/build");
const { icons } = require("./tasks/sprites");
const { styles } = require("./tasks/styles");
const { watch } = require("./tasks/watch");

exports.build = build;
exports.icons = icons;
exports.styles = styles;
exports.watch = watch;
