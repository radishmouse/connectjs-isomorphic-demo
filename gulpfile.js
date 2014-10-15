// Path configs
var paths = {
    baseDir: './client',
    bundleName: 'bundle.js',
    js: {
        app: './src/main.js', // entry point for browserify'd application
        src: './src/**/*.js',
        dest: './client/scripts/'
    }
};

var gulp = require('gulp');

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