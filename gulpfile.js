var gulp = require('gulp');
var config = require('./config');
var paths = config.paths;

// Actual task functions are in `tasks` folder
var bSync = require('./tasks/sync');
var browserify = require('./tasks/browserify')(paths.js.app, paths.bundleName, paths.js.dest);

gulp.task('build', browserify);
gulp.task('browser-sync', ['build'], bSync.sync(paths.baseDir));

gulp.task('default', ['browser-sync'], function () {
    gulp.watch(paths.js.src, ['build', function () {
        bSync.reload(); // full reload
    }]);
});