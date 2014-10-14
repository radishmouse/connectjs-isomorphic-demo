// var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

function _sync(dir){
    return function () {
        browserSync({
            server: {
                baseDir: dir
            }
        });
    };
}

function _reload(opts){
    return function () {
        reload(opts || {
            stream: true
        })
    }
}

module.exports = {
    sync: _sync,
    reload: _reload
};




