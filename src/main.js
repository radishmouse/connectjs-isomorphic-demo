'use strict';

var React = require('react');
window.React = React; // So we can use the nice React dev tools.

// duplicated in index.js
var AppRoutes = require('./routes');
/*
    AppRouter is the real entry point for our application.

    The following mounts the AppRouter to root DOM element.

    Even if the server prerenders our component to HTML,
    we will still have to run this line.

    It makes sure that our Virtual DOM is set up and
    that the React components are watching for events.

    Thanks to browserify, this line will simply run and do
    its job, since the module definition is evaluated
*/
React.renderComponent(AppRoutes, document.body);