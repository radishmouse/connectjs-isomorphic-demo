/** @jsx React.DOM */
'use strict';

var Router = require('react-router');
var Route = Router.Route;
var Routes = Router.Routes;
var DefaultRoute = Router.DefaultRoute;
// var NotFoundRoute = Router.NotFoundRoute;

var App = require('./App');
var HelloWorld = require('./components/hello');
var About = require('./components/about');
var Yep = require('./components/yep');

// This is a tricky thing.
// I want to detect whether I'm in the browser or if I'm on the server
var dev = false;

var routes = (
    <Routes
        location={ dev ? 'hash' : 'history' }
        scrollBehavior="browser"
    >
        <Route name="app" path="/" handler={App}>
            <Route name="yep" handler={Yep}></Route>
            <Route name="about" handler={About}></Route>
            <DefaultRoute handler={HelloWorld}></DefaultRoute>
        </Route>
    </Routes>
);

module.exports = routes;