
'use strict';

var path = require('path');

var React = require('react');
var express = require('express');
var webapp = express();

// We want to be able to interpret JSX on the fly
require('node-jsx').install();

// Duplicated in src/main.js
var App = require('./app');
webapp.get('/', function (req, res) {
    /*
        The `src/main.js` file is the browserify target
        for the resulting the `bundle.js` which is loaded by the `index.html`.

        `index.html` already has the standard DOM nodes, so we must
        re-create them manually as a string here.

        Optionally, I could have used a templating language, but
        didn't want to add yet another library to the mix.

        That would also mean I would have to use the templating language on
        the client-side.

        Or, I would have to maintain two sets of the same, albeit minimal, markup.
    */
    res.send('<!doctype html><html><head></head><body>' + React.renderComponentToString(App()) + '<script src="scripts/bundle.js"></script></body></html>');
});
webapp.use('/scripts', express.static(path.join(__dirname, '../static/scripts')))

webapp.listen(1337);
