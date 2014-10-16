'use strict';

// BrowserSync is a better live-reload + static server
var browserSync = require('browser-sync');

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

module.exports = {
    sync: _sync,
    reload: browserSync.reload
};




