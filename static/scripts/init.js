var React = require('react');
window.React = React; // So we can use the nice React dev tools.

// duplicated in index.js
var App = require('./app');
/*
    The following attaches the App to our basic DOM.
    Even if the server prerenders our component to HTML,
    we still have run this line.

    It makes sure that our Virtual DOM is set up and
    that the React components are watching for events.

    Thanks to browserify, this line will simply run and do
    its job, since the module definition is evaluated
*/
React.renderComponent(App(), document.body);