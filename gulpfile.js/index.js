const { build } = require("./tasks/build");
const { styles } = require("./tasks/styles");
const { watch } = require("./tasks/watch");

exports.build = build;
exports.styles = styles;
exports.watch = watch;
