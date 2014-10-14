var paths = {
    baseDir: './client',
    js: {
        app: './src/main.js', // entry point for application
        src: './src/**/*.js',
        dest: './client/scripts/'
    }
};

var gulp = require('gulp');
var bSync = require('./tasks/sync');
var browserify = require('./tasks/browserify')(paths.js.app, paths.js.dest);

gulp.task('build', browserify);
gulp.task('browser-sync', ['build'], bSync.sync(paths.baseDir));

gulp.task('default', ['browser-sync'], function () {
    gulp.watch(paths.js.src, ['build', function () {
        bSync.reload(); // full reload
    }]);
});