'use strict';

// BrowserSync is a better live-reload + static server
var browserSync = require('browser-sync');
var reload = browserSync.reload;

function _sync(dir){
    return function () {
        browserSync({
            open: false,
            server: {
                baseDir: dir,
            }
        });
    };
}

function _reload(opts){
    return function () {
        reload(opts || {
            stream: true
        });
    }
}

module.exports = {
    sync: _sync,
    reload: _reload
};




