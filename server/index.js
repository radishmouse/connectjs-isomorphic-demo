
'use strict';

// We will use express for
var express = require('express');
var webapp = express();
var path = require('path');

// We want to be able to interpret JSX on the fly
var React = require('react');
require('node-jsx').install();

// We are loading the Router and not the App itself.
var Router = require('react-router');
var AppRoutes = require('../src/routes');

// Deal with our static files, like `scripts/bundle.js`
webapp.use('/scripts', express.static(path.join(__dirname, '../static/scripts')))

webapp.get('/', function (req, res) {
    /*
        # Duplicating the browser-based rendering, in two parts.

        ## Part 1: Recreating the markup

        `index.html` contains a static HTML doc and a script tag for
        the `static/scripts/bundle.js` file.

        The `src/main.js` file is the browserify target that gets turned into
        the `static/scripts/bundle.js` file.

        In `src/main.js`, we call `React.renderComponent(AppRoutes, document.body);`
        This renders the routes, which loads the App.
        The routes watch the hashchange.
        The App renders its subcomponents, and React begins listening for events.


        Since `index.html` already has doctype, html, head, and body tags, so we must
        re-create them manually as a string here.

        Alternatively, I could have use a templating language, but I didn't
        want to add yet another library to the mix. (That would also mean I would
        have to use the templating language on the client-side. Or, I would
        have to maintain two sets of the same, albeit minimal, markup.)

        ## Part 2: Mounting the React Components with Routing

        The router I chose works nicely with React, as it is just a component.
        But, these components don't work that well with server-side rendering.

        Luckily, as of yesterday, they merged in some support for just that.
        I have to use `Router.renderRoutesToString` to render the routes.
    */
    // Based on: https://github.com/rackt/react-router/blob/1b1a62b04b73f01eb64b3a0983c9c6781e65b6b9/modules/utils/__tests__/ServerRendering-test.js
    // And: https://github.com/rackt/react-router/commit/1b1a62b04b73f01eb64b3a0983c9c6781e65b6b9
    Router.renderRoutesToString(AppRoutes, req.path, function (err, reason, string) {
        res.send('<!doctype html><html><head></head><body>' + string + '<script src="scripts/bundle.js"></script></body></html>');
    });
});


webapp.listen(1337);
