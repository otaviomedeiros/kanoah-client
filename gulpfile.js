var gulp = require("gulp");
var webpack = require("webpack");
var gutil = require("gulp-util");
var webpackConfig = require("./webpack.config");

gulp.task("watch", (callback) => {
  webpack(config(), (err, stats) => {
    if(err) throw new gutil.PluginError("webpack", err);
    gutil.log("[webpack]", stats.toString());
    callback();
  });
});

const config = () => {
  webpackConfig.watch = true;
  webpackConfig.watchOptions = { poll: true };
  return webpackConfig;
}
