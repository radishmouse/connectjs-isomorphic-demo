var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');

module.exports = function (src, dest) {
    return function () {
        var b = browserify({
            insertGlobals : true
        });
        b.transform(reactify);
        b.add([src]);
        return b.bundle()
            .pipe(source('bundle.js'))
            .pipe(gulp.dest(dest));
    };
}