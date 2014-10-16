
'use strict';

// We will use express for serving static files (css, js)
// and directing other requests to the React router.
// (We may add proxying to an API later on.)
var express = require('express');
var webapp = express();
var path = require('path');

var React = require('react');
// We want to be able to interpret JSX on the fly
require('node-jsx').install();

// We are loading the Router and not the App itself.
var Router = require('react-router');
var AppRoutes = require('../src/routes');

// Deal with our static files first, e.g. `scripts/bundle.js`
['scripts', 'stylesheets', 'fonts'].forEach(function (asset) {
    webapp.use('/' + asset, express.static(path.join(__dirname, '../client/' + asset)));
});

// Other than our /scripts folder, we want to match any other route
// and let our react app take over, based on the value of req.path
webapp.get('*', function (req, res) {
    /*
        # Duplicating the browser-based rendering, in two parts.

        ## Part 1: Recreating the markup

        `client/index.html` contains a static HTML doc and a script tag for
        the `client/scripts/bundle.js` file.

        The `src/main.js` file is the browserify target that gets turned into
        the `client/scripts/bundle.js` file.

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
        But, it doesn't work that well with server-side rendering.

        Luckily, as of yesterday (2014/10/13), they merged in some support for just that.
        I have to use `Router.renderRoutesToString` to render the routes.
    */
    // Based on: https://github.com/rackt/react-router/blob/1b1a62b04b73f01eb64b3a0983c9c6781e65b6b9/modules/utils/__tests__/ServerRendering-test.js
    // And: https://github.com/rackt/react-router/commit/1b1a62b04b73f01eb64b3a0983c9c6781e65b6b9

    var htmlString = '<!doctype html><html><head>';
    htmlString += '<meta charset="utf-8">';
    htmlString += '<title>isomorphic demo</title>';
    htmlString += '<meta name="viewport" content="width=device-width, initial-scale=1">';
    htmlString += '<link rel="stylesheet" href="stylesheets/application.css">';
    htmlString += '</head><body>';
    htmlString += htmlString;
    htmlString += '<script src="scripts/bundle.js"></script></body></html>';
    Router.renderRoutesToString(AppRoutes, req.path, function (err, reason, string) {
        res.send(htmlString);
    });
});

var PORT = 1337;
webapp.listen(PORT);
console.log('Listening on ' + PORT);

