var paths = {
    baseDir: './static',
    js: {
        app: './src/app.js', // entry point for application
        src: './src/**/*.js',
        dest: './static/scripts/'
    }
}
var gulp = require('gulp');
var bSync = require('./tasks/sync');
var browserify = require('./tasks/browserify')(paths.js.app, paths.js.dest);

gulp.task('build', browserify);
gulp.task('browser-sync', ['build'], bSync.sync(paths.baseDir));

gulp.task('default', ['browser-sync'], function () {
    gulp.watch(paths.js.src, ['build', bSync.reload]);
})